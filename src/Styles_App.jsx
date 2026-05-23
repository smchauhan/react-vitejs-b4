import { Fragment } from "react"
import UseStateCounter from "./components/UseStateCounter"
import UseReducerCounter from "./components/UseReducerCounter"
import ReactStyles from "./components/ReactStyles"
function App() {
  return (
    <Fragment>
      <ReactStyles online={true} />
      {/* <UseStateCounter />
      <hr />
      <UseReducerCounter /> */}
    </Fragment>
  )
}
export default App


