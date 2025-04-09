import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginDetails } from "../Api/AuthService";
import { FaEye, FaEyeSlash } from "react-icons/fa";
const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await LoginDetails(formData.email, formData.password);
      localStorage.setItem("token", response.token); // Store token
      setMessage("Login Successful ✅");
      navigate("/dashboard");
    } catch (error) {
      setMessage("Invalid Email or Password ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/2 bg-colors-customBlue flex justify-center items-center">
        <img src="/Group1.png" alt="Illustration" className="w-3/4" />
      </div>

      <div className="w-1/2 bg-gray-200 flex items-center justify-center">
        <div className="w-4/5 max-w-md">
          <h1 className="md:text-4xl text-3xl font-bold mb-8 text-center">
            Welcome Back!
          </h1>

          {message && (
            <p
              className={`text-center text-lg mb-4 ${
                message.includes("❌") ? "text-red-500" : "text-green-500"
              }`}
            >
              {message}
            </p>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-xl font-bold mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
                required
              />
            </div>

            <div className="mb-6 relative">
              <label
                htmlFor="password"
                className="block text-xl font-bold mb-1"
              >
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-3 pr-10 border border-gray-300 rounded-lg"
                required
              />
              <div
                className="absolute top-[52%] right-4 transform -translate-y-1/2 cursor-pointer text-gray-600 text-lg"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </div>

              <div className="text-right mt-1">
                <button
                  type="button"
                  className="text-blue-900 text-sm font-medium"
                  onClick={() => navigate("/forgot")}
                >
                  Forgot Password?
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-red-400 hover:bg-red-500 text-white py-3 rounded-md font-medium"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Submit"}
            </button>

            <div className="text-center mt-4 text-gray-500">or</div>

            <button
              type="button"
              className="w-full mt-4 bg-white border border-gray-300 py-3 rounded-md font-medium flex items-center justify-center gap-2"
              onClick={() => console.log("Google sign-in clicked")}
            >
              <img src="/google.svg" alt="Google" />
              Sign in with Google
            </button>

            <div className="text-center mt-6">
              Don't have an account?{" "}
              <a href="/signup" className="text-blue-600 font-medium">
                Sign Up
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
