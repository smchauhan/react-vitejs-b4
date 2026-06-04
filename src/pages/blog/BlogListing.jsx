import React, { useState } from 'react'
import { Button, Card, CardBody, Col, Container, Form, Row } from 'react-bootstrap'
import { BlogData } from '../../data/BlogData'
import { NavLink, useNavigate } from 'react-router-dom'

const BlogListing = () => {
    const navigate = useNavigate()
    const [keyword, setKeyword] = useState('react')
    const handleButtonClick = () => {
        navigate("/blog/1?keywrod=react#heading", { state: { blogID: 1, blogTitle: "His mother had always taught him", category: "General" } })
    }
    return (
        <div>
            <h4>Blog</h4>
            <hr />

            <Container>
                <Row>
                    <Col>

                        {keyword}
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label>Enter Search Keyword</Form.Label>
                            <Form.Control type="text" placeholder="Enter Search Keyword" defaultValue={keyword}
                                onChange={(e) => setKeyword(e.target.value)} />
                        </Form.Group>
                        <NavLink to={`/blog/1?keyword=${keyword}#heading`} className="btn btn-primary">Search</NavLink>
                        <hr />
                        <Button onClick={handleButtonClick} className="btn btn-primary">Open Article 1</Button>
                    </Col>
                </Row>
                <Row>
                    {BlogData.map((blog) => {
                        return (
                            <Col md={4} key={blog.id}>
                                <Card className='mb-3' >
                                    <Card.Img variant="top" src={blog.image} />
                                    <Card.Body>
                                        {blog.title}<br />
                                        <NavLink to={"/blog/" + blog.id} className='text-primary' >ReadMore</NavLink>
                                        {/* <NavLink to={`/blog/${blog.id}`} className='text-primary' >ReadMore</NavLink> */}
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })}
                </Row>
            </Container>

        </div>
    )
}

export default BlogListing
