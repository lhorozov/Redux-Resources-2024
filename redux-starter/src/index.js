import store from './store/configureStore';
import { addTask, removeTask, completeTask } from './store/task';

const unsubscribe = store.subscribe(() => {
    console.log("Updated", store.getState())
})

store.dispatch(addTask('Task 1'));
store.dispatch(addTask('Task 2'));
console.log(store.getState());


store.dispatch(completeTask(1));

store.dispatch(removeTask(1));

console.log(store.getState());
unsubscribe();
