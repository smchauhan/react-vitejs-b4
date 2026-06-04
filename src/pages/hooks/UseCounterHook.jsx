import React from 'react'
import useCounter from '../../hooks/useCounter'

const UseCounterHook = () => {
    const { count, increment, decrement } = useCounter(0)
    return (
        <div>
            Count = {count}<br />
            <button onClick={increment}>Increment Counter</button>
            <button onClick={decrement}>Increment Count</button>
        </div>
    )
}

export default UseCounterHook
