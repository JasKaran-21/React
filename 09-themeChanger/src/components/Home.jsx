import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/Theme'

export const Home = () => {
    const {theme, toggleTheme} = useContext(ThemeContext)

    return (
        <div style={{background: theme === "light" ? "black" : "white", color: theme === "light" ? "white" : "black", height: "50vh", width: "50vw", textAlign: "center", paddingTop: "50px"}}>
            <h2>Current Theme: {theme}</h2>
            <button onClick={toggleTheme}>Switch Theme</button>
        </div>
    )
}

