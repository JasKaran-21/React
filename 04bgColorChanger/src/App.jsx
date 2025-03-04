import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("#212121")

  return (
    <div className='w-full h-screen duration-200 bg-black m-0'
      style={{ backgroundColor: color }}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 '>
        <div className='flex flex-wrap justify-center gap-3 shadow-xl bg-white rounded-full px-3 py-2'>
          <button
            onClick={() => setColor("red")}
            className='outline-none px-4 py-1 shadow-xl rounded-full text-white '
            style={{ backgroundColor: "red" }}
          >Red</button>
          <button
            onClick={() => setColor("blue")}
            className='outline-none px-4 py-1 shadow-xl rounded-full text-white '
            style={{ backgroundColor: "blue" }}
          >Blue</button>
          <button
            onClick={() => setColor("green")}
            className='outline-none px-4 py-1 shadow-xl rounded-full text-white '
            style={{ backgroundColor: "green" }}
          >Green</button>
          <button
            onClick={() => setColor("purple")}
            className='outline-none px-4 py-1 shadow-xl rounded-full text-white '
            style={{ backgroundColor: "purple" }}
          >Purple</button>
          <button
            onClick={() => setColor("black")}
            className='outline-none px-4 py-1 shadow-xl rounded-full text-white '
            style={{ backgroundColor: "black" }}
          >Black</button>
          <button
            onClick={() => setColor("grey")}
            className='outline-none px-4 py-1 shadow-xl rounded-full text-white '
            style={{ backgroundColor: "grey" }}
          >Grey</button>
          <button
            onClick={() => setColor("yellow")}
            className='outline-none px-4 py-1 shadow-xl rounded-full '
            style={{ backgroundColor: "yellow" }}
          >Yellow</button>
        </div>
      </div>
    </div>
  )
}

export default App
