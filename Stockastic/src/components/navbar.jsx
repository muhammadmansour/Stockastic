import { FaArrowTrendUp } from "react-icons/fa6";
import { Mail, Lock, Eye, EyeOff, ArrowRight, CheckCircle, LogOut } from 'lucide-react';
import { useAuth } from "../contexts/authContexts";
import axios from "axios";
function Navbar() {
	const { auth, loading } = useAuth();


	const apiUrl = import.meta.env.VITE_API_URL;

	async function Logout() {
		try {
			const response = await axios.post(
			`${apiUrl}/logout`,
			{}, // No body needed for logout
			{
				withCredentials: true,
			}
		);
			console.log(response.status == 200)
			if (response.status ==200) {
				window.location.href = "/"
			}

		} catch (error) {
			console.error("Registration failed:", error);
			return error;
		}
	}



	return (
		<div className="flex flex-row p-4 shadow-md justify-between">
			<div className="flex flex-row items-center space-x-2">
				<div>
					<FaArrowTrendUp size={40} color="white" style={{ backgroundColor: "#4338ca", padding: "4px", borderRadius: "5px" }} />
				</div>
				<div className="flex flex-col">
					<h4 className="font-bold text-[#4338CA] dark:text-[#4338CA] text-2xl">
						Stockastic
					</h4>

					<p className="font-sans  text-[#4338CA] dark:text-[#4338CA]">
						Comprehensive financial overview and analytics


					</p>
				</div>
			</div>

			<div className="flex flex-row">
				<a href="dashboard">
					<p>home</p>
				</a>
				<a href="news">
					<p>News</p>
				</a>


				<a href="analysis">
					<p>Analysis</p>
				</a>
			</div>
			<div>
				<button
					onClick={() => Logout()}

					type="submit"
					className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r  text-gray-900 font-medium rounded-lg shadow-sm  focus:outline-none focus:ring-2  disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
				>

					Logout
					<LogOut className="w-5 h-5" />


				</button>


			</div>
		</div>

	)
}

export default Navbar