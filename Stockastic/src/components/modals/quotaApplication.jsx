import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import SuccessToast from "../toasts/sucessToast";
import { useState } from "react";
import axios from "axios";
function QuotaApplicationModal({ applicationQuotaModal, setErrorToast, setAppQutaoModal, setToast, setResponse }) {

	const [buttonStatus, setButtonStatus] = useState(false)

	const apiUrl = import.meta.env.VITE_API_URL;

	// Initial form values
	const initialValues = {
		name: "",
		email: "",
		phone: "",
		details: "",
	};

	// Yup validation schema
	const validationSchema = Yup.object({
		name: Yup.string().required("Name is required"),
		email: Yup.string()
			.email("Invalid email address")
			.required("Email is required"),
		phone: Yup.string()
			.matches(/^\+?\d{7,15}$/, "Invalid phone number")
			.required("Phone is required"),
		details: Yup.string().required("Details are required"),
	});

	const handleSubmit = (values) => {
		setButtonStatus(true)

		axios.post(`https://authapi.stockastic.app/api/quota-application`, {
			values
		})
			.then(function (response) {
			

				if (response.status === 200) {
					setResponse(response.data.Message)
					setToast("flex")
					setTimeout(() => {
						setToast("hidden")
					}, 3000);

					setAppQutaoModal("hidden")

				} else {

					setResponse(response.response.data.Message)

					setErrorToast("flex")
				}
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	return (
		<div
			id="authentication-modal"
			tabIndex="-1"
			aria-hidden="true"
			className={`${applicationQuotaModal}  shadow-4xl overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}
		>
			<div className="relative p-4 w-full max-w-2xl h-[70vh]">
				<div className="relative bg-white shadow-sm border border-gray-200 h-full">
					<div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-200">
						<h3 className="text-xl font-normal text-gray-900 ">
							Request quota increase
						</h3>
						<button
							onClick={() => setAppQutaoModal("hidden")}
							type="button"
							className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
						>
							<svg
								className="w-3 h-3"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 14 14"
							>
								<path
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
								/>
							</svg>
							<span className="sr-only">Close modal</span>
						</button>
					</div>

					<div className="p-4 md:p-5 overflow-y-auto">
						<Formik
							initialValues={initialValues}
							validationSchema={validationSchema}
							onSubmit={handleSubmit}
						>
							{() => (
								<Form className="space-y-4">
									{/* Name */}
									<div>
										<label className="block mb-2 text-sm font-medium text-gray-900">
											Name
										</label>
										<Field
											type="text"
											name="name"
											className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
										/>
										<ErrorMessage
											name="name"
											component="div"
											className="text-red-500 text-sm"
										/>
									</div>

									{/* Email */}
									<div>
										<label className="block mb-2 text-sm font-medium text-gray-900">
											Email
										</label>
										<Field
											type="email"
											name="email"
											placeholder="name@company.com"
											className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
										/>
										<ErrorMessage
											name="email"
											component="div"
											className="text-red-500 text-sm"
										/>
									</div>

									{/* Phone */}
									<div>
										<label className="block mb-2 text-sm font-medium text-gray-900">
											Phone
										</label>
										<Field
											type="text"
											name="phone"
											className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
										/>
										<ErrorMessage
											name="phone"
											component="div"
											className="text-red-500 text-sm"
										/>
									</div>

									{/* Details */}
									<div>
										<label className="block mb-2 text-sm font-medium text-gray-900">
											Details
										</label>
										<Field
											as="textarea"
											name="details"
											className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 min-h-[150px]"
										/>
										<ErrorMessage
											name="details"
											component="div"
											className="text-red-500 text-sm"
										/>
									</div>

									{/* Submit button */}
									<button
									disabled={buttonStatus}
										type="submit"
										className="w-full text-white bg-blue-700 hover:bg-blue-800 rounded-lg text-sm px-5 py-2.5"
									>
										Submit
									</button>
								</Form>
							)}
						</Formik>
					</div>
				</div>
			</div>
		</div>
	);
}

export default QuotaApplicationModal;
