import { Header } from "../../components/Header";
import { TodoForm } from "../../components/TodoForm";
import { TodoList } from "../../components/TodoList";

export function Home() {
  return (
    <div>
      <Header />

      <TodoForm />

      <TodoList />
    </div>
  );
}
