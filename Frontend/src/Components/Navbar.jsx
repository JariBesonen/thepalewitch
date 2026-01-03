import React, { useEffect, useState } from "react";
import "../Styles/Navbar.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Logout from "../Components/Logout";

function Navbar({ handleCloseNav }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem("token"));
  }, [location.pathname]);

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/");
    handleCloseNav();
  };

  return (
    <nav>
      <Link onClick={handleCloseNav} to={"/"}>
        <h1 className="long-h1">home</h1>
        <h1 className="short-h1">Home</h1>
      </Link>

      <ul>
        <li>
          <Link onClick={handleCloseNav} to={"/games"}>
            games
          </Link>
        </li>

        {isLoggedIn ? (
          <>
            <li>
              <Link onClick={handleCloseNav} to={"/community"}>
                community
              </Link>
            </li>
            <li>
              <Link onClick={handleCloseNav} to={"/profile"}>
                profile
              </Link>
            </li>
            <li>
              <Logout onLogoutSuccess={handleLogout} />
            </li>
          </>
        ) : (
          <li>
            <Link onClick={handleCloseNav} to={"/login"}>
              <span className="nav-login-btn">login</span>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
