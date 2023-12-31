import React from 'react'
import { useState } from 'react';
import { useTodo } from '../context';

function TodoForm() {

    const [todo , setTodo] = useState('')  // Individual todo ke liye

    const {addTodo} = useTodo() // Humne Todo Context me banaye hai pehle hi isliye drilling nahi karna padega baar baar likhna nahi padega useContext

    const add = (e) => {
        e.preventDefault()
        
        if (!todo) return 

        addTodo({todo: todo , completed: false}) // addTodo(todo) aise nahi denge Q ki hum spread bhi to kar rahe hai app.jsx me isliye ise ek object denge
        setTodo("")
    }
    

    return (
        <form onSubmit={add}  className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo} // isko wiring bolte hai value me jo todo daale hai
                onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0" >
                Add
            </button>
        </form>
    );
}

export default TodoForm;

