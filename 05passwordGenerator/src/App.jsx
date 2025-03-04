import { useCallback, useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [copy, setCopy] = useState("Copy");

  // useCallback hook
  const passwordGenerator = useCallback(() => {   // callback hook memorize the function as much it can.
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%&*()_+-=[]{}|;:.<>?/~";

    for (let index = 1; index <= length; index++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char);
    }

    setPassword(pass);

  }, [length, numberAllowed, charAllowed, setPassword])  // Dependencies: [] ; when run methode then Optimized it, goal is place in cache memory, runs methode is not our goal. 

  // useRef hook
  const passwordRef = useRef(null);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();  // Select text of Password
    passwordRef.current?.setSelectionRange(0, 50);
    window.navigator.clipboard.writeText(password);  // Copy text in clipboard
    setCopy("Copied");
  }, [password])

  // useEffect hook
  useEffect(() => {     // When our page reload first time then call the passwordGenerator() and if any change in dependencies then reload again.
    passwordGenerator();
    setCopy("Copy");
  }, [length, numberAllowed, charAllowed, setPassword])   // run methodes when changes dependencies.

  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-4 my-8 bg-gray-800 text-orange-400'>
      <h1 className='text-white text-center mb-1 text-2xl'>Password Generator 🔒</h1>
      <div className='flex shadow rounded-lg overflow-hidden my-4'>
        <input
          type="text"
          value={password}
          className='outline-none w-full py-1 px-3 bg-white text-orange-400'
          placeholder='Password'
          readOnly
          ref={passwordRef}  // reference of input
        />
        <button
          onClick={copyPasswordToClipboard}
          className='text-white px-2 bg-orange-700 hover:bg-orange-400 duration-100'
        >{copy}</button>
      </div>

      <div className='flex text-sm gap-x-2 '>
        <div className='flex items-center gap-x-1'></div>
        <input
          type="range"
          min={6}
          max={50}
          value={length}
          className='cursor-pointer'
          onChange={(e) => { setLength(e.target.value) }}
        />
        <label>Length: {length}</label>

        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => {
              setNumberAllowed((prev) => !prev);  // change previous value: true > false > true
            }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>

        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            id="characterInput"
            onChange={() => {
              setCharAllowed((prev) => !prev);  // change previous value: true > false > true
            }}
          />
          <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
    </div>
  )
}

export default App


// *Why Use useCallback? ---------------------------------

// By default, functions in React are re-created on every render, which can cause unnecessary re-renders of child components.

// 🛑 Without useCallback → New function is created on every render.
// ✅ With useCallback → Function reference remains the same, preventing unnecessary renders.

// Returns a memoized version of the function.
// Recreates only when dependencies change.[]
// Prevents child components from re-rendering unnecessarily.

// *When to Use useCallback? ------------------------------
// ✅ Use when passing functions as props to child components.
// ✅ Use when a function is a dependency in useEffect.
// ✅ Use when dealing with event handlers in large apps.

// 🚫 Don’t use useCallback for every function → It adds overhead and should only be used for performance optimization.

