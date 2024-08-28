//configure a store
import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../features/todo/todoSlice'
export const store=configureStore({
    reducer:todoReducer
})

//create reducer, reducers are made as slices in RTK. go to features/todo/todoSlice.js   