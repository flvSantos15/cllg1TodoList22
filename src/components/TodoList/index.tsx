import { useEffect, useState } from "react"

import { TTask } from "../../context/task.context"
import { useTask } from "../../hooks/useTask"

import { TodoListTitle } from "./TodoListTitle"
import { TodoItem } from "./TodoItem"
import { NoTodoCard } from "./NoTodoCard"

export function TodoList() {
  const { task, removeTask, getTaskToEdit } = useTask()

  const [todos, setTodos] = useState<TTask[]>([])
  const [completedTodo, setCompletedTodo] = useState<TTask[]>([])

  const handleCheckTask = (task: TTask) => {
    alert("Função ainda não implementada")
    // const { id, name, isCompleted } = task
    // getTaskToEdit(id, name, !isCompleted)
  }

  const handleRemoveTask = (id: number) => {
    alert("Função ainda não implementada")
    // const newTaskList = todos.filter((t) => t.id !== id)

    // setTodos(newTaskList)
    // removeTask(id)
  }

  useEffect(() => {
    setTodos(task)
  }, [task])

  useEffect(() => {
    setCompletedTodo(
      todos.filter((i) => {
        return i.isCompleted === true
      })
    )
  }, [todos])

  return (
    <div className="flex flex-col items-start m-auto my-16 p-0 gap-6 w-[90%] xl:w-[55%] md:w-[75%] sm:w-[90%]">
      <div className="flex flex-col xl:flex-row md:flex-row sm:flex-row justify-between items-start xl:items-end md:items-end sm:items-end p-0 gap-2 w-full">
        <TodoListTitle
          title="Tarefas criadas"
          index={0}
          subtitle={String(todos.length)}
        />

        <TodoListTitle
          title="Concluídas"
          index={1}
          subtitle={
            !todos.length ? "0" : `${completedTodo.length} de ${todos.length}`
          }
        />
      </div>

      {/* <div className="w-full overflow-y-auto lg:max-h-[58vh] md:max-h-[50vh] border border-yellow-400"> */}
      <div className="flex flex-col justify-center items-center gap-4 w-full rounded-lg border-t border-t-solid border-t-[#333333]">
        {!todos.length ? (
          <NoTodoCard />
        ) : (
          <>
            {todos
              .map((todo, i) => {
                return (
                  <TodoItem
                    key={`${todo.id}-${i}`}
                    todo={todo}
                    onCheckTask={() => handleCheckTask(todo)}
                    onRemoveTask={() => handleRemoveTask(todo.id)}
                  />
                )
              })
              .reverse()}
          </>
        )}
      </div>
      {/* </div> */}
    </div>
  )
}
