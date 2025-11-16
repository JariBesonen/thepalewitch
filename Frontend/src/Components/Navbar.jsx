import React from "react";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav>
      <Link to={'/'}><h1>The Pale Witch</h1></Link>
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
      </ul>
    </nav>
  );
}

export default Navbar;
