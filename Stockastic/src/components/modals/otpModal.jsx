import { X, Shield, ArrowRight, RotateCcw } from 'lucide-react';
import { useRef, useState } from 'react';
import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_URL;

function OTPModal({ otpModal, setOtpModal, email,  errorToast, setErrorToast, toast, setToast , response, setResponse}) {

	const otpRef = useRef()
  const handleSubmit = async () => {
    const otp = otpRef.current.value;

    if (!email || !otp) {
      setErrorToast("flex");
      setResponse("Email or OTP is missing.");
      setTimeout(() => setErrorToast("hidden"), 3000);
      return;
    }

    try {
      const response = await axios.post(`https://authapi.stockastic.app/api/otp-verification`, {
        email,
        otp,
      });

      const message = response?.data?.data?.Message || "Verified successfully";
	  console.log(message)
      setToast("flex");
      setResponse(message);
      setTimeout(() => setToast("hidden"), 3000);
	  setOtpModal("hidden")
    } catch (error) {
      const errorMsg =
        error?.response?.data?.Message || "OTP verification failed.";
      console.error("OTP Error:", error.response?.data);

      setErrorToast("flex");
	  console.log(errorMsg)
      setResponse(errorMsg);
      setTimeout(() => setErrorToast("hidden"), 3000);
    }
  };
	return (
<div
  id="default-modal"
  tabIndex="-1"
  aria-hidden="true"
  className={`${otpModal} fixed inset-0 z-40 flex items-center justify-center bg-black/60`}
>		
  <div className="relative p-4 w-full max-w-2xl max-h-full">
    <div className="relative bg-white rounded-lg shadow-sm">
					<div class="flex items-center justify-between p-3 md:p-5  rounded-t dark:border-gray-600 border-gray-200">
						<div className="flex items-center justify-between p-2 border-b border-slate-200">
							<div className="flex items-center space-x-3">
								<div className="bg-blue-100 p-2 rounded-lg">
									<Shield className="h-6 w-6 text-blue-600" />
								</div>
								<div>
									<h2 className="text-xl font-semibold text-slate-900">Verify Your Identity</h2>
									<p className="text-sm text-slate-500">Enter the verification code</p>
								</div>
							</div>
							<button  onClick={() => setOtpModal("hidden")} type="button" className="p-2 hover:bg-slate-100 rounded-lg transition-colors duration-200"
								data-modal-hide="default-modal">
								<svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
									<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
								</svg>
								<span class="sr-only">Close modal</span>
							</button>
						</div>

					</div>

					<div className="flex justify-center space-x-3 mt-10 mb-10 flex-col ">
						<p className="text-slate-600 mb-2 m-auto">
							We've sent a 6-digit verification code to</p>

						<p className="text-slate-900 mb-2 m-auto">
							{email}</p>
						<input
						onChange={()=> console.log(otpRef.current.value)}

						ref={otpRef}

							type="text"
							inputMode="numeric"
							maxLength={6}
							placeholder='OTP Verification'
							className='border border-slate-300 focus:border-blue-500 focus:ring-blue-200  h-10 w-90 m-auto text-gray-900 dark:text-gray-900 text-center rounded-md'

						/>

						<button
						
						onClick={()=> handleSubmit()}
						className="w-90 m-auto h-15 mt-10  mb-10 rounded-xl bg-blue-600 text-white py-3 px-4  font-medium hover:bg-blue-700 disabled:bg-slate-300 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center space-x-2"
					>
						Verify Code

					</button>
					</div>

				
					




				</div>
			</div>
		</div>
	)
}

export default OTPModal