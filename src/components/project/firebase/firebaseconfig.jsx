


// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDkvqjaPOPYdUIaFwUdWFCniAxamcSbVs4",
  authDomain: "purchasing-courses.firebaseapp.com",
  projectId: "purchasing-courses",
  storageBucket: "purchasing-courses.firebasestorage.app",
  messagingSenderId: "906606979983",
  appId: "1:906606979983:web:fef2e0a84e107a6017b9fa",
  measurementId: "G-PPD25JPPMB"
};

const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db, collection, addDoc };