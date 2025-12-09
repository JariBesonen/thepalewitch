import React from "react";
import "../Styles/Logout.css";

function Logout({ onLogoutSuccess }) {
  const handleLogout = () => {
    console.log("logout btn clicked");
    localStorage.removeItem("token");
    onLogoutSuccess();
  };

  return (
    <span onClick={handleLogout} className="logout-btn">
      logout
    </span>
  );
}
export default Logout;
