import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CourseForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    secondName: "",
    email: "",
    phone: "",
    course: "",
    price: "",
  });

  const navigate = useNavigate();

  const courses = [
    { name: "Python", price: 450 },
    { name: "Java", price: 499 },
    { name: "HTML", price: 299 },
    { name: "PHP", price: 299 },
    { name: "JavaScript", price: 399 },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCourseChange = (e) => {
    const selectedCourse = courses.find((course) => course.name === e.target.value);
    setFormData({ ...formData, course: selectedCourse.name, price: selectedCourse.price });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/Payment", { state: { formData } }); // Pass formData to PaymentPage
  };

  return (
    <div className="max-w-sm mx-auto mt-12 p-6 border border-gray-300 rounded-lg bg-gray-50 shadow-md">
      <h2 className="text-center text-2xl font-semibold text-gray-700 mb-6">
        Course Enrollment Form
      </h2>
      <form onSubmit={handleSubmit}>
        {/* First Name */}
        <div className="mb-4">
          <label className="block text-gray-600 mb-2">First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Second Name */}
        <div className="mb-4">
          <label className="block text-gray-600 mb-2">Second Name:</label>
          <input
            type="text"
            name="secondName"
            value={formData.secondName}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-gray-600 mb-2">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Phone Number */}
        <div className="mb-4">
          <label className="block text-gray-600 mb-2">Phone Number:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Course Dropdown */}
        <div className="mb-4">
          <label className="block text-gray-600 mb-2">Course:</label>
          <select
            name="course"
            value={formData.course}
            onChange={handleCourseChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">-- Select a Course --</option>
            {courses.map((course, index) => (
              <option key={index} value={course.name}>
                {course.name}
              </option>
            ))}
          </select>
        </div>

        {/* Price */}
        <div className="mb-4">
          <label className="block text-gray-600 mb-2">Price:</label>
          <input
            type="text"
            value={`Rs ${formData.price}`}
            readOnly
            className="w-full px-3 py-2 border border-gray-300 rounded bg-gray-100 cursor-not-allowed"
          />
        </div>

        {/* Proceed to Pay Button */}
        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Proceed to Pay
        </button>
      </form>
    </div>
  );
};

export default CourseForm;
