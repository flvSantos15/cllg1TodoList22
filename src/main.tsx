import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { TaskProvider } from './context/useTask'

import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <TaskProvider>
      <App />
    </TaskProvider>
  </React.StrictMode>
)
