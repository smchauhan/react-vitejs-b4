import { forwardRef, useRef } from 'react'
import { useState } from 'react'
import { Button, Card } from 'react-bootstrap'



const MyInputControl2 = forwardRef((props, ref) => {
    return <input ref={ref} {...props} />
})

// Child Component
const MyInputControl = ({ ref }) => {
    return <input ref={ref} />
}

// Child Component PlayerControls
// const PlayerControls = ({ ref }) => {
//     return (
//         <div>
//             <Button onClick={() => ref.current.play()} >Play</Button>{' '}
//             <Button onClick={() => ref.current.pause()}>Pause</Button>
//         </div>
//     )
// }

const PlayerControls = forwardRef((props, ref) => {
    return (
        <div>
            <Button onClick={() => ref.current.play()} >Play</Button>{' '}
            <Button onClick={() => ref.current.pause()}>Pause</Button>
        </div>
    )
})

// This is Parent Component 
const UseRefHook = () => {
    // const handleChangeColor = () => {
    //     const ref = document.getElementById("refID")
    //     ref.style.color = "red"
    //     ref.innerHTML = "Red"
    // }
    const refID = useRef()
    const handleChangeColor = () => {
        refID.current.style.color = "red"
        refID.current.innerHTML = "Red"
    }

    const ctrlRef = useRef()
    const handleButtonClick = () => {
        ctrlRef.current.focus();
        console.log(ctrlRef.current.value)
    }

    const videoRef = useRef()
    return (
        <div>
            <h4>useRef() Hook</h4>

            <Card>
                <video src="https://videos.pexels.com/video-files/9714260/9714260-uhd_2560_1440_30fps.mp4"
                    loop muted
                    ref={videoRef} />
                <Card.Body> <PlayerControls ref={videoRef} /> </Card.Body>
            </Card>

            < hr />
            <MyInputControl ref={ctrlRef} placeholder="Enter anything..." />
            <Button onClick={handleButtonClick}>Focus on Textbox</Button>

            <hr />

            {/* Default color : <span id="refID">Black</span> */}
            Default color: <span ref={refID}>Black</span>

            <br />
            <Button onClick={handleChangeColor} >Change color to Red</Button>

        </div >
    )
}

export default UseRefHook