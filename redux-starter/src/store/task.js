import { createAction, createReducer } from "@reduxjs/toolkit";

// Actions
export const addTask = createAction('ADD_TASK');
export const removeTask = createAction('REMOVE_TASK');
export const completeTask = createAction('COMPLETE_TASK');

// for async tasks we just simply return async function instead of object
export const fetchTodo = () => async (dispatch) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const task = await response.json();
    dispatch(addTask(task.title));
}

// Reducer
let id = 0;

export default createReducer([], (builder) => { // we are using mutable changes here
    builder.addCase(addTask, (state, action) => {
        state.push({
            id: ++id,
            task: action.payload.task,
            completed: false
        })
    })
    builder.addCase(removeTask, (state, action) => {
        const index = state.findIndex(task => task.id === action.payload.id);
        state.splice(index, 1);
    })
    builder.addCase(completeTask, (state, action) => {
        const index = state.findIndex(task => task.id === action.payload.id);
        state[index].completed = true;
    })
})