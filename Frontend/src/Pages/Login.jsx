import React from "react";
import { useState } from "react";
import "../Styles/Login.css";
import { Link } from "react-router-dom";
function Login() {
  const [error, setError] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/users/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        }
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div className="login-page">
      <form onSubmit={handleLogin} className="login-form">
        {error && <p>{error.message}</p>}
        <h2>Login</h2>
        <label htmlFor="login-username-input">username</label>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          id="login-username-input"
          required
        />
        <label htmlFor="login-pasword-input">password</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          id="login-password-input"
          required
        />
        <button type="submit" className="login-btn">
          login
        </button>
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
