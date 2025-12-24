
import "../Style/Dashboard.css"
import React, { useEffect, useState } from "react";
import image from "./downloads.jpg";

const Dashboard = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
  });

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("userData"));
    if (storedUser) {
      setUser({
        username: storedUser.username,
        email: storedUser.email,
      });
    }
  }, []);

  return (
    <div className="Dashboard-headers">
      <div className="profile-title">
        <h3 className="Dashboard-head1">Account Settings</h3>
      </div>
      <div className="profile-section">
        <div className="profile-container">
          <div className="profile-pic-wrapper">
            <img src={image} alt="Avatar" className="profile-image" />
            <i className="fa fa-camera camera-icon"></i>
          </div>

          <div className="profile-info">
            <p className="profile-name">{user.username}</p>
            <p className="profile-email">{user.email}</p>
          </div>
        </div>

        <div className="Dashboard-para">
          <p>
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
            Erat, Sed Diam
          </p>
          <div className="line" />
          <div className="lines" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
