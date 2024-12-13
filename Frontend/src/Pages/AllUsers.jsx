import axios from 'axios';
import React ,{ useState ,useEffect } from 'react'
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
      <div>
        <h2>Admin Panel</h2>
        <ul>
          {users.map((user) => (
            <li key={user._id}>{user.name} - {user.role}</li>
          ))}
        </ul>
      </div>
    );
  };
  export default AllUsers;