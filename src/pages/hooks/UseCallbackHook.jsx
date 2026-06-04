import React, { useCallback, useEffect, useState } from 'react'

// useCallback hook is not working with this current setup 
// We have just tested it online https://onecompiler.com/react

const UseCallbackHook = () => {
    const [username, setUsername] = useState("")
    const [isValid, setIsValid] = useState(false)
    const [count, setCount] = useState(0)

    const validateUser = useCallback(() => {
        console.log("User validation rendered...." + Math.random())
        setIsValid(username.length >= 5 ? true : false)
    }, [username])

    useEffect(() => { validateUser(); }, [validateUser]);

    return (
        <div>
            <input type="text" onChange={(e) => setUsername(e.target.value)} defaultValue={username} />
            <div>{isValid ? "Valid Username" : "Invalid User"}</div>

            <hr />
            Counter = {count}<br />
            <button onClick={() => setCount((prev) => prev + 1)}>Increase Count</button>

        </div>
    )
}

export default UseCallbackHook
