import axios from 'axios';
import React ,{ useState ,useEffect } from 'react'
import "./AllUsers.css"
const AllUsers = () => {
    const [users, setUsers] = useState([]);
  
    useEffect(() => {
      const fetchUsers = async () => {
        // const token = localStorage.getItem("token");
        const response = await axios.get("http://localhost:5000/api/user/getusers", {
        //   headers: { Authorization: `Bearer ${token}` },
        });
        
        setUsers(response.data.getUser);
      };
      fetchUsers();
    }, []);
  
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
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                            <td>
                                <button 
                                // onClick={() => handleEditRole(user.id)} 
                                className="edit-button">Edit Role</button>
                                <button 
                                // onClick={() => handleDeleteUser (user.id)} 
                                className="delete-button">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
  };
  export default AllUsers;