import { ChangeEvent, InvalidEvent, useState } from "react"

import { useTask } from "../../context/useTask"
import { Input } from "./Input"

interface EditTodoFormProps {
  taskId: number
  taskText: string
  status: boolean
  onCloseDialog: () => void
}

export function EditTodoForm({
  taskId,
  taskText,
  status,
  onCloseDialog
}: EditTodoFormProps) {
  const { getTaskToEdit, task } = useTask()

  const [taskValue, setTaskValue] = useState("")

  const handleEditTask = (event: ChangeEvent<HTMLInputElement>) => {
    event.target.setCustomValidity("")
    setTaskValue(event.target.value)
  }

  const handleNewCommentInvalid = (event: InvalidEvent<HTMLInputElement>) => {
    event.target.setCustomValidity("Este campo é obrigatório!")
  }

  const handleAddTask = () => {
    getTaskToEdit(taskId, taskValue, status)
    setTaskValue("")
    onCloseDialog()
  }

  const isNewTaskEmpty = task ? false : true

  return (
    <form className="flex flex-col items-center m-auto gap-4 w-full">
      <Input
        taskText={taskText}
        handleEditTask={handleEditTask}
        handleNewCommentInvalid={handleNewCommentInvalid}
      />

      <button
        type="submit"
        onClick={handleAddTask}
        disabled={isNewTaskEmpty}
        data-cy="editSubmitButton"
        className="flex items-center justify-center w-full h-[3.25rem] p-4 gap-2 blue-dark rounded-lg transition delay-50 ease-in-out enabled:hover:bg-[#4ea8de] disabled:cursor-not-allowed"
      >
        Salvar
      </button>
    </form>
  )
}
