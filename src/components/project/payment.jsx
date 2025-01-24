import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";

const PaymentPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { formData } = location.state || {};
  const [paymentMethod, setPaymentMethod] = useState("");
  const [formDetails, setFormDetails] = useState({
    cardNumber: "",
    cardholderName: "",
    expiryDate: "",
    cvv: "",
    upiApp: "",
  });
  const [error, setError] = useState("");

  const coursePrice = formData?.price || 0;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormDetails((prev) => ({ ...prev, [name]: value }));
    setError(""); // Clear error on input change
  };

  const validateInputs = () => {
    if (paymentMethod === "credit" || paymentMethod === "debit") {
      const { cardNumber, cardholderName, expiryDate, cvv } = formDetails;
      if (!cardNumber || !cardholderName || !expiryDate || !cvv) {
        setError("Please fill in all the required fields.");
        return false;
      }
    } else if (paymentMethod === "upi" && !formDetails.upiApp) {
      setError("Please select a UPI app.");
      return false;
    }
    return true;
  };

  const handlePayment = () => {
    if (!validateInputs()) return;

    // SweetAlert for payment success
    Swal.fire({
      icon: "success",
      title: "Payment Successful!",
      text: `Thank you for your payment of Rs ${coursePrice}. You will be redirected shortly.`,
      confirmButtonText: "OK",
      confirmButtonColor: "#4CAF50",
    }).then(() => {
      navigate("/Learn your favourite course");
    });
  };

  return (
    <div className="max-w-lg mx-auto my-10 p-6 border border-gray-200 rounded-lg shadow-lg bg-white font-sans">
      <h2 className="text-center text-2xl font-semibold text-gray-800 mb-6">Purchase Course</h2>
      <p className="text-lg text-gray-700 mb-4">
        Course Price: <strong>Rs {coursePrice}</strong>
      </p>
      <p className="text-base text-gray-600 mb-6">Select your payment method:</p>

      {/* Radio Buttons for Payment Methods */}
      <div className="mb-6">
        {["credit", "debit", "upi"].map((method) => (
          <label key={method} className="block mb-4 text-gray-700">
            <input
              type="radio"
              value={method}
              checked={paymentMethod === method}
              onChange={() => setPaymentMethod(method)}
              className="mr-2"
            />
            {method === "credit" && "Credit Card"}
            {method === "debit" && "Debit Card"}
            {method === "upi" && "UPI"}
          </label>
        ))}
      </div>

      {/* Conditional Rendering for Payment Forms */}
      <div className="mb-6">
        {(paymentMethod === "credit" || paymentMethod === "debit") && (
          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-4">
              Enter {paymentMethod === "credit" ? "Credit" : "Debit"} Card Details
            </h3>

            {["Card Number", "Cardholder Name", "Expiry Date (MM/YY)", "CVV"].map((placeholder, index) => (
              <input
                key={index}
                type={placeholder === "CVV" ? "password" : "text"}
                placeholder={placeholder}
                name={
                  placeholder === "Card Number"
                    ? "cardNumber"
                    : placeholder === "Cardholder Name"
                    ? "cardholderName"
                    : placeholder === "Expiry Date (MM/YY)"
                    ? "expiryDate"
                    : "cvv"
                }
                className="w-full p-2 mb-4 border border-gray-300 rounded"
                onChange={handleInputChange}
              />
            ))}
          </div>
        )}

        {paymentMethod === "upi" && (
          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-4">Select UPI App</h3>
            {["Google Pay", "PhonePe", "Paytm"].map((app) => (
              <label key={app} className="block mb-4">
                <input
                  type="radio"
                  name="upiApp"
                  value={app}
                  onChange={handleInputChange}
                  className="mr-2"
                />
                {app}
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Display Error */}
      {error && <p className="text-red-600 text-sm mb-4">{error}</p>}

      {/* Proceed to Pay Button */}
      {paymentMethod && (
        <button
          className="w-full py-3 bg-green-500 text-white font-medium rounded hover:bg-green-600 transition"
          onClick={handlePayment}
        >
          Proceed to Pay
        </button>
      )}
    </div>
  );
};

export default PaymentPage;
