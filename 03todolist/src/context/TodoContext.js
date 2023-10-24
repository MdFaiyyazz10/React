import React , {useContext , createContext} from "react";

export const TodoContext = createContext({
    todos: [{
        id: 1,
        todo: "Todo message",
        completed: false,
    }],

    addTodo: (todo) => {},
    updateTodo: (id , todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}, 
});



//custom hook isse baar baar nahi likhna padega useContext
export const useTodo = ()=>{
    return useContext(TodoContext)
}


// Provider is Neccessary
export const TodoProvider = TodoContext.Provider;
