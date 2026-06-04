import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'

const UseEffectHook = () => {
    console.log("Component is mounted/ render/ executed / run" + Math.random())
    const [count, setCount] = useState(0)
    const [otherCounter, setOtherCounter] = useState(0)
    const [innerWidth, setInnerWidth] = useState(window.innerWidth)
    const [products, setProducts] = useState([])
    // No dependancy array
    // It will execute infinite loop based on setCount
    // useEffect(() => {
    //     const timerID = setTimeout(() => {
    //         setCount((prev) => prev + 1)
    //     }, 1000)
    //     return () => {
    //         console.log("Component is Unmounted")
    //         clearTimeout(timerID)
    //     }
    // })

    // Empty dependancy array
    // It will execute only once
    // useEffect(() => {
    //     console.log("useEffect hook call")
    //     setCount((prev) => prev + 1)
    // }, [])


    // With dependancy array
    // It will execute only once
    useEffect(() => {
        console.log("useEffect hook call" + count)
    }, [count])

    const handleResizeWindow = () => setInnerWidth(window.innerWidth)
    useEffect(() => {
        console.log("useEffect hook with resize Event executed....")
        window.addEventListener("resize", handleResizeWindow)
        return () => {
            console.log("useEffect hook return()")
            window.removeEventListener("resize", handleResizeWindow)
        }
    }, [])

    // Fetch API
    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => setProducts(data.products));
    }, [])

    return (
        <div>
            <h4>useEffect() Hook</h4>
            <hr />

            <h3>List of products from dummyjson</h3>
            {/* {JSON.stringify(products, null, 2)} */}
            {products?.map((product, index) => {
                return (<div key={index}>{product?.id} - {product?.title}</div>)
            })}
            <hr />
            Inner width of active window {innerWidth}
            <br />

            Value of count : {count}
            <br />
            <Button onClick={() => setCount((prev) => prev + 1)}>Increase Count</Button>

            <hr />

            Value of other counter : {otherCounter}
            <br />
            <Button onClick={() => setOtherCounter((prev) => prev + 1)}>Increase Other Count</Button>


        </div>
    )
}

export default UseEffectHook