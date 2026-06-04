import React, { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom'
import { FormsData, InteractiveCompData, NonInteractiveCompData, SidebarLinksData, HooksData } from '../data/SidebarLinksData'
import { Accordion, Badge, Button, Col, Container, ListGroup, Row, Stack } from 'react-bootstrap'
import { ArrowRight, Moon, Sun } from 'react-bootstrap-icons'
import ScrollToTop from '../components/ScrollToTop'

const RootLayout = () => {
    const navigate = useNavigate()
    const [darkMode, setDarkMode] = useState(false)

    useEffect(() => {
        const htmlElement = document.querySelector("html")
        htmlElement.setAttribute('data-bs-theme', darkMode ? "dark" : 'light')
    }, [darkMode])


    //  useEffect it will be executed on comp. load
    //  it will be executed everytime when give var./state is changed


    const handleLogout = () => {
        localStorage.setItem("login", false)
        navigate("/auth/signin")
    }
    return (
        <Container fluid >

            {/* <Container className='bg-info'>
                <Row>
                    <Col>
                        This is a Col created using React bootstrap comp.
                    </Col>
                </Row>
            </Container> */}


            {/* <div className="hstack gap-3">
                <div className="p-2">First item</div>
                <div className="p-2">Second item</div>
                <div className="p-2">Third item</div>
            </div>


            <Stack gap={1} direction='horizontal'  >
                <Button className="p-2">First item</Button>
                <Badge className="p-2">Second item</Badge>
                <Button className="p-2">Third item</Button>
            </Stack> */}


            <Container>
                <Row md={4} className='pt-3'>
                    <Col md={4}><h4>React Bootstrap</h4> </Col>
                    <Col md={8} className='text-end'>
                        <Badge onClick={() => setDarkMode(!darkMode)} className='rounded-5 p-2' role='button'>
                            {darkMode ? <Moon /> : <Sun />}
                        </Badge>
                    </Col>
                </Row>
                <Row>
                    <div className='col-md-3 p-1  '>
                        <div className="card vh-100">
                            <div className="card-body">

                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Assignments</Accordion.Header>
                                        <Accordion.Body>
                                            <ListGroup>
                                                {SidebarLinksData.map((menu) => {
                                                    return (
                                                        <ListGroup.Item key={menu.id}>
                                                            <ArrowRight />{' '}
                                                            <NavLink to={menu.link} >{menu.menuName}</NavLink>
                                                        </ListGroup.Item>
                                                    )
                                                })}
                                            </ListGroup>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>RB Component Type 1</Accordion.Header>
                                        <Accordion.Body>
                                            <ListGroup>
                                                {NonInteractiveCompData.map((menu) => {
                                                    return (
                                                        <ListGroup.Item key={menu.id}>
                                                            <ArrowRight />{' '}
                                                            <NavLink to={menu.link} >{menu.menuName}</NavLink>
                                                        </ListGroup.Item>
                                                    )
                                                })}
                                            </ListGroup>

                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>Interactive Components</Accordion.Header>
                                        <Accordion.Body>
                                            <ListGroup>
                                                {InteractiveCompData.map((menu) => {
                                                    return (
                                                        <ListGroup.Item key={menu.id}>
                                                            <ArrowRight />{' '}
                                                            <NavLink to={menu.link} >{menu.menuName}</NavLink>
                                                        </ListGroup.Item>
                                                    )
                                                })}
                                            </ListGroup>
                                        </Accordion.Body>
                                    </Accordion.Item>


                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header>Forms</Accordion.Header>
                                        <Accordion.Body>
                                            <ListGroup>
                                                {FormsData.map((menu) => {
                                                    return (
                                                        <ListGroup.Item key={menu.id}>
                                                            <ArrowRight />{' '}
                                                            <NavLink to={menu.link} >{menu.menuName}</NavLink>
                                                        </ListGroup.Item>
                                                    )
                                                })}
                                            </ListGroup>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey="4">
                                        <Accordion.Header>Hooks</Accordion.Header>
                                        <Accordion.Body>
                                            <ListGroup>
                                                {HooksData.map((menu) => {
                                                    return (
                                                        <ListGroup.Item key={menu.id}>
                                                            <ArrowRight />{' '}
                                                            <NavLink to={menu.link} >{menu.menuName}</NavLink>
                                                        </ListGroup.Item>
                                                    )
                                                })}
                                            </ListGroup>
                                        </Accordion.Body>
                                    </Accordion.Item>



                                </Accordion>




                                <hr />
                                <Button onClick={handleLogout} variant='link' >Logout</Button><br />
                            </div>
                        </div>
                    </div>
                    <div className='col-md-9 p-1'>
                        <div className="card">
                            <div className="card-body">
                                <Outlet />
                            </div>

                        </div>
                    </div>
                </Row>
            </Container>
            <ScrollToTop />
        </Container>
    )
}

export default RootLayout