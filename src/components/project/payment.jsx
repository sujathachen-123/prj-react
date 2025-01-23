import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const PaymentPage = () => {
  const location = useLocation();
  const { formData } = location.state || {}; // Retrieve course details from location.state
  const [paymentMethod, setPaymentMethod] = useState(""); // Selected payment method
  const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);

  const coursePrice = formData?.price || 0; // Default to 0 if no price is provided

  const handlePayment = () => {
    setIsPaymentSuccessful(true); // Simulate successful payment
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
        <label className="block mb-4 text-gray-700">
          <input
            type="radio"
            value="credit"
            checked={paymentMethod === "credit"}
            onChange={() => setPaymentMethod("credit")}
            className="mr-2"
          />
          Credit Card
        </label>
        <label className="block mb-4 text-gray-700">
          <input
            type="radio"
            value="debit"
            checked={paymentMethod === "debit"}
            onChange={() => setPaymentMethod("debit")}
            className="mr-2"
          />
          Debit Card
        </label>
        <label className="block text-gray-700">
          <input
            type="radio"
            value="upi"
            checked={paymentMethod === "upi"}
            onChange={() => setPaymentMethod("upi")}
            className="mr-2"
          />
          UPI
        </label>
      </div>

      {/* Conditional Rendering for Payment Forms */}
      <div className="mb-6">
        {paymentMethod === "credit" && (
          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-4">Enter Credit Card Details</h3>
            <input
              type="text"
              placeholder="Card Number"
              className="w-full p-2 mb-4 border border-gray-300 rounded"
            />
            <input
              type="text"
              placeholder="Cardholder Name"
              className="w-full p-2 mb-4 border border-gray-300 rounded"
            />
            <input
              type="text"
              placeholder="Expiry Date (MM/YY)"
              className="w-full p-2 mb-4 border border-gray-300 rounded"
            />
            <input
              type="password"
              placeholder="CVV"
              className="w-full p-2 mb-4 border border-gray-300 rounded"
            />
          </div>
        )}

        {paymentMethod === "debit" && (
          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-4">Enter Debit Card Details</h3>
            <input
              type="text"
              placeholder="Card Number"
              className="w-full p-2 mb-4 border border-gray-300 rounded"
            />
            <input
              type="text"
              placeholder="Cardholder Name"
              className="w-full p-2 mb-4 border border-gray-300 rounded"
            />
            <input
              type="text"
              placeholder="Expiry Date (MM/YY)"
              className="w-full p-2 mb-4 border border-gray-300 rounded"
            />
            <input
              type="password"
              placeholder="CVV"
              className="w-full p-2 mb-4 border border-gray-300 rounded"
            />
          </div>
        )}

        {paymentMethod === "upi" && (
          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-4">Select UPI App</h3>
            <label className="block mb-4">
              <input type="radio" name="upi" value="Google Pay" className="mr-2" />
              Google Pay
            </label>
            <label className="block mb-4">
              <input type="radio" name="upi" value="PhonePe" className="mr-2" />
              PhonePe
            </label>
            <label className="block">
              <input type="radio" name="upi" value="Paytm" className="mr-2" />
              Paytm
            </label>
          </div>
        )}
      </div>

      {/* Proceed to Pay Button */}
      {paymentMethod && !isPaymentSuccessful && (
        <button
          className="w-full py-3 bg-green-500 text-white font-medium rounded hover:bg-green-600 transition"
          onClick={handlePayment}
        >
          Proceed to Pay
        </button>
      )}

      {/* Success Message */}
      {isPaymentSuccessful && (
        <div className="text-center text-green-600 font-semibold mt-6">
          <h3 className="text-xl mb-2">Payment Successful!</h3>
          <p>Thank you for your payment of Rs {coursePrice}. Your transaction was successful.</p>
        </div>
      )}
    </div>
  );
};

export default PaymentPage;
