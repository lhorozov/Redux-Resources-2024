import store from './store/configureStore';
import { loadTasks, addNewTask, updateCompleted, deleteTask } from './store/task';

store.dispatch(loadTasks());
store.dispatch(addNewTask({ task: "Complete This Exercise" }));
store.dispatch(updateCompleted({ id: 6, task: 'Changed', completed: true }));
store.dispatch(deleteTask({ id: 1 }));
