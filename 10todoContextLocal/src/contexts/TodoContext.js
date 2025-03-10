import { createContext, useContext } from "react";

export const TodoContext = createContext({
    // todos: [
    //     {
    //         id: 1,
    //         todo: "Todo msg",
    //         checked: false,
    //     }
    // ],

    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {},
})

export const useTodo = () => {
    return useContext(TodoContext);   // useContext(context)
}

export const TodoProvider = TodoContext.Provider