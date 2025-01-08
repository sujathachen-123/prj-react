// import React, { useState } from "react";
// import "./payment.css";

// const PaymentForm = ({ price }) => {
//   const [paymentMethod, setPaymentMethod] = useState("card"); // Default to card payment
//   const [formData, setFormData] = useState({
//     cardholderName: "",
//     cardNumber: "",
//     expirationDate: "",
//     cvv: "",
//     upiId: "",
//   });
//   const [paymentSuccess, setPaymentSuccess] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setPaymentSuccess(true);
//   };

//   return (
//     <div className="payment-container">
//       <h2>Payment Details</h2>
//       <p className="price-display">Total Amount: Rs {price}</p>

//       <form onSubmit={handleSubmit}>
//         {/* Payment Method Selection */}
//         <div className="form-group">
//           <label>Payment Method:</label>
//           <select
//             name="paymentMethod"
//             value={paymentMethod}
//             onChange={(e) => setPaymentMethod(e.target.value)}
//             className="payment-select"
//           >
//             <option value="card">Credit/Debit Card</option>
//             <option value="upi">UPI (Google Pay, Paytm, PhonePe)</option>
//           </select>
//         </div>

//         {/* Credit/Debit Card Payment Form */}
//         {paymentMethod === "card" && (
//           <>
//             <div className="form-group">
//               <label>Cardholder Name:</label>
//               <input
//                 type="text"
//                 name="cardholderName"
//                 value={formData.cardholderName}
//                 onChange={handleChange}
//                 placeholder="Enter cardholder name"
//                 required
//               />
//             </div>

//             <div className="form-group">
//               <label>Card Number:</label>
//               <input
//                 type="text"
//                 name="cardNumber"
//                 value={formData.cardNumber}
//                 onChange={handleChange}
//                 placeholder="Enter card number"
//                 maxLength="16"
//                 pattern="\d{16}"
//                 required
//               />
//             </div>

//             <div className="form-group">
//               <label>Expiration Date:</label>
//               <input
//                 type="month"
//                 name="expirationDate"
//                 value={formData.expirationDate}
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             <div className="form-group">
//               <label>CVV:</label>
//               <input
//                 type="password"
//                 name="cvv"
//                 value={formData.cvv}
//                 onChange={handleChange}
//                 placeholder="Enter CVV"
//                 maxLength="3"
//                 pattern="\d{3}"
//                 required
//               />
//             </div>
//           </>
//         )}

//         {/* UPI Payment Form */}
//         {paymentMethod === "upi" && (
//           <div className="form-group">
//             <label>UPI ID:</label>
//             <input
//               type="text"
//               name="upiId"
//               value={formData.upiId}
//               onChange={handleChange}
//               placeholder="Enter your UPI ID (e.g., abc@upi)"
//               required
//             />
//           </div>
//         )}

//         {/* Submit Button */}
//         <button type="submit" className="submit-button">
//           Pay Rs {price}
//         </button>
//       </form>

//       {/* Payment Success Message */}
//       {paymentSuccess && (
//         <div className="success-message">
//           <h3>Payment Successful!</h3>
//           <p>Thank you for your payment of Rs {price}. Your transaction was successful.</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PaymentForm;
import React, { useState } from "react";
import "./payment.css"; // Import CSS file for styling

const PaymentPage = () => {
  const [paymentMethod, setPaymentMethod] = useState(""); // Selected payment method
  const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);
  const [price, setPrice] = useState(500); // Course price

  const handlePayment = () => {
    setIsPaymentSuccessful(true); // Simulate successful payment
  };

  return (
    <div className="payment-container">
      <h2 className="title">Purchase Course</h2>
      <p className="course-price">Course Price: <strong>Rs {price}</strong></p>
      <p className="payment-instruction">Select your payment method:</p>

      {/* Radio Buttons for Payment Methods */}
      <div className="payment-options">
        <label className="radio-option">
          <input
            type="radio"
            value="credit"
            checked={paymentMethod === "credit"}
            onChange={() => setPaymentMethod("credit")}
          />
          Credit Card
        </label>
        <label className="radio-option">
          <input
            type="radio"
            value="debit"
            checked={paymentMethod === "debit"}
            onChange={() => setPaymentMethod("debit")}
          />
          Debit Card
        </label>
        <label className="radio-option">
          <input
            type="radio"
            value="upi"
            checked={paymentMethod === "upi"}
            onChange={() => setPaymentMethod("upi")}
          />
          UPI
        </label>
      </div>

      {/* Conditional Rendering for Payment Forms */}
      <div className="payment-details">
        {paymentMethod === "credit" && (
          <div>
            <h3>Enter Credit Card Details</h3>
            <input type="text" placeholder="Card Number" className="input-field" />
            <input type="text" placeholder="Cardholder Name" className="input-field" />
            <input type="text" placeholder="Expiry Date (MM/YY)" className="input-field" />
            <input type="password" placeholder="CVV" className="input-field" />
          </div>
        )}

        {paymentMethod === "debit" && (
          <div>
            <h3>Enter Debit Card Details</h3>
            <input type="text" placeholder="Card Number" className="input-field" />
            <input type="text" placeholder="Cardholder Name" className="input-field" />
            <input type="text" placeholder="Expiry Date (MM/YY)" className="input-field" />
            <input type="password" placeholder="CVV" className="input-field" />
          </div>
        )}

        {paymentMethod === "upi" && (
          <div>
            <h3>Select UPI App</h3>
            <label className="radio-option">
              <input type="radio" name="upi" value="Google Pay" />
              Google Pay
            </label>
            <label className="radio-option">
              <input type="radio" name="upi" value="PhonePe" />
              PhonePe
            </label>
            <label className="radio-option">
              <input type="radio" name="upi" value="Paytm" />
              Paytm
            </label>
          </div>
        )}
      </div>

      {/* Proceed to Pay Button */}
      {paymentMethod && !isPaymentSuccessful && (
        <button className="pay-button" onClick={handlePayment}>
          Proceed to Pay
        </button>
      )}

      {/* Success Message */}
      {isPaymentSuccessful && (
        <div className="success-message">
          <h3>Payment Successful!</h3>
          <p>Thank you for your payment of Rs {price}. Your transaction was successful.</p>
        </div>
      )}
    </div>
  );
};

export default PaymentPage;
