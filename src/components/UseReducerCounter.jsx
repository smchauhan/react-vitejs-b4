import { Fragment, useReducer } from "react"
const UseReducerCounter = () => {
    const reducer = (state, action) => {
        const { type } = action
        switch (type) {
            case "INCREMENT":
                return state + 1
            case "DECREMENT":
                return state - 1
            default:
                return state
        }
    }
    // const [ variable, dispatch function] = useReducer(reducer function, initial value)
    const initialState = 10
    const [count, dispatch] = useReducer(reducer, initialState, function () {
        return initialState + 10
    })
    return (
        <Fragment>
            useReducer() Hooks
            <br />
            Current Count value = {count}<br />
            <button onClick={() => dispatch({ type: "INCREMENT" })}  >Increment</button>
            <button onClick={() => dispatch({ type: "DECREMENT" })} >Decrement</button>
        </Fragment>
    )
}
export default UseReducerCounter