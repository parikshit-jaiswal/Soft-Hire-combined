import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
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
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
        {/* Left Column - Contact Information */}
        <div className="align-middle">
          <div className="mb-6 pb-4">
            <h3 className="font-bold text-3xl mb-2">Call Us</h3>
            <p className="text-gray-800 mb-2">
              Call our team Mon-Fri from 8am to 5pm
            </p>
            <p className="font-bold text-xl flex items-center gap-2">
              <img src="Contact/Frame.svg" alt="phone icon" />
              +123-456-7890
            </p>
          </div>

          <div className="mb-6 pb-4">
            <h3 className="font-bold text-3xl mb-2">Chat with us</h3>
            <p className="text-gray-800 mb-2">Speak to our friendly team</p>
            <p className="font-bold text-xl flex items-center gap-2">
              <img src="Contact/frame1.svg" alt="email icon" />
              info@company.com
            </p>
          </div>

          <div className="pb-4">
            <h3 className="font-bold text-3xl mb-2">Visit us</h3>
            <p className="text-gray-800 mb-2">Speak to our friendly team</p>
            <p className="font-bold text-xl flex items-center gap-2">
              <img src="Contact/frame2.svg" alt="location icon" />
              123 Main Street, City, Country
            </p>
          </div>
        </div>

        {/* Right Column - Form */}
        <div>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="firstName" className="font-bold text-2xl">First Name</label>
                <input
                  id="firstName"
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="lastName" className="font-bold text-2xl">Last Name</label>
                <input
                  id="lastName"
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </div>
            </div>

            <div className="mb-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="font-bold text-2xl">
                  Your Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="you@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </div>
            </div>

            <div className="mb-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="phoneNumber" className="font-bold text-2xl">Phone Number</label>
                <div className="relative">
                  <select className="absolute left-3 top-3 bg-white">
                    <option>US</option>
                  </select>
                  <input
                    id="phoneNumber"
                    type="tel"
                    name="phoneNumber"
                    placeholder="+123-456-7890"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                  />
                </div>
              </div>
            </div>

            <div className="mb-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="font-bold text-2xl">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Leave us a message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-2 h-24 border rounded"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-blue-500 text-white w-full font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
