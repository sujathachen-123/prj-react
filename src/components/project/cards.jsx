import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Authcontext";
import pythonImg from "../images/pythonlogo.jpg";
import jsImg from "../images/jslogo.webp";
import htmlImg from "../images/html.jpg";
import cssImg from "../images/css.webp";
import javaImg from "../images/java.jpg";
import phpImg from "../images/PHP_logo.png";

function BasicExample({ searchQuery }) {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const courses = [
    { title: "Python Beginner", text: "Learn Python from scratch.", image: pythonImg, price: 450, rating: { rate: 4.5, count: 449 }, buttonText: "Start Python" },
    { title: "JavaScript Essentials", text: "Master JavaScript.", image: jsImg, price: 399, rating: { rate: 4.2, count: 398 }, buttonText: "Start JavaScript" },
    { title: "HTML Mastery", text: "Build stunning websites.", image: htmlImg, price: 299, rating: { rate: 4.4, count: 520 }, buttonText: "Start HTML" },
    { title: "CSS Advanced", text: "Style your websites like a pro.", image: cssImg, price: 299, rating: { rate: 3.9, count: 120 }, buttonText: "Start CSS" },
    { title: "Java Programming", text: "Learn Java fundamentals.", image: javaImg, price: 499, rating: { rate: 4.2, count: 220 }, buttonText: "Start Java" },
    { title: "PHP Development", text: "Master PHP for web apps.", image: phpImg, price: 399, rating: { rate: 3.9, count: 120 }, buttonText: "Start PHP" },
  ];

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchQuery) || course.text.toLowerCase().includes(searchQuery)
  );

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        stars.push(<FaStar key={i} className="text-yellow-400 mr-1" />);
      } else if (i - rating < 1) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-400 mr-1" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-400 mr-1" />);
      }
    }
    return stars;
  };

  const handleButtonClick = () => {
    if (isAuthenticated) {
      navigate("/Form");
    } else {
      alert("Please log in to access this course.");
    }
  };

  return (
    <div className="flex justify-center flex-wrap bg-[#2a3f56] p-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl w-full">
        {filteredCourses.map((course, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:-translate-y-3 hover:shadow-2xl max-w-xs">
            <img src={course.image} alt={course.title} className="h-40 w-full object-cover" />
            <div className="p-4">
              <h2 className="text-md font-bold text-gray-800 text-center">{course.title}</h2>
              <p className="text-gray-600 mt-2 text-sm">{course.text}</p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-green-600 font-bold text-md">Rs {course.price}</span>
                <div className="flex items-center">{renderStars(course.rating.rate)}</div>
              </div>
              <button
                onClick={handleButtonClick}
                className="w-full mt-4 bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition-transform transform hover:scale-105"
              >
                {course.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BasicExample;
