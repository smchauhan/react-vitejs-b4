import React, { useMemo, useState } from 'react'

// useMemo hook is not working with this current setup 
// We have just tested it online https://onecompiler.com/react

const UseMemoHook = () => {
    const [count, setCount] = useState(0)
    const [upto, setUpTo] = useState(10)
    const sumUpToX = (x) => {
        console.log("sumUpToX function rendered for value x = " + x)
        let sum = 0
        for (let i = 1; i <= x; i++) sum = sum + i;
        return sum;
    }
    // const sumUpTo10000 = sumUpToX(10000);
    const sumUpTo10000 = useMemo(() => {
        return sumUpToX(10000);
    }, []);
    const sumUpToXValue = useMemo(() => {
        return sumUpToX(upto)
    }, [upto])

    return (
        <div>

            sumUpTo10000 = {sumUpTo10000}

            <hr />

            sumUpTo {upto} Value = {sumUpToXValue}<br />
            <button onClick={() => setUpTo((prev) => prev + 1)}>Increment Upto X</button>
            <hr />

            Count = {count}<br />
            <button onClick={() => setCount((prev) => prev + 1)}>Increment Count</button>
        </div>
    )
}

export default UseMemoHook
