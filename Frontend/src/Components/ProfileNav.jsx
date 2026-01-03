import React from "react";
import { Link } from "react-router-dom";

function ProfileNav() {
  return (
    <div className="profile-nav">
      <ul>
        <Link to="/notifications">
          <li>notifications</li>
        </Link>
        <Link to="/settings">
          <li>settings</li>
        </Link>
      </ul>
    </div>
  );
}

export default ProfileNav;
