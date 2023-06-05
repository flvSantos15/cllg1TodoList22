import { createSlice } from '@reduxjs/toolkit'

import { TTask } from '../context/useTask'

const todoSlice = createSlice({
  name: 'todos',
  initialState: [
    {
      id: 0,
      name: '',
      isCompleted: false
    }
  ],
  reducers: {
    removeTodo: (state, action) => {
      return state.filter((task) => task.id !== action.payload.id)
    },
    addTodo: (state, action) => {
      // state.push(action.payload)
      return state.concat(action.payload)
      // state.push({
      //   id: action.payload.id,
      //   name: action.payload.name,
      //   isCompleted: action.payload.isCompleted
      // })
    },
    editTodo: (state, action) => {
      console.log(action.payload)
      return state.map((t) =>
        t.id === action.payload.id
          ? {
              ...t,
              name: action.payload.name,
              isCompleted: action.payload.isCompleted
            }
          : t
      )
    }
  }
})

export const { addTodo, editTodo, removeTodo } = todoSlice.actions

export default todoSlice.reducer
