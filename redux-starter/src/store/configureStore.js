import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import employeeReducer from './employees';
import taskReducer from './task';

const store = configureStore({
    reducer: {
        employee: employeeReducer,
        task: taskReducer,
    },
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), logger],
});

export default store;