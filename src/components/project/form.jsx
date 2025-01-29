import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { db, collection, addDoc } from "../project/firebase/firebaseconfig"; 

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
    { name: "Angular", price: 499 },
    { name: "React", price: 499 },
    { name: "Sql", price: 399 },
  ];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCourseChange = (e) => {
    const selectedCourse = courses.find((course) => course.name === e.target.value);
    setFormData({
      ...formData,
      course: selectedCourse.name,
      price: selectedCourse.price,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Store data in Firestore Cloud
      const docRef = await addDoc(collection(db, "courseRegistrations"), formData);
      console.log("Document written with ID: ", docRef.id);

      navigate("/Payment", { state: { formData } });
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-end bg-gray-100"
      style={{
        backgroundImage:
          "url('https://static.vecteezy.com/system/resources/previews/027/309/180/original/online-education-with-ai-generated-free-png.png')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
        backgroundSize: "60%",
      }}
    >
      <div className="w-full max-w-md bg-white bg-opacity-90 shadow-md p-8 rounded-lg mr-8 ">
        <h2 className="text-center text-2xl font-bold text-gray-700 mb-6">Course Enrollment Form</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-600 mb-2">First Name:</label>
            <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} required className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" />
          </div>

          <div>
            <label className="block text-gray-600 mb-2">Second Name:</label>
            <input type="text" name="secondName" value={formData.secondName} onChange={handleInputChange} required className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" />
          </div>

          <div>
            <label className="block text-gray-600 mb-2">Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" />
          </div>

          <div>
            <label className="block text-gray-600 mb-2">Phone Number:</label>
            <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" />
          </div>

          <div>
            <label className="block text-gray-600 mb-2">Course:</label>
            <select name="course" value={formData.course} onChange={handleCourseChange} required className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400">
              <option value="">-- Select a Course --</option>
              {courses.map((course, index) => (
                <option key={index} value={course.name}>{course.name}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-gray-600 mb-2">Price:</label>
            <input type="text" value={`Rs ${formData.price}`} readOnly className="w-full px-3 py-2 border border-gray-300 rounded bg-gray-100 cursor-not-allowed" />
          </div>

          <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
            Proceed to Pay
          </button>
        </form>
      </div>
    </div>
  );
};

export default CourseForm;
