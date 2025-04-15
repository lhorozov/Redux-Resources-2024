import store from './store/configureStore';
import { apiCallBegan } from './store/api';

store.dispatch(
    apiCallBegan({
        url: '/tasks',
        onStart: 'tasks/apiRequested',
        onSuccess: 'tasks/setTasks',
        onError: 'tasks/apiRequestFailed'
    })
);
