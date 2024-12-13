import React ,{ useState } from 'react'

const Manager = () => {
    const [tasks, setTasks] = useState([]);
  
    // useEffect(() => {
    //   const fetchTasks = async () => {
    //     const token = localStorage.getItem("token");
    //     const response = await axios.get("/api/manager/tasks", {
    //       headers: { Authorization: `Bearer ${token}` },
    //     });
    //     setTasks(response.data);
    //   };
    //   fetchTasks();
    // }, []);
  
    return (
      <div>
        <h2>Manager Panel</h2>
        <ul>

          {/* {tasks.map((task) => (
            <li key={task._id}>{task.title} - {task.status}</li>
          ))} */}
        </ul>
      </div>
    );
  };
  export default Manager;