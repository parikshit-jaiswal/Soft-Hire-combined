import React, { useState } from "react";

const ScheduleDemoForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    organization: "",
    date: "",
    time: "",
    phone: "",
    comments: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Demo Scheduled Successfully!");
  };

  return (
    <div className="flex flex-col md:flex-row bg-gray-100 p-8 rounded-lg shadow-lg w-full mx-auto mt-20">
      {/* Left Section */}
      <div className="md:w-1/2 pr-6">
        <h2 className=" md:text-5xl text-3xl font-bold mb-4">
          Schedule a Demo Now
        </h2>
        <ul className="text-gray-800 space-y-2 pt-10 list-disc pl-5">
          <li className="md:text-2xl text-xl font-semibold text-gray-800 p-2">
            Get a personalized walkthrough of our platform.
          </li>
          <li className="md:text-2xl text-xl font-semibold text-gray-800 p-2 ">
            See how our features can benefit your business.
          </li>
          <li className="md:text-2xl text-xl font-semibold text-gray-800 p-2">
            Ask questions and get expert insights.
          </li>
        </ul>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 bg-white p-6 rounded-lg shadow-md">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <label className="font-bold text-xl">First Name</label>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-bold text-xl">Last Name</label>
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="p-3 border rounded w-full"
                required
              />
            </div>
          </div>
          <div>
            <label className="font-bold text-xl">Email</label>
            <input
              type="email"
              name="email"
              placeholder="you@company.com"
              value={formData.email}
              onChange={handleChange}
              className="p-3 border rounded w-full"
              required
            />
          </div>
          <div>
            <label className="font-bold text-xl">Organization</label>
            <input
              type="text"
              name="organization"
              placeholder="Organization Name"
              value={formData.organization}
              onChange={handleChange}
              className="p-3 border rounded w-full"
            />
          </div>
          <div>
            <label className="font-bold text-xl">Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="p-3 border rounded w-full"
              required
            />
          </div>
          <div>
            <label className="font-bold text-xl">Time</label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="p-3 border rounded w-full"
              required
            />
          </div>
          <div>
            <label className="font-bold text-xl">Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="+123-456-7890"
              value={formData.phone}
              onChange={handleChange}
              className="p-3 border rounded w-full"
              required
            />
          </div>
          <div>
            <label className="font-bold text-xl">Comments</label>
            <textarea
              name="comments"
              placeholder="Add any comments"
              value={formData.comments}
              onChange={handleChange}
              className="p-3 border rounded w-full"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white p-3 rounded w-full hover:bg-blue-700"
          >
            Schedule Demo
          </button>
        </form>
      </div>
    </div>
  );
};

export default ScheduleDemoForm;
