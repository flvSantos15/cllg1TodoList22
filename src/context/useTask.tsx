import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react'

export type TTask = {
  id: number
  task: string
  isCompleted: boolean
}

interface ITaskContextData {
  task: TTask[]
  getTask: (value: TTask) => void
  removeTask: (id: number) => void
  getTaskToEdit: (id: number, task: string, status: boolean) => void
}

interface ITaskProviderProps {
  children: ReactNode
}

export const TaskContext = createContext({} as ITaskContextData)

export function TaskProvider({ children }: ITaskProviderProps) {
  const [task, setTask] = useState<TTask[]>(() => {
    const todoStorate = localStorage.getItem('@todo-list')

    if (todoStorate) {
      return JSON.parse(todoStorate) as TTask[]
    } else {
      return []
    }
  })

  const getTask = (value: TTask) => {
    setTask((state) => [...state, value])
  }

  const removeTask = (idTask: number) => {
    setTask((state) => {
      return state.filter((task) => task.id !== idTask)
    })
  }

  const getTaskToEdit = (id: number, taskText: string, taskStatus: boolean) => {
    const newTaskList = task.map((t) =>
      t.id === id
        ? {
            ...t,
            task: taskText,
            isCompleted: taskStatus
          }
        : t
    )

    setTask(newTaskList)
  }

  useEffect(() => {
    if (task) {
      localStorage.setItem('@todo-list', JSON.stringify(task))
    }
  }, [task])

  return (
    <TaskContext.Provider value={{ task, getTask, removeTask, getTaskToEdit }}>
      {children}
    </TaskContext.Provider>
  )
}

export const useTask = () => {
  return useContext(TaskContext)
}
