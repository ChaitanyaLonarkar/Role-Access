

import React, { useState } from "react";
import axios from "axios";
import "./Login.css";
import toast, { Toaster } from "react-hot-toast";


const Login = () => {
    // State for form inputs and error/success messages
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    // Login handler
    const handleLogin = async (e) => {
        e.preventDefault();
        setError(""); // Clear previous errors
        setSuccess(""); // Clear previous success messages

        try {
            const response = await axios.post("http://localhost:5000/api/auth/login", {
                email,
                password,
            });

            if (response.status === 200) {
                // Set success message and handle token storage
                setSuccess("Login successful!");
                localStorage.setItem("token", response.data.token); // Store JWT in localStorage
                // Redirect or perform further actions
                window.location.href = "/dashboard"; // Example: Redirect to dashboard
            }
        } catch (err) {
            // Set error message
            setError(err.response?.data?.message || "Login failed! Please try again.");
        }
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <h2 className="login-title">Log In</h2>

                {/* Error Message */}
                {error && <div className="error-message">{error}</div>}

                {/* Success Message */}
                {success && <div className="success-message">{success}</div>}

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
