import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"

import { Provider } from "react-redux"
import { TodoProvider } from "./context/todo.context"

import store from "./redux/store"

import "./styles/global.css"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <TodoProvider>
        <App />
      </TodoProvider>
    </Provider>
  </React.StrictMode>
)
