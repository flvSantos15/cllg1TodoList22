import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    id: 0,
    task: '',
    isCompleted: false
  },
  reducers: {
    removeTask: (state) => {
      // remover uma tarefa
    },
    addTask: (state) => {
      // adicionar uma tarefa
    },
    editTask: (state) => {
      //  editar uma tarefa
    }
  }
})

export const { addTask, editTask, removeTask } = todoSlice.actions

export default todoSlice.reducer
