import store from './store';

store.dispatch({ type: 'ADD_TASK', payload: { task: 'Task 1' } });

console.log(store.getState());

store.dispatch({ type: 'REMOVE_TASK', payload: { id: 1 } });

console.log(store.getState());
