import React from "react";
import { Link } from "react-router-dom";
import MyPosts from "../Pages/MyPosts";
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
        <Link to={"/myposts"}><li>my_posts</li></Link>
      </ul>
    </div>
  );
}

export default ProfileNav;
