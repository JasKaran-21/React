import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// useState: Counter
function App() {

  const [counter, setCounter] = useState(15)   // [current value, function(setCounter)]

  const addValue = () => {
    // counter = counter + 1;
    if (counter < 20) {
      setCounter(counter + 1)

      setCounter(prevCounter => prevCounter + 1)  // receive prevCounter: last updated state of counter setState( ()=>{} )
      setCounter(prevCounter => prevCounter + 1)
      setCounter(prevCounter => prevCounter + 1)
      setCounter(prevCounter => prevCounter + 1)

      // Interview Question: What is the output of the following code?
      // setCounter(counter + 1)
      // Ans. increase value by 1, useState sends updates to UI also Variable in bunches, so it will increase by 1 only.
    
      // setCounter(counter + 1)
      // setCounter(counter + 1)
      // setCounter(counter + 1)
      // setCounter(counter + 1)
    } 
  }

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }

  return (
    <>
      <h1>React App</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
      <p>Footer: {counter}</p>
    </>
  )
}

export default App;
