import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { Provider } from "react-redux"

import { TaskProvider } from "./context/task.context"
import store from "./redux/store"

import "./styles/global.css"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <TaskProvider>
        <App />
      </TaskProvider>
    </Provider>
  </React.StrictMode>
)
