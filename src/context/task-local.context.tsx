import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from "react"
import { TTask } from "../shared/models/todo"

interface ITaskLocalContextData {
  task: TTask[]
  getTask: (value: TTask) => void
  removeTask: (id: string) => void
  getTaskToEdit: (id: string, name: string, isCompleted: boolean) => void
}

interface ITaskLocalProviderProps {
  children: ReactNode
}

export const TaskLocalContext = createContext({} as ITaskLocalContextData)

export function TaskLocalProvider({ children }: ITaskLocalProviderProps) {
  const [taskLocal, setTaskLocal] = useState<TTask[]>(() => {
    const todoStorate = localStorage.getItem("@todo-list")

    if (todoStorate) {
      return JSON.parse(todoStorate) as TTask[]
    } else {
      return []
    }
  })

  const getTaskToSave = (value: TTask) => {
    setTaskLocal((state) => [...state, value])
  }

  const handleRemoveTask = (id: string) => {
    setTaskLocal((state) => state.filter((item) => item.id !== id))
  }

  const getTaskToEdit = (id: string, name: string, isCompleted: boolean) => {
    const newTaskList = taskLocal.map((t) =>
      t.id === id
        ? {
            ...t,
            name,
            isCompleted
          }
        : t
    )

    setTaskLocal(newTaskList)
  }

  useEffect(() => {
    if (taskLocal) {
      localStorage.setItem("@todo-list", JSON.stringify(taskLocal))
    }
  }, [])

  return (
    <TaskLocalContext.Provider
      value={{
        task: taskLocal,
        getTask: getTaskToSave,
        removeTask: handleRemoveTask,
        getTaskToEdit
      }}
    >
      {children}
    </TaskLocalContext.Provider>
  )
}

export const useTask = () => {
  return useContext(TaskLocalContext)
}
