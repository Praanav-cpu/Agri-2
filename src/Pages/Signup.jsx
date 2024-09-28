import React from "react";
import './Signup.css';

const SignUp = () => {
  return (
    <div className="signup-container">
      <div className="signup-card">
        <button className="login-btn">login</button>

        <h1>Sign UP <span className="icon-user">👤</span></h1>

        <button className="social-btn google-btn">
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" className="social-icon"/>
          Continue with Google
        </button>

        <div className="divider">OR</div>

        <button className="social-btn facebook-btn">
          <span className="facebook-icon">f</span> Facebook
        </button>

        <div className="input-group">
          <input type="text" placeholder="Mobile Number" />
          <span className="country-code">+91</span>
        </div>

        <button className="signup-btn">SignUp</button>

        <p className="login-redirect">Login if you have an account</p>
      </div>
    </div>
  );
};

export default SignUp;
