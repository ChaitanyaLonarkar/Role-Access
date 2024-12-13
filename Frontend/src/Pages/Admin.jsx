import React ,{ useState } from 'react'

const Admin = () => {
    const [users, setUsers] = useState([]);
  
    // useEffect(() => {
    //   const fetchUsers = async () => {
    //     // const token = localStorage.getItem("token");
    //     // const response = await axios.get("/api/admin/users", {
    //     //   headers: { Authorization: `Bearer ${token}` },
    //     // });
    //     setUsers(response.data);
    //   };
    //   fetchUsers();
    // }, []);
  
    return (
      <div>
        <h2>Admin Panel</h2>
        <ul>
          {/* {users.map((user) => (
            <li key={user._id}>{user.name} - {user.role}</li>
          ))} */}
        </ul>
      </div>
    );
  };
  export default Admin;