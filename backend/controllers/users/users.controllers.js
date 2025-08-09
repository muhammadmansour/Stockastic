const prisma = require("../../database/databaseConnection")
const bcrypt = require("bcrypt")
const { generateOTP } = require("../../utils/otpGeneration")
const sendOtpEmail = require("../../utils/nodeMailer")
const jwt = require("jsonwebtoken")
const dotenv = require("dotenv")


dotenv.config({ path: "./.env" })
exports.register = async (req, res) => {
	try {
		console.log(req.body)
		const { email, quota, password } = req.body;
		const role = "user";
		const checkEmail = await prisma.users.findUnique({
			where: {
				email: email
			}
		});

		if (checkEmail) {
			return res.status(409).json({ statusCode: "409", Message: "Email already registered" })
		}

		const hashedPassword = await bcrypt.hash(password, 10);


		const user = await prisma.users.create({
			data: {
				email,
				role,
				quota,
				hashedPassword
			}
		});

		const OTP = generateOTP()
		try {
			await sendOtpEmail(email, OTP);
		} catch (err) {
			console.error("Error sending OTP email:", err);
			return res.status(500).json({
				statusCode: 500,
				message: "Failed to send OTP email"
			});
		}

		await prisma.users.update({
			where: { email: email },
			data: { otp: parseInt(OTP) }
		});


		res.status(201).json({ user: user, message: "OTP sent to you email" });



	} catch (e) {
		console.error(e)
		res.status(500).json({ stautsCode: "500", Message: "Internal server error" })
	}
}

exports.verifyotp = async (req, res) => {
	try {
		const { email, otp } = req.body

		const user = await prisma.users.findUnique({
			where: {
				email: email
			}
		});

		const userOTP = user.otp

		console.log(userOTP)
		console.log(otp)

		console.log(otp != userOTP)

		if (otp != userOTP) {
			return res.status(401).json({ Message: "Invalid OTP" })
		}



		const activateUser = await prisma.users.update({
			where: {
				email,
			},
			data: {
				status: "active",
				otp: null
			},
		});

		if (activateUser.count === 0) {
			throw new Error("something went wrong while activating user")
		}


		return res.status(201).json({ statusCode: "200", Message: "Activated successfully" })


	} catch (e) {
		console.error(e)
		res.status(500).json({ stautsCode: "500", Message: "Internal server error" })
	}
}


exports.login = async (req, res) => {
	try {
		console.log(req.body)
		const { email, password } = req.body

		const checkEmail = await prisma.users.findUnique({
			where: {
				email: email,
				status: "active"
			}
		});

		console.log(checkEmail)

		if (!checkEmail) {
			return res.status(409).json({ statusCode: "409", Message: "No active email found" })
		}




		const validPassword = await bcrypt.compare(password, checkEmail.hashedPassword)

		if (!validPassword) {
			return res.status(409).json({ statusCode: "403", Message: "Wrong password" })

		}

		const JWT = jwt.sign({ email: checkEmail.email, quota: checkEmail.quota, id: checkEmail.id }, process.env.JWT_KEY)

		console.log(JWT)
		res.cookie('token', JWT, {
			httpOnly: true,
			secure: false,
			sameSite: 'lax',
			maxAge: 1000 * 60 * 60 * 24,
		});

		return res.status(200).json({ statusCode: "200", Message: "valid credenitals" })


	} catch (e) {
		console.error(e)
		res.status(500).json({ stautsCode: "500", Message: "Internal server error" })
	}
}

exports.quotaCheck = async (req, res) => {
	try {
		console.log(req.cookie)
		console.log(req.cookies.token)
		const { token } = req.cookies

		const decodedToken = jwt.decode(token, process.env.JWT_KEY)

		const { email } = decodedToken

		const check = await prisma.users.findUnique({
			where: {
				email: email,
			}
		});


		if (check.quota === 0) {
			return res.status(429).json({ statusCode: "429", Message: "Quota exceeded" })
		}
		return res.status(200).json({ quota: check.quota })
	} catch (e) {
		console.error(e)
		res.status(500).json({ stautsCode: "500", Message: "Internal server error" })
	}
}


exports.quotaUpdate = async (req, res) => {
	try {


		const { token } = req.cookies

		const decodedToken = jwt.decode(token, process.env.JWT_KEY)

		const { email } = decodedToken


		const user = await prisma.users.findUnique({
			where: { email },
		});


		const updatedUser = await prisma.users.update({
			where: { email },
			data: {
				quota: user.quota - 1,
			},
		});





		if (!updatedUser) {

			throw new Error("something went wrong while updating quota")
		}
		return res.status(200).json({ Message: "quota updated" })
	} catch (e) {
		console.error(e)
		res.status(500).json({ stautsCode: "500", Message: "Internal server error" })
	}
}


exports.authToken = async (req, res) => {
	try {
		console.log(req.cookies)

		const { token } = req.cookies

		const verifyToken = jwt.verify(token, process.env.JWT_KEY)

		if (!verifyToken) {
			return res.json(401).json({ statusCode: "401", Message: "Invalid Token" })
		}

		return res.status(200).json({ statusCode: "200", Message: "Valid token" })
	} catch (e) {
		console.error(e)
		res.status(500).json({ stautsCode: "500", Message: "Internal server error" })
	}
}


exports.logOut = async (req, res) => {
	try {
		res.clearCookie('token');
		return res.status(200).json({ message: 'Logged out successfully' });
	} catch (e) {
		console.error(e)
		res.status(500).json({ stautsCode: "500", Message: "Internal server error" })
	}
}