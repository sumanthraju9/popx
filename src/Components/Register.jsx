import "../Style/Register.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    phonenumber: "",
    email: "",
    password: "",
    companyname: "",
  });

  const handleChange = (e) => {
    const { id, name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id || name]: value,
    }));
  };

  const validEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validPhoneNumber = (phonenumber) => /^\d{10}$/.test(phonenumber);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, phonenumber, email, password, companyname } = formData;

    if (!username || !phonenumber || !email || !password || !companyname) {
      alert("Please fill out all required fields.");
      return;
    }

    if (!validEmail(email)) {
      alert("Invalid email address.");
      return;
    }

    if (!validPhoneNumber(phonenumber)) {
      alert("Invalid phone number. Please enter a 10-digit number.");
      return;
    }

    alert("Form submitted successfully!");
    localStorage.setItem("userData", JSON.stringify(formData));
    console.log("Form Data:", formData);
    navigate("/login");
  };

  return (
    <div className="reg-headers">
      <h2 className="reg-head1">Create your PopX account</h2>

      <form className="reg" onSubmit={handleSubmit}>
        <div className="reginput">
          <label htmlFor="username" className="text">
            Full Name*
          </label>
          <input
            type="text"
            placeholder="Enter Your Name..."
            id="username"
            className="input"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>

        <div className="reginput">
          <label htmlFor="phonenumber" className="text">
            Phone Number*
          </label>
          <input
            type="text"
            placeholder="Enter Your Phone Number..."
            id="phonenumber"
            className="input"
            value={formData.phonenumber}
            onChange={handleChange}
            required
          />
        </div>

        <div className="reginput">
          <label htmlFor="input" className="text">
            Email Address*{" "}
          </label>
          <input
            type="text"
            placeholder="Enter Email Address..."
            id="email"
            className="input"
            onChange={handleChange}
            value={formData.email}
            required
          />
        </div>

        <div className="reginput">
          <label htmlFor="input" className="text">
            Password*{" "}
          </label>
          <input
            type="text"
            placeholder="Enter Your Password..."
            id="password"
            className="input"
            onChange={handleChange}
            value={formData.password}
            required
          />
        </div>

        <div className="reginput">
          <label htmlFor="companyname" className="text">
            Company Name*
          </label>
          <input
            type="text"
            placeholder="Enter Your Company Name..."
            id="companyname"
            className="input"
            value={formData.companyname}
            onChange={handleChange}
            required
          />
        </div>

        <p>Are you an Agency?*</p>
        <div className="ratio">
          <input type="radio" id="yes" name="agency" />
          <label htmlFor="yes">Yes</label>
          <br />
          <input type="radio" id="no" name="agency" />
          <label htmlFor="no">No</label>
        </div>

        <div className="submit-form">
          <button className="reg-links" type="submit">
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
