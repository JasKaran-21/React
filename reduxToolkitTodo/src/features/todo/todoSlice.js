// 2. create Scile
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {                        // initial state: what is the thing inside the store initially. I keep an object {} in intialState because multiple things can fit inside it.
    todos: [{ id: 1, text: "Hello World!" }]  // This is my state with simple name of todos.
}

// 3. Slice: It is bigger version of Reducer(functionality)
export const todoSlice = createSlice({    // Slice contain name, initialState, reducers.
    name: "todo",                         // name prop in redux-toolkit
    initialState,                         // each slice has its initialState
    reducers: {                           // Reducers: {props & functions}
        addTodo: (state, action) => {     // addTodo: It will give you access of two things: state, action :- state: It will give you access of all updated states(values) in the initialState of store. 
            const todo = {                // Create new todo
                id: nanoid(),
                text: action.payload,     // action.payload = Data sent to the reducer from an action. 
            }
            state.todos.push(todo)         // push new todo in state.todo
        },                                 // addtodo: properties, In contextAPI, declare fn but not write its defination, But in Redux-Toolkit, also write its defination.
        removeTodo: (state, action) => {   // This is a reducer function inside a createSlice().
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)   // filter: It will filter out the todo which is not equal to action.payload.
        },
        editTodo: (state, action) => {
            const { id, newText } = action.payload;  // Destructure the payload
            const todo = state.todos.find(todo => todo.id === id);   // find: It will find the todo which is equal to id.
            if (todo) todo.text = newText;           // If todo is found, update the text
        }
    },
})

// 4. Export Actions
export const { addTodo, removeTodo, editTodo } = todoSlice.actions  // actions: It will give you access of all the actions which are inside the todoSlice.

// 5. Export Reducer
export default todoSlice.reducer  // reducer: It will give you access of all the reducers which are inside the todoSlice.
