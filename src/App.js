import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import CartPage from './components/CartPage';
import LoginPage from './components/LoginPage';
import PaymentPage from './components/PaymentPage';
import './App.css'; // Import CSS file
import cartIcon from './assets/cart-icon.png'; // Import cart icon image
import logo from './assets/logo.jpeg';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          {/* Wrap the logo with a Link to the homepage */}
          <Link to="/">
            <img src={logo} className="App-logo" alt="logo" />
          </Link>
          <nav>
            <ul>
              {/* Remove the redundant "Home" list item */}
              {/* <li>
                <Link to="/">Home</Link>
              </li> */}
              <li>
                <Link to="/cart">
                  <img src={cartIcon} alt="Cart" style={iconStyle} />
                  Cart
                </Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/payment">Payment</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<HomePage isLoggedIn={isLoggedIn} />} />
          <Route path="/cart" element={<CartPage isLoggedIn={isLoggedIn} />} />
          <Route path="/login" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/payment" element={<PaymentPage isLoggedIn={isLoggedIn} />} />
        </Routes>
      </div>
    </Router>
  );
};

const iconStyle = {
  marginRight: '5px', // Adjust spacing between the icon and text
};

export default App;
