import { useState } from "react";
import { createContext, useContext } from "react";

const CounterContext = createContext({})

export const CounterProvider = ({children}) => {
    const [count, setCount] = useState(0)

    const increase = () => setCount((prev) => prev + 1);
    const decrease = () => setCount((prev) => prev - 1);

    return (
        <CounterContext.Provider value={{count, increase, decrease}}>
            {children}
        </CounterContext.Provider>
    )
}

export const useCounter = () => useContext(CounterContext)