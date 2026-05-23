// Arrow Function
// Functional Components




// Method 1 : Passing properties with names without default values
// export const MyButton = ({ text, className }) => {
//     return (
//         <button className={`btn btn-${className} me-2`}>
//             {text}
//         </button>
//     )
// }

// Method 2 : Passing properties with names with default values 
// export const MyButton = ({ text = "Submit", className = "primary" }) => {
//     return (
//         <button className={`btn btn-${className} me-2`}>
//             {text}
//         </button>
//     )
// }


// Method 3 : Passing properties using props without default values 
// export const MyButton = (props) => {
//     console.log(JSON.stringify(props))
//     return (
//         <button className={`btn btn-${props.className} me-2`}>
//             {props.text}
//         </button>
//     )
// }

// Method 4 : Passing properties using destructuring props without default values 
// export const MyButton = (props) => {
//     const { text, className } = props
//     return (
//         <button className={`btn btn-${className} me-2`}>
//             {text}
//         </button>
//     )
// }


// Method 5 : Passing properties using destructuring props with default values 
// export const MyButton = (props) => {
//     const { text = "My Button", className = "secondary" } = props
//     return (
//         <button className={`btn btn-${className} me-2`}  >
//             {text}
//         </button>
//     )
// }


// Method 6 : Passing properties using props and applying spread operator (...)
export const MyButton = (props) => {
    return (
        <div>
            <input {...props} />
        </div>
    )
}












export const YourButton = () => {
    return (
        <button className="btn btn-info">Your Submit Button - Named Export</button>
    )
}

export const TestButton = () => {
    return (
        <button className="btn btn-info">Test Button - Named Export</button>
    )
}
export default MyButton


// export function MyButton() {
//     return (<button>My Submit Button - Default Export </button>)
// }

// export function YourButton() {
//     return (<button>Your Submit Button - Named Export </button>)
// }

// export default MyButton


