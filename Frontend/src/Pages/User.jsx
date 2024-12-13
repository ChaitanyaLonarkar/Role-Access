import React,{ useState } from 'react'

const User = () => {
    const [tasks, setTasks] = useState([]);
  
    // useEffect(() => {
    //   const fetchUserTasks = async () => {
    //     const token = localStorage.getItem("token");
    //     const response = await axios.get("/api/user/tasks", {
    //       headers: { Authorization: `Bearer ${token}` },
    //     });
    //     setTasks(response.data);
    //   };
    //   fetchUserTasks();
    // }, []);
  
    return (
      <div>
        <h2>User Tasks</h2>
        <ul>
          {tasks.map((task) => (
            <li key={task._id}>{task.title} - {task.status}</li>
          ))}
        </ul>
      </div>
    );
  };
  export default User;