import React, { useEffect } from "react";
import { useState } from "react";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";
import Logout from "../Components/Logout";
import { useNavigate, useLocation } from "react-router-dom";
function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

  useEffect(() => {
    let isUserLoggedIn = localStorage.getItem("token");
    if (isUserLoggedIn) {
      setIsLoggedIn(true);
    }
  }, [location.pathname === "/"]);

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <nav>
      <Link to={"/"}>
        <h1 className="long-h1">The Pale Witch</h1>
        <h1 className="short-h1">TPW</h1>
      </Link>
      <ul>
        <li>
          <Link to={"/games"}>games</Link>
        </li>

        <li>
          <Link to={"/support"}>support</Link>
        </li>

        {isLoggedIn ? (
          <li>
            <Logout onLogoutSuccess={handleLogout} />
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
