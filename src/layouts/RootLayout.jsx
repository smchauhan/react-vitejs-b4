import React, { useContext, useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom'
import { FormsData, InteractiveCompData, NonInteractiveCompData, SidebarLinksData, HooksData } from '../data/SidebarLinksData'
import { Accordion, Badge, Button, Col, Container, ListGroup, Row, Stack } from 'react-bootstrap'
import { ArrowRight, Moon, Sun } from 'react-bootstrap-icons'
import ScrollToTop from '../components/ScrollToTop'
import { getAllCategories } from '../api/Services'
import { UserContext, WishlistContext } from '../context/Context'
import { useSelector } from 'react-redux'

const RootLayout = () => {
    const navigate = useNavigate()
    const [darkMode, setDarkMode] = useState(false)

    // Context API
    //const { wishlistState } = useContext(WishlistContext)

    // Redux Store
    const { wishlistItems } = useSelector((state) => state.wishlist)
    const { totalQuantities } = useSelector((state) => state.cart)

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



    const [categories, setCategories] = useState()
    const [error, setError] = useState()
    const [loading, setLoading] = useState(false)
    const fetchCategories = async () => {
        try {
            const response = await getAllCategories()
            setCategories(response.data)
        } catch (error) {
            if (error.response.status === 404) {
                setError("Invalid URL or endpoint not found")
            } else {
                setError(error.message)
            }
        } finally {
            setTimeout(() => {
                setLoading(false)
            }, 1000)
        }
    }
    useEffect(() => {
        setLoading(true)
        fetchCategories();
    }, [])

    const { username, setUsername } = useContext(UserContext)
    return (
        <Container fluid >
            <Row md={4} className='pt-3'>
                <Col md={4}><h4>React Bootstrap</h4> </Col>
                <Col md={8} className='text-end'>
                    Welcome {username} {' '}
                    <NavLink to="/profile">Profile</NavLink>{' '}

                    <NavLink to="/cart" className="mx-2" >
                        Shopping Cart <Badge>{totalQuantities}</Badge>
                    </NavLink>

                    <NavLink to="/wishlist" className="mx-2" >
                        Wishlist <Badge>{wishlistItems?.length}</Badge>
                    </NavLink>

                    <Badge onClick={() => setDarkMode(!darkMode)} className='rounded-5 p-2' role='button'>
                        {darkMode ? <Moon /> : <Sun />}
                    </Badge>
                </Col>
            </Row>
            <Row>
                <div className='col-md-3 p-1  '>
                    <div className="card vh-100">
                        <div className="card-body">

                            <Accordion defaultActiveKey="5">
                                <Accordion.Item eventKey="5">
                                    <Accordion.Header>Categories</Accordion.Header>
                                    <Accordion.Body>
                                        {/* <pre> {JSON.stringify(categories, null, 2)} </pre> */}
                                        <ListGroup>
                                            {categories?.map((category) => {
                                                return (
                                                    <ListGroup.Item key={category.slug}>
                                                        <ArrowRight />{' '}
                                                        <NavLink to={"/products/" + category.slug} >{category.name}</NavLink>
                                                    </ListGroup.Item>
                                                )
                                            })}
                                        </ListGroup>
                                    </Accordion.Body>
                                </Accordion.Item>

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


                                            <ListGroup.Item >
                                                <ArrowRight />{' '}
                                                <NavLink to="/forms/rb-formcontrols" >Forms</NavLink>
                                            </ListGroup.Item>
                                            {/* {FormsData.map((menu) => {
                                                    return (
                                                        <ListGroup.Item key={menu.id}>
                                                            <ArrowRight />{' '}
                                                            <NavLink to={menu.link} >{menu.menuName}</NavLink>
                                                        </ListGroup.Item>
                                                    )
                                                })} */}
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
            <ScrollToTop />
        </Container>
    )
}

export default RootLayout