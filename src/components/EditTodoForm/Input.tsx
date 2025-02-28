import { ChangeEvent, InvalidEvent } from "react"

interface InputProps {
  handleEditTask: (event: ChangeEvent<HTMLInputElement>) => void
  handleNewCommentInvalid: (event: InvalidEvent<HTMLInputElement>) => void
  taskText: string
}

export function Input({
  handleEditTask,
  handleNewCommentInvalid,
  taskText
}: InputProps) {
  return (
    <input
      type="text"
      placeholder="Editar tarefa"
      // value={taskValue}
      defaultValue={taskText}
      onChange={handleEditTask}
      onInvalid={handleNewCommentInvalid}
      required
      data-cy="taskEditInput"
      className="flex items-center w-full h-[3.375rem] rounded-lg p-4 gap-2 border border-solid border-[#0d0d0d] gray-500 focus:border focus:border-solid focus:border-[#5E60CE] hover:border-[#5E60CE] outline-none"
    />
  )
}
