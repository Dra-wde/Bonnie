import React from 'react';
import { Link } from 'react-router-dom';

const CartPage = ({ isLoggedIn }) => {
  // Dummy cart items
  const cartItems = [
    { id: 1, name: 'Product 1', price: 19.99, quantity: 2 },
    { id: 2, name: 'Product 2', price: 24.99, quantity: 1 },
    { id: 3, name: 'Product 3', price: 29.99, quantity: 3 },
  ];

  // Calculate total price
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleCheckout = () => {
    if (isLoggedIn) {
      // Proceed to payment if logged in
      // Redirect to '/payment'
      window.location.href = '/payment';
    } else {
      // Prompt to log in if not logged in
      // Redirect to '/login'
      window.location.href = '/login';
    }
  };

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      <div className="cart-items">
        {cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <span>{item.name}</span>
            <span>{item.quantity} x ${item.price.toFixed(2)}</span>
          </div>
        ))}
      </div>
      <div className="cart-total">
        <span>Total:</span>
        <span>${totalPrice.toFixed(2)}</span>
      </div>
      <button className="checkout-btn" onClick={handleCheckout}>Proceed to Checkout</button>
      <p>Don't have an account? <Link to="/login">Log in</Link></p>
    </div>
  );
};

export default CartPage;
