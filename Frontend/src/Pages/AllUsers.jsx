// import axios from "axios";
// import React, { useState, useEffect } from "react";
// import "./AllUsers.css";
// import toast from "react-hot-toast";
// const AllUsers = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       // const token = localStorage.getItem("token");
//       const response = await axios.get(
//         "http://localhost:5000/api/user/getusers",
//         {
//           //   headers: { Authorization: `Bearer ${token}` },
//         }
//       );

//       setUsers(response.data.getUser);
//     };
//     fetchUsers();
//   }, []);

//   //  deletion logic
//   const handleDelete = async (userid) => {
//     try {
//       const res = await axios.delete(
//         "http://localhost:5000/api/user/deleteuser/"+userid,
//         { withCredentials: true }
//       );
//       console.log(res.data,"mai deelete krna cha rha tha")
//       if (res.data.sucess) {
//         toast.success("User deleted successfully");
//       } else {
//         throw error;
//       }
//     } catch (error) {
//         toast.error(error.message);
//     }
//     finally{
//         window.location.reload(true)
//     }
//   };
//   return (
//     <div className="user-list-container">
//       <h2>User List</h2>
//       <table className="user-list-table">
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Role</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((user) => (
//             <tr key={user._id}>
//               <td>{user._id}</td>
//               <td>{user.name}</td>
//               <td>{user.email}</td>
//               <td>{user.role}</td>
//               <td>
//                 <button
//                   // onClick={() => handleEditRole(user.id)}
//                   className="edit-button"
//                 >
//                   Edit Role
//                 </button>
//                 <button
//                   onClick={() => handleDelete(user._id)}
//                   className="delete-button"
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };
// export default AllUsers;



import axios from "axios";
import React, { useState, useEffect } from "react";
import "./AllUsers.css";
import toast from "react-hot-toast";

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [updatedRole, setUpdatedRole] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get("http://localhost:5000/api/user/getusers");
      setUsers(response.data.getUser);
    };
    fetchUsers();
  }, []);

  // Deletion logic
  const handleDelete = async (userid) => {
    try {
      const res = await axios.delete(
        `http://localhost:5000/api/user/deleteuser/${userid}`,
        { withCredentials: true }
      );
      if (res.data.success) {
        toast.success("User deleted successfully");
        // setUsers(res.data.getUser.filter((user) => user._id !== userid));
        setUsers(res.data.getUser)
      } else {
        throw new Error("Failed to delete user");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Edit role logic
  const handleEditRole = (user) => {
    setSelectedUser(user);
    setUpdatedRole(user.role);
  };

  const UpdateRole = async () => {
    try {
      const response = await axios.put(
        `http://localhost:5000/api/user/updaterole/${selectedUser._id}`,
        { role: updatedRole },
        { withCredentials: true }
      );
      if (response.data.success) {
        toast.success("Role updated successfully");
        setUsers((prevUsers) =>
          prevUsers.map((user) =>
            user._id === selectedUser._id ? { ...user, role: updatedRole } : user
          )
        );
        setSelectedUser(null);
      } else {
        throw new Error("Failed to update role");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className={`user-list-container ${selectedUser ? "blur-background" : ""}`}>
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
                <button onClick={() => handleEditRole(user)} className="edit-button">
                  Edit Role
                </button>
                <button onClick={() => handleDelete(user._id)} className="delete-button">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedUser && (
        <div className="dialog-box">
          <div className="dialog-content">
            <h3>Edit Role</h3>
            <p><strong>Name:</strong> {selectedUser.name}</p>
            <p><strong>Email:</strong> {selectedUser.email}</p>
            <div className="form-group">
              <label htmlFor="role">Role:</label>
              <select
                id="role"
                value={updatedRole}
                onChange={(e) => setUpdatedRole(e.target.value)}
              >
                <option value="Admin">Admin</option>
                <option value="Manager">Manager</option>
                <option value="User">User</option>
              </select>
            </div>
            <div className="dialog-actions">
              <button className="update-button" onClick={UpdateRole}>
                Update
              </button>
              <button className="cancel-button" onClick={() => setSelectedUser(null)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllUsers;
