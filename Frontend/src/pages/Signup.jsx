import React, { useState } from "react";
import { signup } from "../Api/AuthService";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
const Signup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    role: "candidate", // Default role
    organizationName: "",
    website: "",
    industry: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    // Prepare request body based on role
    const requestBody =
      formData.role === "recruiter"
        ? {
            fullName: formData.fullName.trim(),
            email: formData.email.trim(),
            password: formData.password,
            role: "recruiter",
            organizationName: formData.organizationName.trim(),
            website: formData.website.trim(),
            industry: formData.industry.trim(),
          }
        : {
            fullName: formData.fullName.trim(),
            email: formData.email.trim(),
            password: formData.password,
            role: "candidate",
          };

    try {
      const data = await signup(requestBody);
      localStorage.setItem("email", formData.email.trim());
      setMessage("Signup successful! 🎉");
      navigate("/otp");
    } catch (error) {
      setMessage(
        `Error: ${error.response?.data?.message || "Something went wrong"}`
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Side Illustration */}
      <div className="w-1/2 bg-colors-customBlue flex justify-center items-center">
        <img src="/Group1.png" alt="Illustration" className="w-3/4" />
      </div>

      {/* Signup Form */}
      <div className="w-1/2 bg-gray-100 flex items-center justify-center pt-10 pb-10">
        <div className="w-4/5 max-w-md">
          <h1 className="md:text-4xl text-3xl font-bold mb-8 text-center">
            Get Started Now
          </h1>

          {message && <p className="text-center text-lg mb-4">{message}</p>}

          <form onSubmit={handleSubmit}>
            {/* Full Name */}
            <div className="mb-4">
              <label className="block text-xl font-bold">Full Name</label>
              <input
                type="text"
                name="fullName"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg"
                required
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label className="block text-xl font-bold">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg"
                required
              />
            </div>

            {/* Password */}
            <div className="mb-4 relative">
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
                className="absolute top-[52%] right-4 transform -translate-y-1/2 cursor-pointer text-gray-600 text-lg mt-3"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>

            {/* Role Selection */}
            <div className="mb-4">
              <label className="block text-xl font-bold">Role</label>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg"
              >
                <option value="candidate">Candidate</option>
                <option value="recruiter">Recruiter</option>
              </select>
            </div>

            {/* Recruiter Extra Fields */}
            {formData.role === "recruiter" && (
              <>
                <div className="mb-4">
                  <label className="block text-xl font-bold">
                    Organization
                  </label>
                  <input
                    type="text"
                    name="organizationName"
                    placeholder="Enter organization name"
                    value={formData.organizationName}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-xl font-bold">Website</label>
                  <input
                    type="text"
                    name="website"
                    placeholder="Enter website URL"
                    value={formData.website}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-xl font-bold">Industry</label>
                  <input
                    type="text"
                    name="industry"
                    placeholder="Enter industry type"
                    value={formData.industry}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg"
                  />
                </div>
              </>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-red-400 hover:bg-red-500 text-white py-3 rounded-md font-medium flex justify-center"
              disabled={loading}
            >
              {loading ? <span className="loader"></span> : "Submit"}
            </button>
          </form>

          {/* Google Sign-in */}
          <div className="text-center mt-4 text-gray-500">or</div>

          <button
            type="button"
            className="w-full mt-4 bg-white border border-gray-300 py-3 rounded-md font-medium flex items-center justify-center gap-2"
            onClick={() => console.log("Google sign-in clicked")}
          >
            <img src="/google.svg" alt="Google" /> Sign in with Google
          </button>

          <div className="text-center mt-6">
            Have an account?{" "}
            <a href="/login" className="text-blue-600 font-medium">
              Sign In
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
