import { useContext, useEffect, useState } from 'react'
import StoreContext from '../context/storeContext'
// @ts-ignore
import { loadTasks } from '../store/task'

const Tasks = () => {
    const store = useContext(StoreContext);
    // @ts-ignore
    const [tasks, setTasks] = useState<{ task: string, id: string }[]>([])

    useEffect(() => {
        console.log(store)
        // @ts-ignore
        store.dispatch(loadTasks())
                // @ts-ignore
        const unsubscribe = store.subscribe(() => {
                    // @ts-ignore
            const storeTasks = store.getState().task.tasks;
            if (storeTasks !== tasks)
                setTasks(storeTasks)
        })

        return () => {
            unsubscribe();
        }
    }, [])

    return (
        <div>
            {tasks.map(task => <p key={task.id}>{task.id} {task.task}</p>)}
        </div>
    )
}

export default Tasks
