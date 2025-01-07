import React, { useState } from "react";
import "../project/purchase.css";

const PurchaseDetails = ({ course }) => {
  const [paymentMethod, setPaymentMethod] = useState("Credit Card");

  const handlePurchase = () => {
    alert(`You have successfully purchased the ${course.title} course!`);
    // Add further functionality like backend API calls or navigation here
  };

  return (
    <div className="purchase-container">
      Course Details
      <div className="course-details">
        <img
          src={course.image}
          alt={course.title}
          className="course-image"
        />
        <h2>{course.title}</h2>
        <p>{course.text}</p>
        <p className="course-price">Price: ${course.price}</p>
      </div>

      {/* Payment Details */}
      <div className="payment-details">
        <h3>Payment Information</h3>
        <label>
          Payment Method:
          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option value="Credit Card">Credit Card</option>
            <option value="Debit Card">Debit Card</option>
            <option value="PayPal">PayPal</option>
            <option value="Net Banking">Net Banking</option>
          </select>
        </label>
        <button className="purchase-button" onClick={handlePurchase}>
          Purchase Now
        </button>
      </div>
    </div>
  );
};

export default PurchaseDetails;
