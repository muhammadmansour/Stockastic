import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;

async function Register(data) {
	try {
		const response = await axios.post(`${apiUrl}/register`, data); 
		return response; 
	} catch (error) {
		console.error("Registration failed:", error);
		return error;
	}
}


async function LoginService(data) {
  try {
    const response = await axios.post(`${apiUrl}/login`, data, {
      withCredentials: true,
    });
    return response;
  } catch (error) {
    console.error("Login failed:", error);
    return error;
  }
}


export { Register, LoginService }