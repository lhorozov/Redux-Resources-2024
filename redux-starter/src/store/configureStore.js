import { configureStore } from '@reduxjs/toolkit';

import employeeReducer from './employees';
import taskReducer from './task';
import error from '../middleware/error';
import api from '../middleware/api'

const store = configureStore({
    reducer: {
        employee: employeeReducer,
        task: taskReducer,
    },
    middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware(),
        api,
        error
    ],
});

export default store;