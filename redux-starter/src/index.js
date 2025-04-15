import store from './store/configureStore';
import { addTask, removeTask, completeTask } from './store/task';
import { addEmployee } from './store/employees';

const unsubscribe = store.subscribe(() => {
    console.log("Updated", store.getState())
})

store.dispatch(addTask({ task: 'Task 1' }));
store.dispatch(addTask({ task: 'Task 2' }));
console.log(store.getState());

store.dispatch(completeTask({ id: 2 }));

store.dispatch(removeTask({ id: 1}));
console.log(store.getState());

store.dispatch(addEmployee({
    name: 'Harley'
}))

unsubscribe();
