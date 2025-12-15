// ToggleNav.jsx
import React from "react";
import "../Styles/ToggleNav.css";

function ToggleNav({ handleToggleNav }) {
  return (
    <svg
      onClick={handleToggleNav}
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      fill="white"
      className="nav-icon"
      viewBox="0 0 16 16"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && handleToggleNav()}
    >
      <path
        fillRule="evenodd"
        d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
      />
    </svg>
  );
}

export default ToggleNav;
