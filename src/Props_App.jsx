//import "../src/index.css"
import { Fragment } from "react"
import { YourButton } from "./components/MyButton"
import MyButton from "./components/MyButton"
import { MyClassComponent } from "./components/MyClassComponent"
import DynamicProfileCard from "./components/DynamicProfileCard"
import { MyControl } from "./components/MyControl"


function App() {
  //.........
  const name = "Suresh Chauhan" // String
  const image = "https://www.svgrepo.com/show/420314/builder-helmet-worker.svg"
  const age = 35 // Number 
  const birthdate = new Date("10/2/2010") // Date
  const skills = ["java", "react", "css", "html"]; // Array
  // Array Object
  const experience = [
    { id: 1, jobTitle: "Jr. Developer" },
    { id: 2, jobTitle: "Sr. Developer" },
    { id: 3, jobTitle: "Team Leader" }
  ];
  const online = false // Boolean 

  const handleButtonClick = () => {
    alert("You clicked a button from child component")
  }


  const list = ["apple", "banana"]
  const newlist = [...list, "orange", ...list]
  //.........
  return (
    <Fragment>
      List : {list.join(", ")}
      <hr />
      New List : {newlist.join(", ")}
      {/* <DynamicProfileCard
        name={name}
        age={age}
        birthdate={birthdate}
        skills={skills}
        experience={experience}
        online={online}
        onclick={handleButtonClick}
        image={image}
      /> */}


      {/* <MyButton style={{ width: "500px" }} text="Submit" className="danger" />
      <MyButton title="This is title" text="Click Me" className="info" />
      <MyButton text="Save" className="primary" />
      <MyButton /> */}

      {/* <MyButton title="This is title" type="submit" value="Click Me" className="info" id="mybutton" />

      <MyButton title="This is title" value="Sumit" className="info" id="mybutton2" /> */}

      <MyControl
        label="Name :"
        id="name"
        placeholder="Enter your name"
        title="Name control"
        type="text"
      />

      {/* <YourButton />
      <MyClassComponent /> */}
    </Fragment>
  )
}
export default App


