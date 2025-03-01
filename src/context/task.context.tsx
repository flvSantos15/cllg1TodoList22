import { createContext, ReactNode, useEffect, useState } from "react"
import {
  createTodoFirebaseService,
  getTodosFirebaseService
} from "../shared/services/firebase/todo"

export type TTask = {
  id: number
  name: string
  isCompleted: boolean
}

interface ITaskContextData {
  task: TTask[]
  saveTask: (value: string) => void
  removeTask: (id: number) => void
  getTaskToEdit: (id: number, name: string, isCompleted: boolean) => void
}

interface ITaskProviderProps {
  children: ReactNode
}

export const TaskContext = createContext({} as ITaskContextData)

export function TaskProvider({ children }: ITaskProviderProps) {
  const [task, setTask] = useState<TTask[]>([])

  const saveTask = async (value: string) => {
    await createTodoFirebaseService({
      name: value,
      isCompleted: false
    })
  }

  const removeTask = (id: number) => {
    setTask((state) => state.filter((item) => item.id !== id))
  }

  const getTaskToEdit = (id: number, name: string, isCompleted: boolean) => {
    const newTaskList = task.map((t) =>
      t.id === id
        ? {
            ...t,
            name,
            isCompleted
          }
        : t
    )

    setTask(newTaskList)
  }

  const getTasksData = async () => {
    try {
      const response = await getTodosFirebaseService()

      setTask(response)
    } catch (error) {
      return error
    }
  }

  useEffect(() => {
    getTasksData()
  }, [])

  return (
    <TaskContext.Provider value={{ task, saveTask, removeTask, getTaskToEdit }}>
      {children}
    </TaskContext.Provider>
  )
}
