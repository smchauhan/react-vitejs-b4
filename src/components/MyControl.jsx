// Arrow Function
// Functional Components

// Method 7 : Passing properties using spread operator (...) with property parameters
export const MyControl = ({ label, id, ...rest }) => {
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input id={id} {...rest} />
        </div>
    )
}