import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./project/Register.jsx";
import { AuthProvider } from "../Authcontext.jsx";
import Navbar from "../components/project/nav.jsx";
import Imagebar from "../components/project/imagebar.jsx";
import Courses from "../components/project/cards.jsx";
import Form from "../components/project/form.jsx";
import Payment from "../components/project/payment.jsx";
import Footer from "../components/project/footer.jsx";
import Video from "../components/project/videos.jsx";

const Wed = () => {
  const [searchQuery, setSearchQuery] = useState(""); // State to manage search query

  return (
    <AuthProvider>
      <Router>
        {/* Navbar with search functionality */}
        <Navbar setSearchQuery={setSearchQuery} />
        <Routes>
          <Route path="/" element={<Imagebar />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Form" element={<Form />} />
          <Route path="/Payment" element={<Payment />} />
          <Route path="/Learn your favourite course" element={<Video />} />
        </Routes>
        {/* Courses filtered based on search query */}
        <Courses searchQuery={searchQuery} />
        {/* Footer */}
        <Footer />
      </Router>
    </AuthProvider>
  );
};

export default Wed;
