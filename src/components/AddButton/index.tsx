import { ChangeEvent, InvalidEvent, useState } from 'react'
import { useTask } from '../../context/useTask'
import plusIcon from '/assets/plus.svg'

export function AddButton() {
  const { getTask } = useTask()
  const [task, setTask] = useState('')

  function handleCreateNewTask(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('')
    setTask(event.target.value)
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Este campo é obrigatório!')
  }

  function handleAddTask() {
    getTask(task)
    setTask('')
  }

  const isNewTaskEmpty = task ? false : true

  return (
    <div className="flex items-center m-auto mt-[-28px] gap-2 w-[46rem] h-[3.375rem]">
      <input
        type="text"
        placeholder="Adicione um nova tarefa"
        value={task}
        onChange={handleCreateNewTask}
        onInvalid={handleNewCommentInvalid}
        required
        className="flex items-center w-[39.875rem] h-[3.375rem] rounded-lg p-4 gap-2 border border-solid border-[#0d0d0d] gray-500 focus:border focus:border-solid focus:border-[#5E60CE] outline-none"
      />
      <button
        onClick={handleAddTask}
        disabled={isNewTaskEmpty}
        className="flex items-center justify-center w-[5.625rem] h-[3.25rem] p-4 gap-2 blue-dark rounded-lg transition delay-50 ease-in-out enabled:hover:bg-[#4ea8de] disabled:cursor-not-allowed"
      >
        Criar
        <img src={plusIcon} alt="plusIcon" />
      </button>
    </div>
  )
}