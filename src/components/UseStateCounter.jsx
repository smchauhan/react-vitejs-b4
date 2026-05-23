import { Fragment, useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
const UseStateCounter = () => {
    const [count, setCount] = useState(0)
    const handleDecrement = () => {
        if (count === 0) {
            // alert("You can not decrese counter below zero(0)")
            toast.success("You can not decrese counter below zero(0)")
        } else {
            setCount((prev) => prev - 1)
        }
    }
    return (
        <Fragment>
            useState() Hooks
            <br />
            Current Count value = {count}<br />
            <button onClick={() => setCount((prev) => prev + 1)} >Increment</button>
            <button onClick={handleDecrement} >Decrement</button>
            <ToastContainer />
        </Fragment>
    )
}
export default UseStateCounter