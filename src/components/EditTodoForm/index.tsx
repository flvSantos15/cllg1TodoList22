import { ChangeEvent, useState } from "react";

import { useTodo } from "../../hooks/useTodo";
import { Input } from "../Input";
import { TTodo } from "../../shared/models/todo";
import { useSelector } from "react-redux";

interface EditTodoFormProps {
  onCloseDialog: () => void;
}

export function EditTodoForm({ onCloseDialog }: EditTodoFormProps) {
  const selectedTodo = useSelector((store: TTodo) => store);

  const { updateTodo, todos } = useTodo();

  const [todoValue, setTodoValue] = useState("");

  const handleUpdateTodo = (event: ChangeEvent<HTMLInputElement>) => {
    event.target.setCustomValidity("");
    setTodoValue(event.target.value);
  };

  const handleAddTodo = () => {
    alert("Função ainda não implementada");
    // getTaskToEdit(taskId, taskValue, status)
    setTodoValue("");
    onCloseDialog();
  };

  const isNewTaskEmpty = todos ? false : true;

  return (
    <form className="flex flex-col items-center m-auto gap-4 w-full">
      <Input defaultValue={selectedTodo?.name} onChange={handleUpdateTodo} />

      <button
        type="submit"
        onClick={handleAddTodo}
        disabled={isNewTaskEmpty}
        data-cy="editSubmitButton"
        className="flex items-center justify-center w-full h-[3.25rem] p-4 gap-2 blue-dark rounded-lg transition delay-50 ease-in-out enabled:hover:bg-[#4ea8de] disabled:cursor-not-allowed"
      >
        Salvar
      </button>
    </form>
  );
}
