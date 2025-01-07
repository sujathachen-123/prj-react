import React from "react";
import "../project/nav.css";
import logo from '../images/login.jpg'

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Udemy Logo */}
      <div className="logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/e/e3/Udemy_logo.svg"
          alt="Udemy"
          className="logo-image"
        />
      </div>

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for anything"
          className="search-input"
        />
      </div>

      {/* Add to Cart */}
      <div className="cart">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png"
          alt="Add to Cart"
          className="cart-icon"
        />
      </div>

      {/* User Icon */}
      <div className="user-icon">
        {/* <img
          src="https://cdn-icons-png.flaticon.com/512/1177/1177568.png"
          alt="User"
          className="user-icon-image"
        /> */}
        <img
  src={logo}
  alt="User"
  className="user-icon-image"
/>

      </div>
    </div>
  );
};

export default Navbar;
