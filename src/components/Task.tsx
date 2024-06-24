import React , {useState} from "react";
import "./css/Task.css";
import TaskData from "./TaskData";

function Task() {
    const [name, setName] = useState("");
    const [task, setTask] = useState("");
    const [date, setDate] = useState("");
    const [data, setData] = useState([
        {
            name: "John",
            task: "Complete the assignment",
            date: "2021-10-01",
        },
    ]);

    function deleteTask(name : string){
        setData(data.filter((task) => task.name !== name));
    }

    function addTask(name: string, task: string, date: string){
        if(name === "" || task === "" || date === "") return alert("Please fill all the fields");
        setData([...data, {name, task, date}]);
    }
    return (
        <div className="container">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Task</th>
                        <th>Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {data.map((task) => (
                        <TaskData key={`${task.name}-${task.date}`} data={task} deleteTask={deleteTask} />
                    ))
                }
                </tbody>
            </table>
            <div className="addTask">
                <input type="text" id="name" placeholder="Name" onChange={(e) => setName(e.target.value)} />
                <input type="text" id="task" placeholder="Task" onChange={(e) => setTask(e.target.value)} />
                <input type="date" id="date" onChange={(e) => setDate(e.target.value)} />
                <button onClick={() => addTask(name,task,date)}>Add Task</button>
            </div>
        </div>
    );
}

export default Task;