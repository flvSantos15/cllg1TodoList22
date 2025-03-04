import { useEffect, useState } from "react"

import { useTodo } from "../../hooks/useTodo"

import { TodoListTitle } from "./TodoListTitle"
import { TodoItem } from "./TodoItem"
import { NoTodoCard } from "./NoTodoCard"
import { TTodo } from "../../shared/models/todo"

export function TodoList() {
  const { removeTodo, saveTodo, todo, toggleTodo, updateTodo } = useTodo()

  const [todos, setTodos] = useState<TTodo[]>([])
  const [completedTodo, setCompletedTodo] = useState<TTodo[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const handleToggleTodo = async (todo: TTodo) => {
    setIsLoading(true)
    await toggleTodo(todo?.id, !todo?.isCompleted)
    setIsLoading(false)
  }

  const handleRemoveTodo = (id: string) => {
    alert("Função ainda não implementada")
    // const newTodoList = todos.filter((t) => t.id !== id)

    // setTodos(newTodoList)
    // removeTodo(id)
  }

  useEffect(() => {
    setTodos(todo)
  }, [todo])

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
                    onToggleTodo={() => handleToggleTodo(todo)}
                    onRemoveTodo={() => handleRemoveTodo(todo.id)}
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
