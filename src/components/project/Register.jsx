import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInAnonymously,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import "../project/Register.css"; // Ensure proper styling is applied

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
initializeApp(firebaseConfig);
const auth = getAuth();

const Register = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Sign Up
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    username: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password, confirmPassword, username } = formData;

    if (isLogin) {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        alert(`Welcome back, ${userCredential.user.displayName || "User"}!`);
        navigate("/dashboard"); // Redirect after successful login
      } catch (error) {
        console.error("Login Error:", error.message);
        alert("Login failed. Please check your credentials.");
      }
    } else {
      if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
      }
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(userCredential.user, { displayName: username });
        await sendEmailVerification(userCredential.user);
        alert("Registration successful! Please verify your email.");
        navigate("/dashboard"); // Redirect after successful registration
      } catch (error) {
        console.error("Registration Error:", error.message);
        alert("Registration failed. Please try again.");
      }
    }
  };

  const handleGuestLogin = async () => {
    try {
      const userCredential = await signInAnonymously(auth);
      alert("Welcome, Guest! You are logged in anonymously.");
      navigate("/dashboard"); // Redirect to the main application for guest users
    } catch (error) {
      console.error("Guest Login Error:", error.message);
      alert("Guest login failed. Please try again later.");
    }
  };

  return (
    <div className="register-container">
      <h2>{isLogin ? "Log In" : "Sign Up"}</h2>
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
        <button type="submit">{isLogin ? "Log In" : "Sign Up"}</button>
      </form>
      <p>
        {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
        <button
          className="toggle-btn"
          onClick={() => setIsLogin((prev) => !prev)}
        >
          {isLogin ? "Sign Up" : "Log In"}
        </button>
      </p>
      <button
        className="btn guest-login"
        onClick={handleGuestLogin}
      >
        Guest Login
      </button>
    </div>
  );
};

export default Register;
