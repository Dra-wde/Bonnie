import React, { useState } from 'react';
import './LoginPage.css'; // Import CSS file for styling
import { Link } from 'react-router-dom'; // Import Link component to navigate to sign-up page

const LoginPage = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [selectedMethod, setSelectedMethod] = useState('email'); // Default login method
  const [showForgotPassword, setShowForgotPassword] = useState(false); // State to toggle forgot password form

  const handleLogin = () => {
    // Perform login authentication
    // For simplicity, just set isLoggedIn to true
    setIsLoggedIn(true);
  };

  const handleForgotPassword = () => {
    // Implement your logic for forgot password
    alert('Forgot password functionality is not implemented yet.');
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h1>Login</h1>
        <div className="login-methods">
          <button
            className={selectedMethod === 'email' ? 'active' : ''}
            onClick={() => setSelectedMethod('email')}
          >
            Email
          </button>
          <button
            className={selectedMethod === 'phone' ? 'active' : ''}
            onClick={() => setSelectedMethod('phone')}
          >
            Phone
          </button>
          {/* Add more login methods as needed */}
        </div>
        {selectedMethod === 'email' && (
          <form>
            <input
              type="email"
              placeholder="Email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
          </form>
        )}
        {selectedMethod === 'phone' && (
          <form>
            <input
              type="tel"
              placeholder="Phone Number"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
          </form>
        )}
        {showForgotPassword ? (
          <div className="forgot-password-form">
            <input
              type="text"
              placeholder="Enter your email or phone number"
              // Implement state to capture email or phone number input value
            />
            <button onClick={handleForgotPassword}>Submit</button>
            <button onClick={() => setShowForgotPassword(false)}>Cancel</button>
          </div>
        ) : (
          <p className="forgot-password" onClick={() => setShowForgotPassword(true)}>Forgot password?</p>
        )}
        <p className="signup-link">Don't have an account? <Link to="/signup"><button>Sign up</button></Link></p>
      </div>
    </div>
  );
};

export default LoginPage;
