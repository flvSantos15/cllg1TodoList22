import { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface ITaskContextData {
  task: string[]
  getTask: (value: string) => void
}

interface ITaskProviderProps {
  children: ReactNode
}

export const TaskContext = createContext({} as ITaskContextData)

export function TaskProvider({ children }: ITaskProviderProps) {
  const [task, setTask] = useState<string[]>([])
  const [newTask, setNewTask] = useState('')

  function getTask(value: string) {
    setNewTask(value)
  }

  useEffect(() => {
    if (newTask) {
      setTask([...task, newTask])
    }
  }, [newTask])

  return (
    <TaskContext.Provider value={{ task, getTask }}>
      {children}
    </TaskContext.Provider>
  )
}

export const useTask = () => {
  return useContext(TaskContext)
}