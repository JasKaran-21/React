// 1. Create Store
import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../features/todo/todoSlice'  // todoReducer: It will give you access of all the things which are inside the todoSlice.

export const store = configureStore({          // store: It will give you access of all the things which are inside the configureStore.
    reducer: todoReducer                       // reducer: It will give you access of all the reducers which are inside the todoReducer.
})  


// Redux: Core library for state management
// React-redux: It will provide the connection between React and Redux. It is implementation of Redux in React.
// Redux-Toolkit: It is a library which is used to make Redux easier to use. It is a set of tools and best practices to make your Redux code cleaner and more maintainable.