import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import FetchApi from './components/FetchApi.jsx'
import { CounterProvider } from './contexts/Counter.jsx'

createRoot(document.getElementById('root')).render(
  <CounterProvider>
    <App />
  </CounterProvider>
)
