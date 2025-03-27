import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";

import { EditTodoForm } from "../EditTodoForm";

import { BsCheckCircleFill, BsCircle } from "react-icons/bs";
import { HiOutlineTrash } from "react-icons/hi";
import { MdClose, MdModeEditOutline } from "react-icons/md";
import { useDispatch } from "react-redux";
import { selectTodo } from "../../redux/todo-slice";
import { TTodo } from "../../shared/models/todo";
import { Alert } from "./Alert";

interface TodoItemProps {
  todo: TTodo;
  onToggleTodo: () => void;
  onRemoveTodo: () => void;
}

export function TodoItem({ todo, onToggleTodo, onRemoveTodo }: TodoItemProps) {
  const dispatch = useDispatch();

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isAlertModalOpen, setIsAlerModalOpen] = useState(false);

  const handleOpenDialog = () => {
    dispatch(selectTodo(todo));

    const isTodoCompleted = todo.isCompleted;

    return !isTodoCompleted ? setIsDialogOpen(true) : setIsAlerModalOpen(true);
  };

  return (
    <>
      <div
        data-cy="taskExists"
        className="flex justify-between items-center p-4 gap-3 w-full h-[4.5rem] bg-[#262626] border border-solid border-[#333333] shadow-[0px_2px_8px_rgba(0,0,0,0.06)] rounded-lg text-xl sm:text-base"
      >
        <div className="flex items-center gap-3">
          {/* TODO: Criar um componente de check e usar o clsx e o redux */}
          {todo.isCompleted ? (
            <>
              <BsCheckCircleFill
                color="#8284fa"
                // onClick={() => handleCheckTask(t.id)}
                onClick={onToggleTodo}
              />

              <p
                className="font-[Inter] font-normal text-sm text-[#808080] flex-1 w-full line-through cursor-pointer"
                data-cy="taskMarked"
                onClick={onToggleTodo}
              >
                {todo.name}
              </p>
            </>
          ) : (
            <>
              <BsCircle color="#4ea8de" onClick={onToggleTodo} />

              <p
                className="font-[Inter] font-normal text-sm text-[#f2f2f2] flex-1 w-full cursor-pointer"
                data-cy="taskNotMarked"
                onClick={onToggleTodo}
              >
                {todo.name}
              </p>
            </>
          )}
        </div>

        <div className="flex gap-1 p-0">
          <Dialog.Root open={isDialogOpen} onOpenChange={handleOpenDialog}>
            <Dialog.Trigger
              type="button"
              data-cy="editTaskButton"
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

                <Dialog.Title data-cy="editModal">Editar todo</Dialog.Title>

                {/* TODO: Aqui usar o redux pra informar o todo */}
                <EditTodoForm onCloseDialog={() => setIsDialogOpen(false)} />
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>

          <button
            onClick={onRemoveTodo}
            data-cy="removeTaskButton"
            className="flex items-center justify-center w-[1.5rem] h-[1.5rem]"
          >
            <HiOutlineTrash color="#fa0404" />
          </button>
        </div>
      </div>

      <Alert isOpen={isAlertModalOpen} onOpen={setIsAlerModalOpen} />
    </>
  );
}
