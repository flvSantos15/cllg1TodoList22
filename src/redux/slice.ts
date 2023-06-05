import { createSlice } from '@reduxjs/toolkit'

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
      return state.concat(action.payload)
    },
    editTodo: (state, action) => {
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
