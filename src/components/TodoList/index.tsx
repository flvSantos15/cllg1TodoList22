import { useEffect, useState } from 'react'

import { TTask, useTask } from '../../context/useTask'

import { TodoListTitle } from './TodoListTitle'
import { TodoItem } from './TodoItem'
import { NoTodoCard } from './NoTodoCard'

export function TodoList() {
  const { task, removeTask, getTaskToEdit } = useTask()

  const [todo, setTodo] = useState<TTask[]>([])
  const [completedTodo, setCompletedTodo] = useState<TTask[]>([])

  const handleCheckTask = (task: TTask) => {
    getTaskToEdit(task.id, task.task, !task.isCompleted)
    // const newTaskList = todo.map((t) =>
    //   t.id === id
    //     ? {
    //         ...t,
    //         isCompleted: !t.isCompleted
    //       }
    //     : t
    // )
    // setTodo(newTaskList)
  }

  const handleRemoveTask = (id: number) => {
    const newTaskList = todo.filter((t) => t.id !== id)

    setTodo(newTaskList)
    removeTask(id)
  }

  useEffect(() => {
    setTodo(task)
  }, [task])

  useEffect(() => {
    setCompletedTodo(
      todo.filter((i) => {
        return i.isCompleted === true
      })
    )
  }, [todo])

  return (
    <div className="flex flex-col items-start m-auto my-16 p-0 gap-6 w-[90%] xl:w-[55%] md:w-[75%] sm:w-[90%]">
      <div className="flex flex-col xl:flex-row md:flex-row sm:flex-row justify-between items-start xl:items-end md:items-end sm:items-end p-0 gap-2 w-full">
        <TodoListTitle
          title="Tarefas criadas"
          index={0}
          subtitle={String(todo.length)}
        />

        <TodoListTitle
          title="Concluídas"
          index={1}
          subtitle={
            !todo.length ? '0' : `${completedTodo.length} de ${todo.length}`
          }
        />
      </div>

      <div className="flex flex-col justify-center items-center gap-4 w-full rounded-lg border-t border-t-solid border-t-[#333333]">
        {!todo.length ? (
          <NoTodoCard />
        ) : (
          <>
            {todo.map((t) => {
              return (
                <TodoItem
                  key={t.id}
                  taskTitle={t.task}
                  taskId={t.id}
                  isCompleted={t.isCompleted}
                  onCheckTask={() => handleCheckTask(t)}
                  onRemoveTask={() => handleRemoveTask(t.id)}
                />
              )
            })}
          </>
        )}
      </div>
    </div>
  )
}
