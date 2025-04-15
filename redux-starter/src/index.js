import store from './store/configureStore';
import { apiCallBegan } from './store/api';
import { loadTasks } from './store/task';

store.dispatch(loadTasks());
