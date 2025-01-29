import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Authcontext";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import img1 from "../images/img-1.webp";

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
const db = getFirestore(app); // Initialize Firestore

const Register = () => {
  const navigate = useNavigate();
  const { logIn } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
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
        const user = userCredential.user;
        toast.success(`Welcome, ${user.displayName || "User"}! You are successfully logged in.`);
        logIn();
        navigate("/");
      } catch (error) {
        console.error("Login Error:", error.message);
        toast.error("Login failed. Please check your credentials.");
      }
    } else {
      if (password !== confirmPassword) {
        toast.error("Passwords do not match!");
        return;
      }
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        await updateProfile(user, { displayName: username });
        // await sendEmailVerification(user);
         // Store user data in Firestore
        await setDoc(doc(db, "usersRegistration", user.uid), {
          uid: user.uid,
          username: username,
          email: email,
          createdAt: new Date(),
        });

        await sendEmailVerification(user);
        toast.success(`Welcome, ${username}! Registration successful.`);
        logIn();
        navigate("/");
      } catch (error) {
        console.error("Registration Error:", error.message);
        toast.error("Registration failed. Please try again.");
      }
    }
  };

  //       toast.success(`Welcome, ${username}! Registration successful.`);
  //       logIn();
  //       navigate("/");
  //     } catch (error) {
  //       console.error("Registration Error:", error.message);
  //       toast.error("Registration failed. Please try again.");
  //     }
  //   }
  // };

  const handleGuestLogin = () => {
    logIn();
    toast.success("Welcome, Guest! You are successfully logged in.");
    navigate("/");
  };

  return (
    <div className="flex flex-wrap justify-center items-center min-h-screen bg-gray-100 p-5">
      <div className="flex flex-1 justify-center items-center p-5">
        <img
          src={img1}
          alt="Registration Illustration"
          className="max-w-md rounded-lg shadow-lg"
        />
      </div>
      <div className="flex flex-1 flex-col bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">
          {isLogin ? "Log In" : "Sign Up"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <div>
              <label className="block font-semibold mb-2">Username:</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                required
                className="w-full p-2 border rounded-md"
              />
            </div>
          )}
          <div>
            <label className="block font-semibold mb-2">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full p-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block font-semibold mb-2">Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
              className="w-full p-2 border rounded-md"
            />
          </div>
          {!isLogin && (
            <div>
              <label className="block font-semibold mb-2">Confirm Password:</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                required
                className="w-full p-2 border rounded-md"
              />
            </div>
          )}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
          >
            {isLogin ? "Log In" : "Sign Up"}
          </button>
        </form>
        <p className="text-center mt-4">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            className="text-blue-500 hover:underline"
            onClick={() => setIsLogin((prev) => !prev)}
          >
            {isLogin ? "Sign Up" : "Log In"}
          </button>
        </p>
        <button
          onClick={handleGuestLogin}
          className="w-full bg-green-500 text-white py-2 px-4 rounded-md mt-4 hover:bg-green-600 transition"
        >
          Guest Login
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
