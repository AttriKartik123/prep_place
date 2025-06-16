import { createSlice , nanoid } from "@reduxjs/toolkit";

const initialState = {

    todos : [{id: 1 , text:"Hello World"}]
}


export const todoSlice = createSlice({
    name: 'todo' , 
    initialState,
    reducers: {
        addTodo : (state,action) => {
            const todo= {
                id: nanoid(),
                text: action.payload //payload ek object hai
            }

            state.todos.push(todo)
        }, // state->sabhi todos ki state btadega eg Id etc and action jo function perform krna hoga (JO VALUES AAI)
        removeTodo: (state,action) => {
            state.todos = state.todos.filter((todos)=> todo.id !== action.payload)
        },
        
        
    }
})