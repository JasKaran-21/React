import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import ThemeButton from './components/ThemeButton'

function App() {
  const [count, setCount] = useState(0)

  const myObj = {
    name: 'Karan',
    age: 25,
  }

  const newArray = [1, 2, 3, 4, 5]

  // Dark Mode ToggleTheme
  const [theme, setTheme] = useState("light"); // default Theme is light

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }


  return (

    <div
      style={{
        background: theme === "dark" ? "#121212" : "#f5f5f5",
        color: theme === "dark" ? "#fff" : "#000",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}>

      <h1 className='bg-teal-400 text-black p-5 rounded-2xl mb-5'>Tailwind CSS</h1>

      {/* <Card username="Karan" btnText="Click me" /> */}
      {/* <Card username="JK" btnText="Visit me" /> */}
      {/* <Card username="John" /> */}
      <ThemeButton theme={theme} toggleTheme={toggleTheme} />

    </div>
  )
}

export default App
