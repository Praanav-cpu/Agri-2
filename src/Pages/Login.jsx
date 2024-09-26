import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <div className="icon">
          <img src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png" alt="user icon" />
        </div>
        <h2>Login</h2>
        <input type="text" placeholder="Enter Mobile Number" />
        <input type="text" placeholder="Enter OTP" />
        <div className="resend">
          <a href="#">Resend OTP?</a>
        </div>
        <button>Login</button>
        <div className="signup">
          <a href="#">SignUP? If you don't have an account</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
