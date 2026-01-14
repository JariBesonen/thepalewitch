import React, { useState } from "react";
import "../Styles/Register.css";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [error, setError] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // ✅ show/hide password toggle
  const [passwordShown, setPasswordShown] = useState(false);

  const handleRegisterUser = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/users/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        console.log(data.username, " is now registered");
        setUsername("");
        setPassword("");
        setPasswordShown(false);
        navigate("/login");
      } else {
        // ✅ show server error message if available
        setError(new Error(data?.error || "Registration failed"));
      }
    } catch (error) {
      setError(error);
      console.log(error.message);
    }
  };

  return (
    <div className="register-page">
      <form onSubmit={handleRegisterUser} className="register-form">
        {error && <p>{error.message}</p>}

        <h2>Register</h2>

        <label htmlFor="register-username-input">username</label>
        <input
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          type="text"
          id="register-username-input"
          minLength={4}
          maxLength={18}
          required
          autoComplete="username"
        />

        <label htmlFor="register-password-input">password</label>

        {/* ✅ password input + toggle */}
        <div className="password-row">
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type={passwordShown ? "text" : "password"}
            id="register-password-input"
            minLength={4}
            maxLength={18}
            required
            autoComplete="new-password"
          />

          <button
            type="button"
            className="show-password-btn"
            onClick={() => setPasswordShown((prev) => !prev)}
            aria-label={passwordShown ? "Hide password" : "Show password"}
          >
            {passwordShown ? "hide" : "show"}
          </button>
        </div>

        <button type="submit" className="register-btn">
          register
        </button>

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
