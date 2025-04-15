import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from './employees';
import taskReducer from './task';
import log from '../middleware/log'

const store = configureStore({
    reducer: {
        employee: employeeReducer,
        task: taskReducer,
    },
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), log],
});

export default store;