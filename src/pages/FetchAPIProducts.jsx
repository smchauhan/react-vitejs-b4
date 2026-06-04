import React, { Fragment, useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row, Spinner } from 'react-bootstrap'

const Products = () => {
    const [products, setProducts] = useState()
    const [error, setError] = useState()
    const [loading, setLoading] = useState(false)

    const getProducts = async () => {
        try {
            const response = await fetch('https://dummyjson.com/products')
            if (!response.ok) {
                throw new Error("Server or Network error")
            }
            const data = await response.json()
            setProducts(data.products)
        } catch (error) {
            setError(error)
        } finally {
            setTimeout(() => {
                setLoading(false)
            }, 1000)
        }
    }

    useEffect(() => {
        setLoading(true)
        getProducts();

        // fetch('https://dummyjson.com/products')
        //     .then(res => res.json())
        //     .then(data => setProducts(data.products))
        //     .catch(error => setError(error))
        //     .finally(
        //         setTimeout(() => {
        //             setLoading(false)
        //         }, 1000)
        //     );
    }, [])
    return (
        <div><h3>Products</h3><br />

            <Container>
                <Row>
                    {loading ?
                        <Col><Spinner size='sm' /> Products are loading...</Col>
                        :
                        <Fragment>
                            {error ? <Col>{error.message}</Col>
                                :
                                <Fragment>
                                    {products?.map((product) => {
                                        return (
                                            <Col md={4} key={product.id} className='mb-3'>
                                                <Card >
                                                    <Card.Img src={product.thumbnail} />
                                                    <Card.Body>
                                                        {product.title}
                                                    </Card.Body>
                                                    <Card.Footer className='d-flex justify-content-between'>
                                                        <Button size='sm' variant='outline-success'>Add To Cart</Button>
                                                        <Button size='sm' variant='outline-primary'>Add To Wishlist</Button>
                                                    </Card.Footer>
                                                </Card>
                                            </Col>
                                        )
                                    })}
                                </Fragment>
                            }
                        </Fragment>

                    }
                </Row>
            </Container>
            {/* <pre> {JSON.stringify(products, null, 2)} </pre> */}
        </div>
    )
}

export default Products