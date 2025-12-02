import React from "react";
import "../Styles/Register.css";
import { Link } from "react-router-dom";
function Register() {
  return (
    <div className="register-page">
      <form className="register-form">
        <h2>Register</h2>
        <label htmlFor="register-username-input">register</label>
        <input type="text" id="register-username-input" />
        <label htmlFor="register-pasword-input">password</label>
        <input type="password" id="register-password-input" />
        <button className="register-btn">register</button>
        <Link to={"/login"}>
          <span className="register-form-login-link">
            already have an account? login
          </span>
        </Link>
      </form>
    </div>
  );
}

export default Register;