import { useState } from "react";

function TodoList() {

    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState("");

    const addTask = () => {
        if (task) {   // Prevents adding empty tasks
            setTasks([...tasks, task])    // Adds new task to the array
            setTask("")    // Clears the input field after adding
        }
    }

    const removeTask = (index) => {
        const updateTask = tasks.filter((_, i) => i !== index);
        setTasks(updateTask);
    }

    return (
        <div style={{ margin: "10px" }}>
            <h1>To-Do List</h1>

            <input
                style={styles.ip}
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Enter your task" />

            <button onClick={addTask}>Add</button>

            <ul>  {/* Displaying the Task List */}
                {tasks.map((t, index) => (
                    <li style={styles.li} key={index}> {t} <button onClick={() => removeTask(index)}>Delete</button></li>
                ))}
            </ul>
        </div>
    )
}

const styles = {
    ip: { border: "1px", padding: "14px 20px", borderRadius: "5px", marginRight: "20px" },
    li: { marginTop: "10px", maxWidth: "250px", display: "flex", justifyContent: "space-between" }
};

export default TodoList
