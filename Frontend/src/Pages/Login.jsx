import React, { useState } from "react";
import axios from "axios";
import "./Login.css";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  // State for form inputs and error/success messages
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authUser, setAuthUser] = useState("");
  // const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  // Login handler
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email,
          password,
        },{
            withCredentials:true
        }
      );
      console.log(response);
      if (response.data.success == true) {
        // Set success message and handle token storage
        toast.success(response.data.message);
        localStorage.setItem("userr", JSON.stringify(response.data.user));
        setAuthUser(response.data.user);
        // Redirect or perform further actions
        navigate("/dashboard");
      }
    } catch (err) {
      // Set error message
      toast.error(
        err.response?.data?.message || "Login failed! Please try again."
      );
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Log In</h2>

        <form className="login-form" onSubmit={handleLogin}>
          <div className="input-group">
            <input
              type="email"
              placeholder="Email address"
              className="input-field"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              className="input-field"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="login-btn">
            Log In
          </button>
        </form>
        <div className="signup-link">
          <br />
          Don’t have an account? <a href="/register">Register</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
