import store from './store/configureStore';
import { loadTasks, addNewTask } from './store/task';

store.dispatch(loadTasks());
store.dispatch(addNewTask({ task: "Complete This Exercise" }));
