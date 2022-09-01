import { createContext, ReactNode, useContext, useState } from "react";

export type TTask = {
  id: number
  task: string
  isCompleted: boolean
}
interface ITaskContextData {
  task: TTask[]
  getTask: (value: TTask) => void
}

interface ITaskProviderProps {
  children: ReactNode
}

export const TaskContext = createContext({} as ITaskContextData)

export function TaskProvider({ children }: ITaskProviderProps) {
  const [task, setTask] = useState<TTask[]>([])

  function getTask(value: TTask) {
    setTask([...task, value])
  }

  return (
    <TaskContext.Provider value={{ task, getTask }}>
      {children}
    </TaskContext.Provider>
  )
}

export const useTask = () => {
  return useContext(TaskContext)
}