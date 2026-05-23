import Address from "./Address"
import "../src/index.css"
import { Fragment } from "react"

function App() {
  const a = 100
  const b = 30

  // Normal Function
  const Sum = (x, y) => {
    return x + y
  }

  // Event Function
  const handleButtonClick = () => {
    alert("Sum of a and b = " + (a + b))
  }

  const names = [
    { id: 1, name: "Rakesh" },
    { id: 2, name: "Vimal" },
    { id: 3, name: "Rohit" },
  ]

  return (
    <Fragment>
      <h2>Variables</h2>
      Value of variable a = {a} <br />
      Value of variable b = {b} <br />
      <hr />
      <h2>Function calls Sum = {Sum(20, 30)}</h2>
      <button onClick={() => handleButtonClick()} >Click Me</button>
      <button onClick={handleButtonClick} >Click Me</button>
      <hr />
      <h2>Sum of a+b = {a * b}</h2>
      <hr />
      <h2>Ternary operators</h2>
      {a > b ? "a is Big" : "b is Big"}

      <hr />
      <h2>Object or array methods</h2>
      <ul>
        {names.map((item) => {
          return (
            <Fragment key={item.id}>
              <li >
                {item.name}
              </li>
              <li>
                <hr />
              </li>
            </Fragment>
          )
        })}
      </ul>

      <h1 className="my-heading" >This is heading 1</h1>
      <img src="https://static.vecteezy.com/system/resources/thumbnails/048/216/761/small/modern-male-avatar-with-black-hair-and-hoodie-illustration-free-png.png"
        alt="this is avatar image"
        width="100" />
      <div>We are learning JSX Rules</div>
      <label htmlFor="mytextbox">Name</label>
      <input type="text" id="mytextbox" />
      <br />
      <Address></Address>
      <hr></hr>

      <svg xmlns=
        "http://www.w3.org/2000/svg" width=
        "24" height=
        "24"
        viewBox=
        "0 0 24 24" fill=
        "none" stroke=
        "currentColor" strokeWidth=
        "1.25" strokeLinecap=
        "round"
        strokeLinejoin=
        "round" className=
        "icon">
        <path stroke=
          "none" d=
          "M0 0h24v24H0z" fill=
          "none" /><path d=
            "M4 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
        <path d=
          "M12.5 17h-6.5v-14h-2" /><path d=
            "M6 5l14 1l-1 7h-13" />
        <path d=
          "M16 22l5 -5" /><path d=
            "M21 21.5v-4.5h-4.5" />
      </svg>
      <p>This is para in JSX - App Component</p>
    </Fragment>
  )
}
export default App
