import { useEffect, useState } from 'react'
import { getAllTasks } from '../api/tasks.api'
import { TaskCard } from './TaskCard'

export function TasksList() {

    // useState return an array that it will be saved in setTasks and tasks for getting it
    const [tasks, setTasks] = useState([])

    // useEffect runs when starting the page
    useEffect(() => {

        async function loadTasks() {
            const res = await getAllTasks()
            setTasks(res.data)
        }

        loadTasks()
    }, [])

    return (
        <div className='grid grid-cols-3 gap-3'>
            {tasks.map(task => (
                <TaskCard key={task.id} task={task} />
            ))}
        </div>
    )
}