import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

import "./login.css"; // CSS file for styling
import img1 from "../images/img-1.webp"; // Import the image

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkvqjaPOPYdUIaFwUdWFCniAxamcSbVs4",
  authDomain: "purchasing-courses.firebaseapp.com",
  projectId: "purchasing-courses",
  storageBucket: "purchasing-courses.firebasestorage.app",
  messagingSenderId: "906606979983",
  appId: "1:906606979983:web:fef2e0a84e107a6017b9fa",
  measurementId: "G-PPD25JPPMB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const Register = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Sign In
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate(); // Initialize useNavigate

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, email, password, confirmPassword } = formData;

    if (isLogin) {
      try {
        // Log in existing user
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        alert(`Welcome ${user.displayName || "User"}! You have successfully logged in.`);
        navigate("/"); // Redirect to ImageBar
      } catch (error) {
        console.error("Login Error:", error.message);
        alert(error.message);
      }
    } else {
      if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
      }
      try {
        // Sign up new user
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Update profile with username
        await updateProfile(user, { displayName: username });

        console.log("Signed up:", user);
        alert(`Welcome ${username}! Account created. Please check your email for verification.`);
        await sendEmailVerification(user);
        navigate("/"); // Redirect to ImageBar
      } catch (error) {
        console.error("Sign Up Error:", error.message);
        alert(error.message);
      }
    }
  };

  const handleGuestLogin = () => {
    console.log("Logging in as Guest");
    alert("Welcome! You have successfully logged in as a guest.");
    navigate("/"); // Redirect to ImageBar for guest login
  };

  return (
    <div className="container" id="login">
      <div className="image-container">
        <img src={img1} alt="Description" className="side-image" />
      </div>
      <div className="form-container">
        <h2>{isLogin ? "Log In" : "Sign up"}</h2>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="form-group">
              <label>Username:</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                required
              />
            </div>
          )}

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

          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>

          {!isLogin && (
            <div className="form-group">
              <label>Confirm Password:</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                required
              />
            </div>
          )}

          <button type="submit" className="btn">
            {isLogin ? "Log In" : "Sign up"}
          </button>
        </form>

        <p className="toggle-text">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button
            type="button"
            className="toggle-btn"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Sign up" : "Log In"}
          </button>
        </p>

        {isLogin && (
          <button
            type="button"
            className="btn guest-login"
            onClick={handleGuestLogin}
          >
            Guest Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Register;
