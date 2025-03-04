import { createContext, ReactNode, useEffect, useState } from "react";
import {
  createTodoFirebaseService,
  deleteTodoFirebaseService,
  getTodosFirebaseService,
  toggleTodoFirebaseService,
  updateTodoFirebaseService,
} from "../shared/services/firebase/todo";
import { TTodo } from "../shared/models/todo";

interface ITodoContextData {
  todos: TTodo[];
  saveTodo: (value: string) => void;
  removeTodo: (id: string) => void;
  updateTodo: (id: string, name: string) => void;
  toggleTodo: (id: string, isCompleted: boolean) => void;
}

interface ITodoProviderProps {
  children: ReactNode;
}

export const TodoContext = createContext({} as ITodoContextData);

export function TodoProvider({ children }: ITodoProviderProps) {
  const [todos, setTodos] = useState<TTodo[]>([]);

  const saveTodo = async (value: string) => {
    await createTodoFirebaseService({
      name: value,
      isCompleted: false,
    });
  };

  const removeTodo = async (id: string) => {
    // setTodo((state) => state.filter((item) => item.id !== id))
    await deleteTodoFirebaseService(id);
  };

  const toggleTodo = async (id: string, isCompleted: boolean) => {
    await toggleTodoFirebaseService({
      id,
      isCompleted,
    });
  };

  const updateTodo = async (id: string, name: string) => {
    await updateTodoFirebaseService({
      id,
      name,
    });
  };

  const getTodosData = async () => {
    try {
      const response = await getTodosFirebaseService();

      setTodos(response);
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    getTodosData();
  }, []);

  return (
    <TodoContext.Provider
      value={{ todos, saveTodo, removeTodo, updateTodo, toggleTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
}
