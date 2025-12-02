import React from "react";
import "../Styles/Login.css";
import { Link } from "react-router-dom";
function Login() {
  return (
    <div className="login-page">
      <form className="login-form">
        <h2>Login</h2>
        <label htmlFor="login-username-input">username</label>
        <input type="text" id="login-username-input" />
        <label htmlFor="login-pasword-input">password</label>
        <input type="password" id="login-password-input" />
        <button className="login-btn">login</button>
        <Link to={"/register"}>
          <span className="login-form-register-link">
            don't have an account? register
          </span>
        </Link>
      </form>
    </div>
  );
}

export default Login;
