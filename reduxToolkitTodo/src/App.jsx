import { useState } from 'react'
import './App.css'
import Todo from './components/Todo'
import AddTodo from './components/AddTodo'

function App() {

  return (
    <>
      <h1 className='text-4xl'>Redux Toolkit</h1>
      <AddTodo />
      <Todo />
    </>
  )
}

export default App
