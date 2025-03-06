import React, { useState } from 'react'
import UserContext from './UserContext'

const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    // 2. Provide the Context to Components 
    // Context.Provider : Wrap the application or specific components with the Provider and pass the shared state. 
    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;
