import axios from "axios";
import React, { useState, useEffect } from "react";
import "./AllUsers.css";
import toast from "react-hot-toast";
const AllUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      // const token = localStorage.getItem("token");
      const response = await axios.get(
        "http://localhost:5000/api/user/getusers",
        {
          //   headers: { Authorization: `Bearer ${token}` },
        }
      );

      setUsers(response.data.getUser);
    };
    fetchUsers();
  }, []);

  //  deletion logic
  const handleDelete = async (userid) => {
    try {
      const res = await axios.delete(
        "http://localhost:5000/api/user/deleteuser/"+userid,
        { withCredentials: true }
      );
      console.log(res.data,"mai deelete krna cha rha tha")
      if (res.data.sucess) {
        toast.success("User deleted successfully");
      } else {
        throw error;
      }
    } catch (error) {
        toast.error(error.message);
    }
    finally{
        window.location.reload(true)
    }
  };
  return (
    <div className="user-list-container">
      <h2>User List</h2>
      <table className="user-list-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user._id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <button
                  // onClick={() => handleEditRole(user.id)}
                  className="edit-button"
                >
                  Edit Role
                </button>
                <button
                  onClick={() => handleDelete(user._id)}
                  className="delete-button"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default AllUsers;
