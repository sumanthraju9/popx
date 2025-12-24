import React from "react";
import { Link } from "react-router-dom";
import "../Style/Home.css";

const Home = () => {
  return (
    <div className="Home-headers">
      <h1 className="Home-head1">Welcome to PopX</h1>
      <p className="Home-para">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>

      <div className="home-buttons">
       
        <Link to="/register">
          <button className="create-account">Create Account</button>
        </Link>

        
        <Link to="/login">
          <button className="login-link">Already Registered? Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
