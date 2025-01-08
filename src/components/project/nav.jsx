import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from '../../Authcontext'; // Use useAuth if AuthContext is not directly exported
import "../project/nav.css";
import logo from "../images/login.jpg";

const Navbar = () => {
  const { currentUser, logout } = useAuth(); // Use useAuth hook
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      alert("You have been logged out.");
      navigate("/Register");
    } catch (error) {
      console.error("Logout Error:", error.message);
    }
  };

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
        {currentUser ? (
          <>
            <span>Welcome, {currentUser.displayName || "User"}</span>
            <button className="btn logout" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <img
            src={logo}
            alt="User"
            className="user-icon-image"
            onClick={() => navigate("/Register")}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
