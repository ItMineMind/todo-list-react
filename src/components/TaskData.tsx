import React from "react";

interface Task {
    name: string;
    task: string;
    date: string;
}

interface TaskDataProps {
    data: Task;
    deleteTask: Function;
}


function TaskData({ data , deleteTask }: TaskDataProps) {
    function mytest(name : string){
        deleteTask(name);
    }

    return (
        <tr>
            <td>{data.name}</td>
            <td>{data.task}</td>
            <td>{data.date}</td>
            <td><button onClick={() => mytest(data.name)}>Remove</button></td>
        </tr>
    );
}

export default TaskData;