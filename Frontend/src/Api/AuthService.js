import API from "./api";

// Candidate Signup
export const signup = async (userData) => {
  try {
    const response = await API.post("/auth/signup", userData);
    return response.data;
  } catch (error) {
    console.error("Signup Error:", error.response?.data || error.message);
    throw error;
  }
};

export const verifyOtp = async (email,otp)=>{
    try {
        const response = await API.post("/auth/verify-otp", { email, otp });
        return response.data;
    } catch (error) {
        console.error("OTP Verification Error:", error.response?.data || error.message);
        throw error;
    }
}

export const LoginDetails = async (email, password) => {
  try {
    const response = await API.post("/auth/login", { email, password });
    return response.data;
  } catch (error) {
    console.error("Login Error:", error.response?.data || error.message);
    throw error;
  }
}
