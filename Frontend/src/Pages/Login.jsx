import { useState } from "react";
import "../Styles/Login.css";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [error, setError] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // ✅ show/hide password toggle
  const [passwordShown, setPasswordShown] = useState(false);

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

      if (!response.ok) {
        // show server message if it exists
        throw new Error(data?.error || "login failed");
      }

      console.log(`Welcome ${data.user.username}`);
      setUsername("");
      setPassword("");
      setPasswordShown(false);

      localStorage.setItem("token", data.token);

      navigate(`/`);
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
          minLength={4}
          maxLength={18}
          required
          autoComplete="username"
        />

        <label htmlFor="login-password-input">password</label>

        {/* ✅ password input + toggle */}
        <div className="password-row">
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type={passwordShown ? "text" : "password"}
            id="login-password-input"
            minLength={4}
            maxLength={18}
            required
            autoComplete="current-password"
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
