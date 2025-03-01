import { createContext, ReactNode, useEffect, useState } from "react"
import {
  createTodoFirebaseService,
  deleteTodoFirebaseService,
  getTodosFirebaseService,
  toggleTodoFirebaseService,
  updateTodoFirebaseService
} from "../shared/services/firebase/todo"
import { TTask } from "../shared/models/todo"

interface ITaskContextData {
  task: TTask[]
  saveTask: (value: string) => void
  removeTask: (id: string) => void
  updateTask: (id: string, name: string) => void
  toggleTask: (id: string, isCompleted: boolean) => void
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

  const removeTask = async (id: string) => {
    // setTask((state) => state.filter((item) => item.id !== id))
    await deleteTodoFirebaseService(id)
  }

  const toggleTask = async (id: string, isCompleted: boolean) => {
    await toggleTodoFirebaseService({
      id,
      isCompleted
    })
  }

  const updateTask = async (id: string, name: string) => {
    // const newTaskList = task.map((t) =>
    //   t.id === id
    //     ? {
    //         ...t,
    //         name,
    //         isCompleted
    //       }
    //     : t
    // )

    // setTask(newTaskList)
    await updateTodoFirebaseService({
      id,
      name
    })
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
    <TaskContext.Provider
      value={{ task, saveTask, removeTask, updateTask, toggleTask }}
    >
      {children}
    </TaskContext.Provider>
  )
}
