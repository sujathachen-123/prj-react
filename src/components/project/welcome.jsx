import React from 'react';
import './WelcomePage.css';
import img1 from '../images/logo.jpg'; // Replace with the actual path


const WelcomePage = () => {
  return (
    <div className="container">
      <div className="left-section">
        <img src={img1} alt="Left visual" className="side-image" />
      </div>
      <div className="right-section">
        <div className="content">
          <h1>Welcome to Coders</h1>
          <p>Your journey to mastering code begins here.</p>
          <button className="btn">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
