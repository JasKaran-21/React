import { useState, useEffect } from "react";
import './App.css'

function Home() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState('');

  const handleChange = (e) => {
    setData(e.target.value)
  }

  useEffect(() => {
    setCount((count) => count + 1);
  }, [data]);

  return (
    <>
      <input onChange={handleChange} value={data} className="border"/>
      <p>{count}</p>
    </>
  );
}

export default Home;

