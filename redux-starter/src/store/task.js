import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";

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
            state.tasks = action.payload;
            state.loading = false;
        },
        addTask: (state, action) => {
            state.tasks.push(action.payload);
        },
        removeTask: (state, action) => {
            const index = state.tasks.findIndex(task => task.id === action.payload.id);
            state.tasks.splice(index, 1);
        },
        completeTask: (state, action) => {
            const index = state.tasks.findIndex(task => task.id === action.payload.id);
            state.tasks[index].completed = action.payload.completed;
        }
    },
});

export const { apiRequested, apiRequestFailed, setTasks, addTask, removeTask, completeTask } = taskSlice.actions;
export default taskSlice.reducer;

const url = '/tasks';

export const loadTasks = () =>
    apiCallBegan({
        url,
        onStart: apiRequested.type,
        onSuccess: setTasks.type,
        onError: apiRequestFailed.type,
    })

export const addNewTask = (task) =>
    apiCallBegan({
        url,
        method: "POST",
        data: task,
        onSuccess: addTask.type,
    });

export const updateCompleted = task => apiCallBegan({
    url: `${url}/${task.id}`,
    method: 'PATCH',
    data: task,
    onSuccess: completeTask.type
})

export const deleteTask = task => apiCallBegan({
    url: `${url}/${task.id}`,
    method: 'DELETE',
    onSuccess: removeTask.type
})
