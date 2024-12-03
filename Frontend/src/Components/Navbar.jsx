import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useAuthContext } from "../Context/AuthContext";

const { authUser } = useAuthContext();
const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src="your-logo-url-here" alt="Logo" className="logo" />
            </div>
            <ul className="navbar-links">
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/services">Services</Link>
                </li>
                <li>
                    <Link to="/contact">Contact Us</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
            </ul>
            <div className="navbar-button">
                <Link to="/register" className="signin-button">
                    Register
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;


