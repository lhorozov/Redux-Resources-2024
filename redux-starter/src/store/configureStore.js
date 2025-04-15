import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from './employees';
import taskReducer from './task';

const store = configureStore({
    reducer: {
        employee: employeeReducer,
        task: taskReducer,
    } 
 });

export default store;