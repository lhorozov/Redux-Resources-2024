import axios from 'axios';

import store from './store/configureStore';
import { fetchTasks } from './store/task';

// const gettingTasks = async () => {
//     try {
//         const response = await axios.get("http://localhost:5000/api/tasks");
//         store.dispatch(setTasks({ tasks: response.data }))
//     } catch (error) {
//         store.dispatch({ type: "SHOW_ERROR", payload: { error: error.message } })
//     }
// }

store.dispatch(fetchTasks());
