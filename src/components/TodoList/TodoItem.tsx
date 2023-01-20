import { useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'

import { EditTodoForm } from '../EditTodoForm'

import { BsCheckCircleFill, BsCircle } from 'react-icons/bs'
import { HiOutlineTrash } from 'react-icons/hi'
import { MdModeEditOutline, MdClose } from 'react-icons/md'

interface TodoItemProps {
  isCompleted: boolean
  taskTitle: string
  taskId: number
  onCheckTask: () => void
  onRemoveTask: () => void
}

export function TodoItem({
  isCompleted,
  taskId,
  taskTitle,
  onCheckTask,
  onRemoveTask
}: TodoItemProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  return (
    <div className="flex items-center p-4 gap-3 w-full h-[4.5rem] bg-[#262626] border border-solid border-[#333333] shadow-[0px_2px_8px_rgba(0,0,0,0.06)] rounded-lg text-xl sm:text-base">
      {isCompleted ? (
        <>
          <BsCheckCircleFill
            color="#8284fa"
            // onClick={() => handleCheckTask(t.id)}
            onClick={onCheckTask}
          />

          <p
            className="font-[Inter] font-normal text-sm text-[#808080] w-[39.5rem] line-through cursor-pointer"
            onClick={onCheckTask}
          >
            {taskTitle}
          </p>
        </>
      ) : (
        <>
          <BsCircle
            color="#4ea8de"
            // onClick={() => handleCheckTask(t.id)}
            onClick={onCheckTask}
          />

          <p
            className="font-[Inter] font-normal text-sm text-[#f2f2f2] w-[39.5rem] cursor-pointer"
            onClick={onCheckTask}
          >
            {taskTitle}
          </p>
        </>
      )}

      <div className="flex gap-1 p-0">
        <Dialog.Root open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <Dialog.Trigger
            type="button"
            className="flex items-center justify-center w-[1.5rem] h-[1.5rem]"
          >
            <MdModeEditOutline color="#4ea8de" />
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="w-screen h-screen bg-black/80 fixed inset-0" />
            <Dialog.Content className="absolute flex flex-col gap-4 p-10 bg-zinc-900 rounded-2xl w-full max-w-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <Dialog.Close className="absolute right-6 top-6 text-zinc-400 hover:text-zinc-200">
                <MdClose size={24} aria-label="Fechar" />
              </Dialog.Close>
              <Dialog.Title>Editar todo</Dialog.Title>
              <EditTodoForm
                taskId={taskId}
                onCloseDialog={() => setIsDialogOpen(false)}
              />
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>

        <button
          onClick={onRemoveTask}
          className="flex items-center justify-center w-[1.5rem] h-[1.5rem]"
        >
          <HiOutlineTrash color="#fa0404" />
        </button>
      </div>
    </div>
  )
}
