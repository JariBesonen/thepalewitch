import React from "react";
import "../Styles/Logout.css";
function Logout({ handleLogout }) {
  return (
    <span onClick={handleLogout} className="logout-btn">
      logout
    </span>
  );
}
export default Logout;
