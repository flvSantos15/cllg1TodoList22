import { useContext } from "react"
import { TodoContext } from "../context/todo.context"

export const useTodo = () => {
  return useContext(TodoContext)
}
