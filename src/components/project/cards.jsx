import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa'; // Importing star icons
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { useAuth } from "../../Authcontext"; 
import pythonImg from '../images/pythonlogo.jpg';
import jsImg from '../images/jslogo.webp';
import htmlImg from '../images/html.jpg';
import cssImg from '../images/css.webp';
import javaImg from '../images/java.jpg';
import phpImg from '../images/PHP_logo.png';
import '../project/cards.css';

function BasicExample() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth(); 
  const courses = [
    {
      title: "Python Beginner",
      text: "Learn Python from scratch with real-world examples.",
      image: pythonImg,
      price: 450,
      rating: {
        rate: 4.5,
        count: 449,
      },
      buttonText: "Start Python",
    },
    {
      title: "JavaScript Essentials",
      text: "Master JavaScript for dynamic web development.",
      image: jsImg,
      price: 399,
      rating: {
        rate: 4.2,
        count: 398,
      },
      buttonText: "Start JavaScript",
    },
    {
      title: "HTML Mastery",
      text: "Build stunning websites with HTML5.",
      image: htmlImg,
      price: 299,
      rating: {
        rate: 4.4,
        count: 520,
      },
      buttonText: "Start HTML",
    },
    {
      title: "CSS Advanced",
      text: "Style your websites like a pro with CSS3.",
      image: cssImg,
      price: 299,
      rating: {
        rate: 3.9,
        count: 120,
      },
      buttonText: "Start CSS",
    },
    {
      title: "Java Programming",
      text: "Learn Java fundamentals for software development.",
      image: javaImg,
      price: 499,
      rating: {
        rate: 4.2,
        count: 220,
      },
      buttonText: "Start Java",
    },
    {
      title: "PHP Development",
      text: "Master PHP to build dynamic web applications.",
      image: phpImg,
      price: 399,
      rating: {
        rate: 3.9,
        count: 120,
      },
      buttonText: "Start PHP",
    },
  ];

  // Function to display star ratings
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        stars.push(<FaStar key={i} style={{ color: "#ffc107", marginRight: "2px" }} />);
      } else if (i - rating < 1) {
        stars.push(<FaStarHalfAlt key={i} style={{ color: "#ffc107", marginRight: "2px" }} />);
      } else {
        stars.push(<FaRegStar key={i} style={{ color: "#ffc107", marginRight: "2px" }} />);
      }
    }
    return stars;
  };

  // Handle button click
  const handleButtonClick = () => {
    if (isAuthenticated) {
      navigate("/Form"); // Navigate to form if authenticated
    } else {
      alert("Please log in to access this course.");
    }
  };

  return (
    <div className="main-container">
      <div className="card-grid">
        {courses.map((course, index) => (
          <Card key={index} className="course-card">
            <Card.Img variant="top" src={course.image} />
            <Card.Body>
              <Card.Title>{course.title}</Card.Title>
              <Card.Text>{course.text}</Card.Text>
              <div className="price-rating">
                <span className="price">Rs {course.price}</span>
                <span className="stars">{renderStars(course.rating.rate)}</span>
                <span className="reviews">({course.rating.count} reviews)</span>
              </div>
              <Button variant="primary" onClick={handleButtonClick}>
                {course.buttonText}
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default BasicExample;
