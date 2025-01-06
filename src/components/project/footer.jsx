import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Section 1: Links */}
        <div className="footer-section">
          <h4>About</h4>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Press</li>
            <li>Blog</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Support</h4>
          <ul>
            <li>Help Center</li>
            <li>Contact Us</li>
            <li>Refund Policy</li>
            <li>Terms of Use</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Teach</h4>
          <ul>
            <li>Become an Instructor</li>
            <li>Instructor Guide</li>
            <li>Affiliate Program</li>
            <li>Partnerships</li>
          </ul>
        </div>

        {/* Section 2: Social Media */}
        <div className="footer-section social-media">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
              alt="Facebook"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
              alt="Twitter"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733558.png"
              alt="LinkedIn"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733590.png"
              alt="Instagram"
            />
          </div>
        </div>
      </div>

      {/* Section 3: Copyright */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Udemy Clone. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
