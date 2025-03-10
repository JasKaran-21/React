import React from 'react'
import { useCounter } from "../contexts/Counter";

function Counter() {
    const {count, increase, decrease} = useCounter()

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  )
}

export default Counter


