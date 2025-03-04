import { createSlice } from "@reduxjs/toolkit"
import { TTodo } from "../shared/models/todo"

const initialState = {
  id: "0",
  name: "",
  isCompleted: false
}

type ActionProps = {
  type: string
  payload: TTodo
}

const todoSlice = createSlice({
  name: "selectedTodo",
  initialState,
  reducers: {
    selectTodo: (state, action: ActionProps) => {
      return (state = action.payload)
      // return state.concat(action.payload)
    }
  }
})

export const { selectTodo } = todoSlice.actions

export default todoSlice.reducer
