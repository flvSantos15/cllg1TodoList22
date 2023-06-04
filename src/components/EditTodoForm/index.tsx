import { ChangeEvent, InvalidEvent, useState } from 'react'

import { useTask } from '../../context/useTask'

interface EditTodoFormProps {
  taskId: number
  status: boolean
  onCloseDialog: () => void
}

export function EditTodoForm({
  taskId,
  status,
  onCloseDialog
}: EditTodoFormProps) {
  const { getTaskToEdit, task } = useTask()

  const [taskValue, setTaskValue] = useState('')

  const handleEditTask = (event: ChangeEvent<HTMLInputElement>) => {
    event.target.setCustomValidity('')
    setTaskValue(event.target.value)
  }

  const handleNewCommentInvalid = (event: InvalidEvent<HTMLInputElement>) => {
    event.target.setCustomValidity('Este campo é obrigatório!')
  }

  const handleAddTask = () => {
    getTaskToEdit(taskId, taskValue, status)
    setTaskValue('')
    onCloseDialog()
  }

  const isNewTaskEmpty = task ? false : true

  return (
    <form className="flex flex-col items-center m-auto gap-4 w-full">
      <input
        type="text"
        placeholder="Editar tarefa"
        value={taskValue}
        onChange={handleEditTask}
        onInvalid={handleNewCommentInvalid}
        required
        className="flex items-center w-full h-[3.375rem] rounded-lg p-4 gap-2 border border-solid border-[#0d0d0d] gray-500 focus:border focus:border-solid focus:border-[#5E60CE] outline-none"
      />
      <button
        type="submit"
        onClick={handleAddTask}
        disabled={isNewTaskEmpty}
        className="flex items-center justify-center w-full h-[3.25rem] p-4 gap-2 blue-dark rounded-lg transition delay-50 ease-in-out enabled:hover:bg-[#4ea8de] disabled:cursor-not-allowed"
      >
        Salvar
      </button>
    </form>
  )
}
