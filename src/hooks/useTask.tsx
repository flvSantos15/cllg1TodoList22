import { useContext } from "react"
import { TaskContext } from "../context/task.context"

export const useTask = () => {
  return useContext(TaskContext)
}
