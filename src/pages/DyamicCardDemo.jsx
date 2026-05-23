import React from 'react'
import DynamicProfileCard from '../components/DynamicProfileCard'

const DyamicCardDemo = () => {

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
    return (
        <div>
            <DynamicProfileCard
                name={name}
                age={age}
                birthdate={birthdate}
                skills={skills}
                experience={experience}
                online={online}
                onclick={handleButtonClick}
                image={image}
            />
        </div>
    )
}

export default DyamicCardDemo
