import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row, Spinner } from 'react-bootstrap'
import { api, getAllProducts, getProductsByCategory } from '../api/Services'
import { useLocation, useParams } from 'react-router-dom'
import AddToWishlist from '../components/AddToWishlist'
import { ToastContainer } from 'react-toastify';
import AddToCart from '../components/AddToCart'
import { useSelector } from 'react-redux'

const Products = () => {
    const param = useParams()
    const location = useLocation()
    const [products, setProducts] = useState()
    const [error, setError] = useState()
    const [loading, setLoading] = useState(false)

    const getProducts = async () => {
        try {
            //const response = await getAllProducts()
            const response = await getProductsByCategory(param.category)
            setProducts(response.data.products)
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
        getProducts();
        // axios.get('https://dummyjson.com/products')
        //     .then(response => setProducts(response.data.products))
        //     .catch(error => setError(error))
        //     .finally(
        //         setTimeout(() => {
        //             setLoading(false)
        //         }, 1000)
        //     );
    }, [location.pathname])
    const cart = useSelector((state) => state.cart)
    return (
        <div><h3>Products</h3><br />
            {/* <pre> {JSON.stringify(cart, null, 2)} </pre> */}
            <Container>
                <Row>
                    {loading ?
                        <Col><Spinner size='sm' /> Products are loading...</Col>
                        :
                        <Fragment>
                            {error ? <Col><pre>{JSON.stringify(error, null, 2)}</pre></Col>
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
                                                        <AddToCart product={product} />
                                                        <AddToWishlist product={product} />
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
            <ToastContainer />
        </div>
    )
}

export default Products