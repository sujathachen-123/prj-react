import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./project/login.jsx";
import Navbar from "../components/project/nav.jsx";
import Imagebar from "../components/project/imagebar.jsx";
import Courses from "../components/project/cards.jsx";
import Form from "../components/project/form.jsx";

import Footer from "../components/project/footer.jsx";

const Wed = () => {
  return (
    <>
      <Router>
        {/* <Register /> */}
        <Navbar />
     <Routes>
     <Route path="/" element={<Imagebar />} />
     <Route path="/Register" element={<Register />} />
      <Route path="/Form" element={<Form />} />
  

     </Routes>
        {/* <Imagebar /> */}
        <Courses/>
        {/* <Form /> */}

        <Footer />
      </Router>
    </>
  );
};
export default Wed;
