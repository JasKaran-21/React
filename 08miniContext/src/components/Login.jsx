import React, { useState, useContext } from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username, setusername] = useState("")
    const [password, setPassword] = useState("")

    const { setUser } = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({ username, password })
    }

    return (
        <div style={{display: "flex", flexDirection: "column", gap: "15px"}}>
            <h2>Login</h2>
            <input
                type="text"
                value={username}
                onChange={(e) => setusername(e.target.value)}
                placeholder='User Name'
            />

            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Password'
            />

            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login
