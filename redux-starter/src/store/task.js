import { createAction } from "@reduxjs/toolkit";

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
export default function reducer(state = [], action) {
    switch (action.type) {
        case addTask.type:
            return [
                ...state,
                {
                    id: ++id,
                    task: action.payload.task,
                    completed: false
                }
            ]
        case removeTask.type:
            return state.filter(task => task.id !== action.payload.id)

        case completeTask:
            return state.map(task => {
                if (task.id === action.payload.id) {
                    return { ...task, completed: true }
                }
                return task;
            })

        default:
            return state;
    }
}