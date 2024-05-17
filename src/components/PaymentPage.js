import React from 'react';
import './PaymentPage.css';

const PaymentPage = () => {
  return (
    <div className="payment-container">
      <h2>Payment</h2>
      <div className="payment-form">
        <label htmlFor="cardNumber">Card Number:</label>
        <input type="text" id="cardNumber" placeholder="Enter card number" />

        <label htmlFor="expiry">Expiry Date:</label>
        <input type="text" id="expiry" placeholder="MM/YY" />

        <label htmlFor="cvv">CVV:</label>
        <input type="text" id="cvv" placeholder="Enter CVV" />

        <button className="pay-button" type="submit">Pay Now</button>
      </div>
    </div>
  );
};

export default PaymentPage;
