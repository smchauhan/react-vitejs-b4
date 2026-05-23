//import "../src/index.css"
import { Fragment } from "react"
import { YourButton } from "./components/MyButton"
import MyButton from "./components/MyButton"
import { MyClassComponent } from "./components/MyClassComponent"

function App() {

  return (
    <Fragment>
      <MyButton />
      <YourButton />
      <MyClassComponent />
    </Fragment>
  )
}
export default App
