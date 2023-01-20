import { ChangeEvent, InvalidEvent, useState } from 'react'

import { useTask } from '../../context/useTask'

import plusIcon from '/assets/plus.svg'

export function TodoForm() {
  const { getTask } = useTask()

  const [task, setTask] = useState('')

  const handleCreateNewTask = (event: ChangeEvent<HTMLInputElement>) => {
    event.target.setCustomValidity('')
    setTask(event.target.value)
  }

  const handleNewCommentInvalid = (event: InvalidEvent<HTMLInputElement>) => {
    event.target.setCustomValidity('Este campo é obrigatório!')
  }

  const handleAddTask = () => {
    const newTask = {
      id: Math.random(),
      task,
      isCompleted: false
    }

    getTask(newTask)
    setTask('')
  }

  const isNewTaskEmpty = task ? false : true

  return (
    <form className="flex flex-col xl:flex-row md:flex-row sm:flex-col items-center m-auto mt-[-28px] gap-2 w-[90%] xl:w-[55%] md:w-[75%] sm:w-[90%] xl:h-[3.375rem]">
      <input
        type="text"
        placeholder="Adicione um nova tarefa"
        value={task}
        onChange={handleCreateNewTask}
        onInvalid={handleNewCommentInvalid}
        required
        className="flex items-center w-full xl:w-[39.875rem] md:w-[80%] sm:w-full h-[3.375rem] rounded-lg p-4 gap-2 border border-solid border-[#0d0d0d] gray-500 focus:border focus:border-solid focus:border-[#5E60CE] outline-none"
      />
      <button
        type="submit"
        onClick={handleAddTask}
        disabled={isNewTaskEmpty}
        className="flex items-center justify-center w-full xl:w-[5.625rem] md:w-[20%] sm:w-full h-[3.25rem] p-4 gap-2 blue-dark rounded-lg transition delay-50 ease-in-out enabled:hover:bg-[#4ea8de] disabled:cursor-not-allowed"
      >
        Criar
        <img src={plusIcon} alt="plus symbol" />
      </button>
    </form>
  )
}