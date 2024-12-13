// import React from "react";
// import { Link } from "react-router-dom";
// import "./Navbar.css";
// import { useAuthContext } from "../Context/AuthContext";

// // const { authUser , setAuthUser} = useAuthContext();
// const authUser = JSON.parse(localStorage.getItem("userr"));
// console.log("dsdfsdfsdf",authUser)
// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <div className="navbar-logo">
//         <img src="your-logo-url-here" alt="Logo" className="logo" />
//       </div>
//       <ul className="navbar-links">
//         <li>
//           <Link to="/about">About</Link>
//         </li>
//         <li>
//           <Link to="/services">Services</Link>
//         </li>
//         <li>
//           <Link to="/contact">Contact Us</Link>
//         </li>
//         <li>
//           <Link to="/login">Login</Link>
//         </li>
//       </ul>
//       <div className="navbar-button">
//         <Link to="/register" className="signin-button">
//           Register
//         </Link>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import Logout from "../Pages/Logout";

const Navbar = () => {
  const navigate = useNavigate();
  const authUser = JSON.parse(localStorage.getItem("userr"));


  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="your-logo-url-here" alt="Logo" className="logo" />
      </div>
      <ul className="navbar-links">
        {/* Common links for all roles */}
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>

        {/* Role-based links */}
        {authUser ? (
          <>
            {authUser.role === "Admin" && (
              <>
                {/* <li>
                  <Link to="/admin/profile">Admin Profile</Link>
                </li> */}
                <li>
                  <Link to="/admin/manage-users">Manage Users</Link>s
                </li>
              </>
            )}

            {(authUser.role === "Manager" || authUser.role === "User") && (
              <>
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
                <li>
                  <Link to="/tasks">Tasks</Link>
                </li>
              </>
            )}

            {/* Logout Button */}
            <Logout/>
          </>
        ) : (
          // Links for unauthenticated users
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register" className="signin-button">
                Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
