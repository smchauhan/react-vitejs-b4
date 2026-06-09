import { useState } from "react"
import { UserContext } from "../Context"

const UserProvider = ({ children }) => {
    const [username, setUsername] = useState("Amit")
    return (
        <UserContext.Provider value={{ username, setUsername }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider