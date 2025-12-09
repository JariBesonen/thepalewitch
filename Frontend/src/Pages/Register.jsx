import React from "react";
import { useState } from "react";
import "../Styles/Register.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Register() {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegisterUser = async (e) => {
    e.preventDefault();
    console.log("VITE_API_URL IS:", import.meta.env.VITE_API_URL);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/users/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }), //curly brackets?
        }
      );

      const data = await response.json();
      if (response.ok) {
        console.log(data);
        setUsername("");
        setPassword("");
      }

      navigate("/login");
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
        <label htmlFor="register-username-input">register</label>
        <input
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          type="text"
          id="register-username-input"
        />
        <label htmlFor="register-pasword-input">password</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="text"
          id="register-password-input"
        />
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
