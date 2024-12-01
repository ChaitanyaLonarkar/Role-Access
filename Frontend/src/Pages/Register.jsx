
import React, { useState } from "react";

import axios from "axios";
import "./Login.css";
import toast, { Toaster } from "react-hot-toast";

const Register = () => {
    // State for form inputs
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("User"); // Default role is 'User'

    // Register handler
    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            // Make API request
            const response = await axios.post("http://localhost:5000/api/auth/register", {
                username,
                email,
                password,
                role, // Include role in the payload
            });

            if (response.status === 201) {
                // Show success toast
                toast.success("Registration successful!");
                // Redirect or clear fields
                setUsername("");
                setEmail("");
                setPassword("");
                setRole("User"); // Reset role to default
                window.location.href = "/login"; // Redirect to login page
            }
        } catch (err) {
            // Show error toast
            const errorMessage = err.response?.data?.message || "Registration failed!";
            toast.error(errorMessage);
        }
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <h2 className="login-title">Register</h2>

                <form className="login-form" onSubmit={handleRegister}>
                    <div className="input-group">
                        <input
                            type="text"
                            placeholder="Username"
                            className="input-field"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
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
                    <div className="input-group">
                        <select
                            className="input-field"
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            required
                        >
                            <option value="User">User</option>
                            <option value="Admin">Admin</option>
                            <option value="Manager">Manager</option>
                        </select>
                    </div>

                    <button type="submit" className="login-btn">
                        Register
                    </button>
                </form>
                <div className="signup-link">
                    <br />
                    Do have an account? <a href="/login">Login</a>
                </div>
            </div>
           
        </div>
    );
};

export default Register;
