// Import Firebase functions
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import React, { useState } from "react";
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

const App = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Sign In
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password, confirmPassword } = formData;

    if (isLogin) {
      try {
        // Log in existing user
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log("Logged in:", userCredential.user);
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
        console.log("Signed up:", userCredential.user);
        alert("Account created! Please check your email for verification.");
        // Send email verification
        await sendEmailVerification(userCredential.user);
      } catch (error) {
        console.error("Sign Up Error:", error.message);
        alert(error.message);
      }
    }
  };

  const handleGuestLogin = () => {
    console.log("Logging in as Guest");
  };

  return (
    <div className="container">
      <div className="image-container">
        <img src={img1} alt="Description" className="side-image" />
      </div>
      <div className="form-container">
        <h2>{isLogin ? "Log In" : "Sign up"}</h2>
        <form onSubmit={handleSubmit}>
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

export default App;
