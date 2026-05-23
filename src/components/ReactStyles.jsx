import React from 'react'
import "../index.css" // External CSS
//import "../assets/HeadingStyle.module.css" // Module based css
import MyStyle from "../assets/HeadingStyle.module.css" // Module based css

import styled from 'styled-components'

const ReactStyles = ({ online }) => {

    const headingStyle = {
        backgroundColor: "#398829",
        color: "#fff",
    }
    const onlineStyle = {
        backgroundColor: "#398829",
        color: "#fff",
    }
    const offlineStyle = {
        backgroundColor: "#a83a27",
        color: "#fff",
    }


    const MyButton = styled.button`
        background-color: #0d6efd;
        color: #fff;
        padding: 10px;
    `

    return (
        <div>

            Conditional CSS Rendering
            <h1 className={`text-white bg-${online ? "success" : "danger"}`} >Is user online ? {online ? "Yes" : "No"}</h1>

            {/*

            Component based css
            <MyButton>Component based CSS Heading 1</MyButton>

            {/* Module based css
            <h1 className={MyStyle.heading1} >Module CSS Example</h1>
            <h1 className={`${MyStyle.textColor} ${MyStyle.bgColor}`} >Module CSS Example</h1> */}

            {/* 

            <h1 style={online ? onlineStyle : offlineStyle}
                className='my-heading'>Is user online ? {online ? "Yes" : "No"}</h1>
            <h1 style={headingStyle}>Heading 1 Style in React</h1>
            <h2 style={headingStyle}>Heading 2 Style in React</h2>
            <h3 style={headingStyle}>Heading 3 Style in React</h3> 
            
            */}

        </div>
    )
}

export default ReactStyles