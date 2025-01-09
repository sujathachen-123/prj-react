import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./form.css";

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
    { name: "Html", price: 299 },
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
    console.log("Form Data:", formData);
    navigate("/Payment", { state: { formData } });
  };

  return (
    <div className="form-container">
      <h2>Course Enrollment Form</h2>
      <form onSubmit={handleSubmit}>
        {/* First Name */}
        <div className="form-group">
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Second Name */}
        <div className="form-group">
          <label>Second Name:</label>
          <input
            type="text"
            name="secondName"
            value={formData.secondName}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Email */}
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Phone Number */}
        <div className="form-group">
          <label>Phone Number:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Course Dropdown */}
        <div className="form-group">
          <label>Course:</label>
          <select name="course" value={formData.course} onChange={handleCourseChange} required>
            <option value="">-- Select a Course --</option>
            {courses.map((course, index) => (
              <option key={index} value={course.name}>
                {course.name}
              </option>
            ))}
          </select>
        </div>

        {/* Price */}
        <div className="form-group">
          <label>Price:</label>
          <input type="text" value={`Rs ${formData.price}`} readOnly />
        </div>

        {/* Proceed to Pay Button */}
        <button type="submit" className="proceed-button" >
          Proceed to Pay
        </button>
      </form>
    </div>
  );
};

export default CourseForm;
