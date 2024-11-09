import React, { useEffect, useState } from 'react';
import api from '../api'
import TaskList from '../components/TaskList';

export default function Home() {
    //variables
    const [tasks, setTasks] = useState([]);

    //functions
    const getTasks = async () => {
        const resp = await api('/tasks/getAllTasks', {method: 'GET'});
        if (resp.error) {
            console.log('there was an issue getting the tasks')
        } else {
            console.log('data here', resp)
            setTasks(resp.data)
        }
    }

    useEffect(() => {
        getTasks();
    }, [])

    return (
        <div>
            <h1>Task management app</h1>
            <TaskList tasks={tasks} onUpdate={getTasks}/>
        </div>
    )
}