import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Style/Login.css";

const Login = () => {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get stored user data
    const storedUser = JSON.parse(localStorage.getItem("userData"));

    if (!storedUser) {
      alert("No registered user found! Please register first.");
      navigate("/register");
      return;
    }

    // Compare email and password
    if (
      loginData.email === storedUser.email &&
      loginData.password === storedUser.password
    ) {
      alert("Login successful!");
      navigate("/dashboard");
    } else {
      alert("Invalid email or password!");
    }
  };

  return (
    <div className="login-headers">
      <h2 className="login-head2">Sign in to your PopX account</h2>
      <p className="login-para">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      <form className="login" onSubmit={handleSubmit}>
        <div className="logininput">
          <label htmlFor="email" className="text">
            Email Address*
          </label>
          <input
            type="text"
            placeholder="Enter Email Address..."
            name="email"
            className="input"
            required
            onChange={handleChange}
            value={loginData.email}
          />
        </div>

        <div className="loginsinput">
          <label htmlFor="password" className="text">
            Password*
          </label>
          <input
            type="password"
            placeholder="Enter Password..."
            name="password"
            className="input"
            required
            onChange={handleChange}
            value={loginData.password}
          />
        </div>

        <div className="submit-form">
          <button className="login-links" type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
