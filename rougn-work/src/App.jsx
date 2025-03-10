import { useState, useEffect } from "react";
import './App.css'
import Counter from "./components/Counter";
import { CounterProvider } from "./contexts/Counter";

function App() {
  return (
    <div>
      <h1>Context API Counter</h1>
      <Counter />
    </div>
  );
}

export default App;

