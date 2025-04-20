import { useContext } from 'react'
import StoreContext from '../context/storeContext'

const Tasks = () => {
    const store = useContext(StoreContext);
    console.log(store);
    return (
        <div>
            Tasks
        </div>
    )
}

export default Tasks
