import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./project/Register.jsx";
// import { AuthProvider } from "./project/Auth.js";
import { AuthProvider } from '../Authcontext.jsx';
import Navbar from "../components/project/nav.jsx";
import Imagebar from "../components/project/imagebar.jsx";
import Courses from "../components/project/cards.jsx";
import Form from "../components/project/form.jsx";
import Payment from "../components/project/payment.jsx"
import Footer from "../components/project/footer.jsx";

const Wed = () => {
  return (
    
      <AuthProvider>
      <Router>
        {/* <Register /> */}
        <Navbar />
     <Routes>
     <Route path="/" element={<Imagebar />} />
     <Route path="/Register" element={<Register />} />
      <Route path="/Form" element={<Form />} />
      <Route path="/Payment" element={<Payment />} />
      

  

     </Routes>
        {/* <Imagebar /> */}
        <Courses/>
        {/* <Payment/> */}
        {/* <Form /> */}

        <Footer />
     

      </Router>
      </AuthProvider>
      
    
  );
};
export default Wed;
