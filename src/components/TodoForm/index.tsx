import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { useTodo } from "../../hooks/useTodo";

import { Input } from "../Input";
import plusIcon from "/assets/plus.svg";

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

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<TodoSchema>({
    resolver: zodResolver(todoSchema),
    // values: {
    //   name: managedRestaurant?.name ?? "",
    // },
  });

  const handleSaveTask = (data: TodoSchema) => {
    saveTodo(data.task);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(handleSaveTask)}
      className="flex flex-col xl:flex-row md:flex-row sm:flex-col items-start m-auto mt-[-28px] gap-2 w-[90%] xl:w-[55%] md:w-[75%] sm:w-[90%] xl:h-[3.375rem]"
    >
      <div className="flex flex-col items-start w-full h-20">
        <Input
          id="task"
          placeholder="Adicione um nova tarefa"
          {...register("task")}
        />
        {errors.task && (
          <p>
            <span className="text-[#f75a68] text-sm">
              {errors.task.message}
            </span>
          </p>
        )}
      </div>

      <button
        type="submit"
        data-cy="submitTask"
        disabled={isSubmitting}
        className="flex items-center justify-center w-full xl:w-[5.625rem] md:w-[20%] sm:w-full h-[3.375rem] p-4 gap-2 blue-dark rounded-lg transition delay-50 ease-in-out enabled:hover:bg-[#4ea8de] disabled:cursor-not-allowed"
      >
        Criar
        <img src={plusIcon} alt="plus symbol" />
      </button>
    </form>
  );
}
