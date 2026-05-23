import React, { useState } from 'react'
import { NavDropdown } from 'react-bootstrap'

const NavDropdownOnHover = ({ title = "Dropdown" }) => {
    const [show, setShow] = useState(false)
    return (
        <NavDropdown title={title} id="navbarScrollingDropdown"
            show={show}
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)} >
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">
                Another action
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
                Something else here
            </NavDropdown.Item>
        </NavDropdown>
    )
}

export default NavDropdownOnHover