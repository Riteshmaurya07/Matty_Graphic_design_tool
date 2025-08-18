import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Signup.css"; // Import the CSS file

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log("Signup Data: ", formData);
    // TODO: API call for signup goes here
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2>Create Account</h2>
        <p>Join us and start your journey</p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />

          <button type="submit">Sign Up</button>
        </form>

        <button className="google-btn">
          <img
            src="https://www.svgrepo.com/show/355037/google.svg"
            alt="Google"
            width="20"
          />
          Sign up with Google
        </button>

        <div className="signup-footer">
          Already have an account?{" "}
          <Link to="/login">Log In</Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
