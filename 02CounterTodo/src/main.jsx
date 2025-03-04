import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Garage from './Cars.jsx'
import TodoList from './Todo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Garage/> */}
    {/* <TodoList/> */}
  </StrictMode>,
)
