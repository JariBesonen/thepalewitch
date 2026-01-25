import React from "react";
import { NavLink } from "react-router-dom";
import "../Styles/ProfileNav.css";

function ProfileNav() {
  return (
    <div className="profile-nav">
      <ul>
        <NavLink
          to="/notifications"
          className={({ isActive }) => (isActive ? "profile-link active" : "profile-link")}
        >
          <li>notifications</li>
        </NavLink>

        <NavLink
          to="/settings"
          className={({ isActive }) => (isActive ? "profile-link active" : "profile-link")}
        >
          <li>settings</li>
        </NavLink>

        <NavLink
          to="/myposts"
          className={({ isActive }) => (isActive ? "profile-link active" : "profile-link")}
        >
          <li>my_posts</li>
        </NavLink>

        <NavLink
          to="/mycomments"
          className={({ isActive }) => (isActive ? "profile-link active" : "profile-link")}
        >
          <li>my_comments</li>
        </NavLink>
      </ul>
    </div>
  );
}

export default ProfileNav;
