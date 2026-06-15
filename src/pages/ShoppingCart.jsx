import React, { useContext, useState } from 'react'
import { Button, Card, Col, Form, Image, InputGroup, Row, Table } from 'react-bootstrap'
import { Trash } from 'react-bootstrap-icons'

// Redux Store imports
import { useDispatch, useSelector } from 'react-redux'
import { applyCouponCode, removeFromCart } from '../store/slices/cartSlice'
import AddToCart from '../components/AddToCart'
import { convertToCurrency } from '../utils/utils'
import { toast, ToastContainer } from 'react-toastify'

const ShoppingCart = () => {
    // Redux Store
    const cart = useSelector((state) => state.cart)
    const dispatch = useDispatch()
    const [coupon, setCoupon] = useState('')
    const handleCouponCode = () => {
        const couponInfo = cart.couponCodes.find((item) => item.code === coupon)
        if (couponInfo) {
            toast.success("Coupon code has been applied!!!")
            dispatch(applyCouponCode(coupon))
        } else {
            toast.error("Invalid coupon code")
        }
    }
    return (
        <div>
            <h3>Shopping Cart</h3>
            <hr />
            {/* <pre>{JSON.stringify(wishlistItems, null, 2)}</pre> */}

            <Row>
                <Col md={9}>

                    <Table >
                        <thead>
                            <tr>
                                <th>Product Image</th>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart?.cartItems?.map((item) => {
                                return (
                                    <tr key={item.id}>
                                        <td><Image src={item.thumbnail} width="100" /></td>
                                        <td>{item.title}</td>
                                        <td>{convertToCurrency(item.price)}</td>
                                        <td><AddToCart product={item} /></td>
                                        <td>{convertToCurrency(item.totalPrice)}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>
                </Col>
                <Col md={3}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Order Summary</Card.Title>
                            <div>
                                Subtotal : {convertToCurrency(cart?.cartTotal)}
                            </div>
                            <div>
                                Shipping : {convertToCurrency(cart?.shippingCost)}
                            </div>
                            <div>
                                Tax ({cart?.tax}%) : {convertToCurrency(cart?.taxAmout)}
                            </div>

                            <div>
                                Discount<br />
                                ({cart?.discountPercent}%) : {convertToCurrency(cart?.discountAmount)}
                            </div>
                            <hr />
                            <div>
                                Order Total : {convertToCurrency(cart?.orderTotal)}
                            </div>
                        </Card.Body>


                    </Card>


                    <hr />

                    <InputGroup className="mb-3">
                        <Form.Control
                            placeholder="Coupon code"
                            aria-label="Coupon code"
                            aria-describedby="basic-addon2"
                            onChange={(e) => setCoupon(e.target.value)}
                        />
                        <Button variant="outline-secondary" id="button-addon2" onClick={handleCouponCode}>
                            Apply
                        </Button>
                    </InputGroup>

                </Col>
            </Row>

            <ToastContainer />


        </div>
    )
}

export default ShoppingCart