import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Profile.css"
import { useAuthContext } from "../Context/AuthContext";

const Profile = () => {

const { authUser,setAuthUser } = useAuthContext();

//   const [authUser, setauthUser] = useState(localStorage.getItem("userr"));

  // Fetch user data 
//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch("http://localhost:5000/api/user/getusers"); 
//       console.log(response.data)
//       setauthUser(response.data.getUser);
//     };

//     // fetchData();
//   }, []);

  //  deletion logic 
  const handleDelete= async () => {
    try {
      const res = await axios.delete(
        "http://localhost:5000/api/user/deleteuser" + authUser._id,
        { withCredentials: true }
      );
      if (res.data.sucess) {
        localStorage.removeItem("userr");
        setAuthUser(null);
        Cookies.remove("token");
        navigate("/login");
      } else {
        throw error;
      }
    } catch (error) {
      toast.error(error);
    }
  };

  //  update logic  
//   const handleUpdate = () => {
//     console.log("Updating user...");
//     // ...
//   };
  return (
    <div>
      <center>
        <h1>Welcome {authUser.role}!! </h1>
      </center>
      <div className="profile-container">
        {authUser ? (
            <div className="profile-card">
              <h3>{authUser.role} Profile</h3>
            <div className="profile-image">
              <img src={"https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg?t=st=1734091099~exp=1734094699~hmac=3434b90e4b8ce4b2b7e515a5161d8527c9a83563377f923c78166188dc46cd29&w=740"} alt={authUser.username} />
            </div>
            <div className="profile-info">
              <p><b>UserID :</b> {authUser._id}</p>

              <p><b>UserName :</b> {authUser.name}</p>

              <p><b>My Role :</b> {authUser.role}</p>
              <p><b>My Email :</b> {authUser.email}</p>
              {/* <p>{authUser.password}</p> */}
            </div>
            <div className="profile-actions">
              {/* <button onClick={handleUpdate}>Update</button> */}
              <button onClick={handleDelete}>Delete</button>
            </div>
          </div>
        ) : (
          <p>Loading user data...</p>
        )}
      </div>
    </div>
  );
};
export default Profile;
