const QuotaEmail = require("../../utils/nodeMailerQuota")
exports.quotaApplication = async (req, res) => {
	try {
	const body = req.body.values
		await QuotaEmail(body);

		res.status(200).json({
			statusCode: "200",
			Message: "Email sent successfully"
		});
	} catch (error) {
		console.error("Error in quotaApplication:", error);

		// Decide between a known email sending error or a generic server error
		if (error.isEmailError) {
			return res.status(500).json({
				statusCode: "500",
				Message: "Failed to send email",
				Error: error.message || "Unknown error"
			});
		}

		res.status(500).json({
			statusCode: "500",
			Message: "Internal server error",
			Error: error.message || "Unknown error"
		});
	}
};
