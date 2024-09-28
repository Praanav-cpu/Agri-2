import React from 'react';
import './Login.css';

function App() {
  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-title">
          LOGIN <span className="login-icon"> </span>
        </h1>
        <form>
          <input type="text" placeholder="Enter your name" className="login-input" />
          <input type="text" placeholder="Enter Mobile number" className="login-input" />
          <input type="text" placeholder="Enter OTP" className="login-input" />
          <select className="login-input">
            <option value="">Login As</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
          <button type="submit" className="login-button">Login</button>
        </form>
        <p className="signup-text">
        <button type="submit" className="Signup-button">Sign up</button>
          Signup if you don’t have an account
        </p>
      </div>
    </div>
  );
}

export default App;
