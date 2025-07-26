import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { Mail, Lock, Eye, EyeOff, Building2, ArrowRight, CheckCircle } from 'lucide-react';
import { FaArrowTrendUp } from "react-icons/fa6";
import axios from "axios";
import { Register } from "../services/auth";
import { useFormik } from "formik";
import * as Yup from "yup";
import OTPModal from "../components/modals/otpModal";
import { useState } from "react";
import SuccessToast from "../components/toasts/sucessToast";
import ErrorToast from "../components/toasts/errorToast";

function Registration() {
	const [otpModal, setOtpModal] = useState("hidden")
	const [toast, setToast] = useState("hidden")
		const [response, setResponse] = useState()

	const [errorToast, setErrorToast] = useState("hidden")

	const [values, setValues] = useState()
	const [email, setEmail] = useState()
	const validationSchema = Yup.object({
		email: Yup.string()
			.email("Invalid email")
			.required("Email is required"),
		password: Yup.string()
			.min(8, "Password should be at least 8 characters")
			.required("Password is required"),
		confirmPassword: Yup.string()
			.oneOf([Yup.ref("password"), null], "  passwords don't match ")
			.required("password confirmation is required ")
	});
	

	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
			confirmPassword: "",
		},
		validationSchema,
		onSubmit: async (values) => {
			console.log("Form Submitted:", values);
			setValues(values);

			const response = await Register(values);
			console.log("Response from Register:", response); // ✅ Now this will log actual response

			if (response.status === 201) {
				setToast("flex")
				console.log(response.data.message)
				setResponse(response.data.message)
				setEmail(response.data.user.email)

				setTimeout(() => {
					setToast("hidden")
					setOtpModal("visible")
				}, 3000);

			} else {

				setResponse(response.response.data.Message)

				setErrorToast("flex")

				setTimeout(() => {
					setErrorToast("hidden")
				}, 3000);





			}
		}
	});

	return (


		<div>



			<SuccessToast response={response} toast={toast} setToast={setToast} />
			<ErrorToast response={response} toast={errorToast} setToast={setErrorToast} />
			<OTPModal response={response} setResponse={setResponse} errorToast={errorToast} setErrorToast={setErrorToast} toast={toast} setToast={setToast} email={email} setOtpModal={setOtpModal} otpModal={otpModal} />
			<div class="min-h-screen flex flex-col justify-center items-center bg-[#f4f8fd] space-y-4">
				<div className="items-center text-center flex flex-col space-y-2">
					<div>
						<FaArrowTrendUp size={80} color="white" style={{ backgroundColor: "#4338ca", padding: "6px", borderRadius: "8px" }} />
					</div>

					<div>
						<h4 className="font-bold text-3xl text-black m-auto text-center">Stockastic</h4>

					</div>
					<div>
						<h4 className="font-sans text-3xl text-black m-auto text-center">Create Account</h4>
					</div>
				</div>
				<form onSubmit={formik.handleSubmit} class="space-y-4 bg-white rounded-2xl w-[500px] h-[500px] shadow-md p-5">

					<label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
						Email Address
					</label>
					<div className="space-y-1">
						<div className="relative">
							<div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
								<svg
									className="w-4 h-4 text-gray-500"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="currentColor"
									viewBox="0 0 20 16"
								>
									<path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
									<path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
								</svg>
							</div>

							{/* Input Field */}
							<input
								id="email"
								name="email"
								type="email"
								placeholder="example@email.com"
								{...formik.getFieldProps("email")}
								className={`h-14 ps-10 p-2.5 w-full border rounded-lg text-md text-black bg-white focus:ring-blue-500 focus:border-blue-500
        ${formik.touched.email && formik.errors.email ? "border-red-500" : "border-gray-300"}`}
							/>
						</div>

						{/* Error Message (takes space below input, doesn't affect icon alignment) */}
						<div className="min-h-[20px]">
							{formik.touched.email && formik.errors.email && (
								<p className="text-sm text-red-600">{formik.errors.email}</p>
							)}
						</div>
					</div>



					<label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
						Password
					</label>
					<div className="space-y-1">
						{/* Input + Icon container */}
						<div className="relative">
							<div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
								<svg
									className="w-6 h-6 text-gray-500"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									fill="none"
									viewBox="0 0 24 24"
								>
									<path
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M12 14v3m-3-6V7a3 3 0 1 1 6 0v4m-8 0h10a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1Z"
									/>
								</svg>
							</div>

							{/* Password input */}
							<input
								id="password"
								name="password"
								type="password"
								placeholder="Create strong password"
								{...formik.getFieldProps("password")}
								className={`h-14 ps-10 p-2.5 w-full border rounded-lg text-md text-black bg-white focus:ring-blue-500 focus:border-blue-500
        ${formik.touched.password && formik.errors.password ? "border-red-500" : "border-gray-300"}`}
							/>
						</div>

						{/* Error message below input */}
						<div className="min-h-[20px]">
							{formik.touched.password && formik.errors.password && (
								<p className="text-sm text-red-600">{formik.errors.password}</p>
							)}
						</div>
					</div>



					<label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
						Confirm password
					</label>
					<div className="space-y-1">
						{/* Icon + Input */}
						<div className="relative">
							<div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
								<svg
									className="w-6 h-6 text-gray-500"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									fill="none"
									viewBox="0 0 24 24"
								>
									<path
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M12 14v3m-3-6V7a3 3 0 1 1 6 0v4m-8 0h10a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1Z"
									/>
								</svg>
							</div>

							{/* Confirm Password input */}
							<input
								id="confirmPassword"
								name="confirmPassword"
								type="password"
								placeholder="Confirm your password"
								{...formik.getFieldProps("confirmPassword")}
								className={`h-14 ps-10 p-2.5 w-full border rounded-lg text-md text-black bg-white focus:ring-blue-500 focus:border-blue-500
        ${formik.touched.confirmPassword && formik.errors.confirmPassword
										? "border-red-500"
										: "border-gray-300"
									}`}
							/>
						</div>

						{/* Error Message */}
						<div className="min-h-[20px]">
							{formik.touched.confirmPassword && formik.errors.confirmPassword && (
								<p className="text-sm text-red-600">
									{formik.errors.confirmPassword}
								</p>
							)}
						</div>
					</div>

					<button
						type="submit"
						className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-medium rounded-lg shadow-sm hover:from-blue-700 hover:to-indigo-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
					>

						Create Account
						<ArrowRight className="w-5 h-5" />


					</button>

					<p className="text-gray-900 font-sans m-auto text-center">Already have an account?
						<a className="ml-2" href="/login">
							Sign in here
						</a>
					</p>
				</form>
			</div>

		</div>

	)
}

export default Registration