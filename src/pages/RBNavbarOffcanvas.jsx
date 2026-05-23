import React, { useState } from 'react'
import { Button, Container, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap'
import NavDropdownOnHover from '../components/NavDropdownOnHover'

const RBNavbarOffcanvas = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div> <h4>RB Navbar & Offcanvas</h4>
            <hr />

            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#action2">Link</Nav.Link>

                            <NavDropdownOnHover title="About" />
                            <NavDropdownOnHover title="Services" />
                            <NavDropdownOnHover title="Products" />
                            <NavDropdownOnHover title="Portfolio" />

                        </Nav>
                        <div className="d-flex">
                            <Button onClick={handleShow} >Contact</Button>
                        </div>
                    </Navbar.Collapse>



                    <Offcanvas show={show} onHide={handleClose} placement="end" >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            Some text as placeholder. In real life you can have the elements you
                            have chosen. Like, text, images, lists, etc.
                        </Offcanvas.Body>
                    </Offcanvas>

                </Container>
            </Navbar>
        </div>
    )
}

export default RBNavbarOffcanvas