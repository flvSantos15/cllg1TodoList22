import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { useTodo } from "../../hooks/useTodo";

import plusIcon from "/assets/plus.svg";
import { Input } from "../Input";
import { useDispatch } from "react-redux";

const todoSchema = z.object({
  task: z
    .string({
      message: "Tarefa é obrigatória",
      required_error: "Tarefa é obrigatória",
    })
    .min(1, { message: "Tarefa é obrigatória" }),
});

type TodoSchema = z.infer<typeof todoSchema>;

export function TodoForm() {
  const { saveTodo } = useTodo();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<TodoSchema>({
    resolver: zodResolver(todoSchema),
    // values: {
    //   name: managedRestaurant?.name ?? "",
    // },
  });

  const handleSaveTask = (data: TodoSchema) => {
    saveTodo(data.task);
  };

  return (
    <form
      onSubmit={handleSubmit(handleSaveTask)}
      className="flex flex-col xl:flex-row md:flex-row sm:flex-col items-center m-auto mt-[-28px] gap-2 w-[90%] xl:w-[55%] md:w-[75%] sm:w-[90%] xl:h-[3.375rem]"
    >
      <Input
        id="task"
        placeholder="Adicione um nova tarefa"
        {...register("task")}
      />
      {/* criar um componente de erro */}
      {/* {errors.task && <span>{errors.task.message}</span>} */}

      <button
        type="submit"
        data-cy="submitTask"
        disabled={isSubmitting}
        className="flex items-center justify-center w-full xl:w-[5.625rem] md:w-[20%] sm:w-full h-[3.25rem] p-4 gap-2 blue-dark rounded-lg transition delay-50 ease-in-out enabled:hover:bg-[#4ea8de] disabled:cursor-not-allowed"
      >
        Criar
        <img src={plusIcon} alt="plus symbol" />
      </button>
    </form>
  );
}
