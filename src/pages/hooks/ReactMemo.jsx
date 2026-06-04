import React, { useState } from 'react'

// React.memo wrapper is not working with this current setup 
// We have just tested it online https://onecompiler.com/react

// Child Component
const ShowCounterValue = React.memo(({ count }) => {
    console.log("ShowCounterValue Component Rendered..." + Math.random())
    return <div>ShowCounterValue Component = {count}</div>
})

// Parent Component 
const ReactMemo = () => {
    const [count, setCount] = useState(0)
    const [otherCount, setOtherCount] = useState(0)
    return (
        <div>
            Count = {count}<br />
            <button onClick={() => setCount((prev) => prev + 1)}>Increment Count</button>
            <hr />

            Other Count = {otherCount}<br />
            <button onClick={() => setOtherCount((prev) => prev + 1)}>Increment Other Count</button>

            <hr />
            <ShowCounterValue count={count} />

        </div>
    )
}

export default ReactMemo
