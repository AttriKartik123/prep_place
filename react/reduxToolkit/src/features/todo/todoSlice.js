import { combineSlices, createSlice , nanoid } from "@reduxjs/toolkit";

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
        updateTodo: (state,action) =>  {
            const {id,text} = action.payload ;

            state.todos = state.todos.map((todo)=> todo.id === id? {...todo, text : text} : todo)

        }
        
        
    }
})

export const {addTodo, removeTodo , updateTodo} = todoSlice.actions

export default todoSlice.reducer