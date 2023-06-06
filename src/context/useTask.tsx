import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, editTodo, removeTodo } from '../redux/slice'

export type TTask = {
  id: number
  name: string
  isCompleted: boolean
}

interface ITaskContextData {
  task: TTask[]
  getTask: (value: TTask) => void
  removeTask: (id: number) => void
  getTaskToEdit: (id: number, name: string, isCompleted: boolean) => void
}

interface ITaskProviderProps {
  children: ReactNode
}

export const TaskContext = createContext({} as ITaskContextData)

export function TaskProvider({ children }: ITaskProviderProps) {
  const dispatch = useDispatch()
  const todo = useSelector((state) => state) as TTask[]

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
