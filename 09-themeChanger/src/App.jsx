import './App.css'
import { Home } from './components/Home'
import { ThemeProvider } from './contexts/Theme'

function App() {

  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  )
}

export default App
