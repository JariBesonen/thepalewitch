import React, { useEffect, useState } from "react";
import "../Styles/Navbar.css";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import Logout from "../Components/Logout";

function Navbar({ handleCloseNav }) {
  const location = useLocation();
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem("token")
  );

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem("token"));
  }, [location.pathname]);

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/");
    handleCloseNav();
  };

  // Adds "active" when the route matches
  const navClass = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";

  return (
    <nav>
      {/* end makes sure "/" is only active on home, not every route */}
      <NavLink onClick={handleCloseNav} to="/" className={navClass} end>
        <h1 className="long-h1">home</h1>
        <h1 className="short-h1">home</h1>
      </NavLink>

      <ul>
        <li>
          <NavLink onClick={handleCloseNav} to="/games" className={navClass}>
            games
          </NavLink>
        </li>

        {isLoggedIn ? (
          <>
            <li>
              <NavLink
                onClick={handleCloseNav}
                to="/community"
                className={navClass}
              >
                community
              </NavLink>
            </li>

            <li>
              <NavLink
                onClick={handleCloseNav}
                to="/profile"
                className={navClass}
              >
                profile
              </NavLink>
            </li>

            <li>
              <Logout onLogoutSuccess={handleLogout} />
            </li>
          </>
        ) : (
          <li>
            <NavLink onClick={handleCloseNav} to="/login" className={navClass}>
              <span className="nav-login-btn">login</span>
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
