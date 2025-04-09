import React, { useState } from "react";

const Forgot = () => {
  const [formData, setFormData] = useState({
    email: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your API call or authentication logic here
  };
  return (
    <div className="flex h-screen">
      <div className="w-1/2 bg-colors-customBlue flex justify-center items-center">
        <img src="/Group1.png" alt="Illustration" className="w-3/4" />
      </div>

      <div className="w-1/2 bg-gray-200 flex items-center justify-center">
        <div className="w-4/5 max-w-md">
          <h1 className="md:text-4xl text-3xl font-bold mb-3 text-center">
            Forgot Password
          </h1>
          <p className="text-center text-md text-black mb-8">
            Don’t worry it happens. Please enter the E-mail address associated
            with your account
          </p>

          <form onSubmit={handleSubmit}>
            <div className="mb-8">
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

            <button
              type="submit"
              className="w-full bg-red-400 hover:bg-red-500 text-white py-3 rounded-md font-medium"
            >
              Get OTP
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Forgot;
