import store from './store/configureStore';
import { apiCallBegan } from './store/api';

// const gettingTasks = async () => {
//     try {
//         const response = await axios.get("http://localhost:5000/api/tasks");
//         store.dispatch(setTasks({ tasks: response.data }))
//     } catch (error) {
//         store.dispatch({ type: "SHOW_ERROR", payload: { error: error.message } })
//     }
// }

store.dispatch(
    apiCallBegan({
        url: '/tasks',
        onStart: 'tasks/apiRequested',
        onSuccess: 'tasks/setTasks',
        onError: 'tasks/apiRequestFailed'
    })
);
