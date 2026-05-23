import { Component } from "react"

export class MyClassComponent extends Component {
    componentDidMount() {
        console.log("Component is just created....")
    }
    componentWillUnmount() {
        console.log("Component is unmounted")
    }
    componentDidUpdate() {
        console.log("Component is just updated....")
    }
    render() {
        return (
            <div>This is an example of class component</div>
        )
    }
}