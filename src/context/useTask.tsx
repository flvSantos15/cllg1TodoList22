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
    // setTask((state) => [...state, value])
    dispatch(addTodo(value))
  }

  const removeTask = (id: number) => {
    dispatch(removeTodo(id))
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

    dispatch(addTodo(newTaskList))
  }

  // useEffect(() => {
  //   if (task) {
  //     localStorage.setItem('@todo-list', JSON.stringify(task))
  //   }
  // }, [task])

  // useEffect(() => {
  //   const todoStorate = localStorage.getItem('@todo-list')

  //   if (todoStorate) {
  //     dispatch(addTodo(JSON.parse(todoStorate) as TTask[]))
  //   } else {
  //     dispatch(addTodo([]))
  //   }
  // }, [])

  useEffect(() => {
    if (todo.length > 1) {
      const newTodoArray = todo.filter((item) => item.name !== '')

      newTodoArray.reduce((acc: TTask[], curr) => {
        if (acc.indexOf(curr) < 0) acc.push(curr)

        return acc
      }, [])

      setTask(newTodoArray)
      localStorage.setItem('@todo-list', JSON.stringify(newTodoArray))
    }
  }, [todo])

  return (
    <TaskContext.Provider value={{ task, getTask, removeTask, getTaskToEdit }}>
      {children}
    </TaskContext.Provider>
  )
}

export const useTask = () => {
  return useContext(TaskContext)
}
