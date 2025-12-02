import React from "react";
import { useState } from "react";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";
import Logout from "../Components/Logout";
function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <nav>
      <Link to={"/"}>
        <h1>The Pale Witch</h1>
      </Link>
      <ul>
        <li>
          <Link to={"/games"}>games</Link>
        </li>
        <li>
          <Link to={"/contact"}>contact</Link>
        </li>
        <li>
          <Link to={"/support"}>support</Link>
        </li>

        {isLoggedIn ? (
          <li>
            <Logout onLogout={handleLogout} />
          </li>
        ) : (
          <li>
            <Link to={"/login"}>
              <span className="nav-login-btn">login</span>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
