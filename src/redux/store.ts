import { configureStore } from "@reduxjs/toolkit"
import todoReducer from "./slice"
import selectTodoReducer from "./todo-slice"

const store = configureStore({
  reducer: selectTodoReducer
})

export default store
