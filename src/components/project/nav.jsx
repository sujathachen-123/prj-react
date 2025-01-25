import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Authcontext";
import logo from "../images/login.jpg";

const Navbar = ({ setSearchQuery }) => {
  const { currentUser, logout } = useAuth();
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

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  return (
    <div className="flex items-center justify-between bg-white px-6 py-4 shadow-md">
      <div className="cursor-pointer">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/e/e3/Udemy_logo.svg"
          alt="Udemy"
          className="h-10 w-auto"
        />
      </div>

      <div className="flex-1 mx-8">
        <input
          type="text"
          placeholder="Search for anything"
          onChange={handleSearchChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex items-center space-x-4">
        {currentUser ? (
          <>
            <span className="text-gray-700 font-medium">
              Welcome, {currentUser.displayName || "User"}
            </span>
            <button
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none"
              onClick={handleLogout}
            >
              Logout
            </button>
          </>
        ) : (
          <img
            src={logo}
            alt="User"
            className="h-9 w-9 rounded-full cursor-pointer object-cover hover:scale-105 transition-transform"
            onClick={() => navigate("/Register")}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
