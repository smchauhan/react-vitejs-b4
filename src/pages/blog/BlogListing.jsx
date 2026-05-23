import React from 'react'
import { Card, CardBody, Col, Container, Row } from 'react-bootstrap'
import { BlogData } from '../../data/BlogData'
import { NavLink } from 'react-router-dom'

const BlogListing = () => {
    return (
        <div>
            <h4>Blog</h4>
            <hr />
            <Container>
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
