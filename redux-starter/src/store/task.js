import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from '../utils/http';

let id = 0;

const initialState = {
    tasks: [],
    loading: false,
    error: null
}


const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        apiRequested: (state, action) => {
            state.loading = true;
        },
        apiRequestFailed: (state, action) => {
            state.loading = false;
        },
        setTasks: (state, action) => {
            state.tasks = action.payload.tasks;
        },
        addTask: (state, action) => {
            state.tasks.push({
                id: ++id,
                task: action.payload.task,
                completed: false
            })
        },
        removeTask: (state, action) => {
            const index = state.tasks.findIndex(task => task.id === action.payload.id);
            state.tasks.splice(index, 1);
        },
        completeTask: (state, action) => {
            const index = state.tasks.findIndex(task => task.id === action.payload.id);
            state.tasks[index].completed = true;
        }
    },
});

export const { setTasks, addTask, removeTask, completeTask } = taskSlice.actions;
export default taskSlice.reducer;
