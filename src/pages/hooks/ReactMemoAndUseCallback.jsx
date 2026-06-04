import React, { useState } from 'react'


// React.memo and useCallback hooks both are not working with this current setup 
// We have just tested it online https://onecompiler.com/react


// Child Component
const InrementUsingChildComponent = React.memo(({ increment }) => {
    console.log("Child component rendered...." + Math.random())
    return <button onClick={increment}>Increment Count</button>
})


// Parent Component 
const ReactMemoAndUseCallback = () => {
    const [count, setCount] = useState(0)
    const increment = useCallback(() => {
        console.log("Increment function executed..." + Math.random())
        setCount((prev) => prev + 1)
    }, [])

    const increment3 = () => {
        console.log("Increment function executed..." + Math.random())
        setCount((prev) => prev + 1)
    }
    return (
        <div>
            Count = {count}<br />
            <InrementUsingChildComponent increment={increment} />
        </div>
    )
}

export default ReactMemoAndUseCallback
