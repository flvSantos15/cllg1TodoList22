import { TodoForm } from "./components/TodoForm"
import { Header } from "./components/Header"
import { TodoList } from "./components/TodoList"

function App() {
  return (
    <div>
      <Header />

      <TodoForm />

      <TodoList />
    </div>
  )
}

export default App
