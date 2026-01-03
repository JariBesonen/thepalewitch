import React from "react";
import "../Styles/Profile.css";
import { Link } from "react-router-dom";
import ProfileNav from "../Components/ProfileNav";
function Profile() {
  return (
    <div className="profile-page-wrapper">
     <ProfileNav />
    </div>
  );
}

export default Profile;
