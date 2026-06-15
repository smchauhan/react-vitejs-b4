import { Fragment, useContext, useEffect, useState } from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap'
import { WishlistContext } from '../context/Context'
import { Check } from 'react-bootstrap-icons'
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart, updateCart } from '../store/slices/cartSlice';

const AddToCart = ({ product }) => {

    // Redux Store
    const { cartItems } = useSelector((state) => state.cart)
    const found = cartItems.some((item) => item.id === product.id)
    const defaultQty = cartItems.filter((item) => item.id === product.id)[0]
    const [quantity, setQuantity] = useState(defaultQty?.qty || 1)
    const dispatch = useDispatch()
    const handleAddToCart = () => {
        dispatch(addToCart(product))
        toast.success("Item added in the cart")
    }
    const handleQuantityPlus = () => {
        setQuantity((prev) => prev + 1)
    }
    const handleQuantityMinus = () => {
        if (quantity > 1) {
            setQuantity((prev) => prev - 1)
        } else {
            dispatch(removeFromCart(product.id))
        }
    }
    useEffect(() => {
        if (found) {
            dispatch(updateCart({ id: product.id, quantity: quantity }))
        }
    }, [quantity])
    return (
        <Fragment>
            {
                found ?
                    <InputGroup style={{ width: "110px" }}>
                        <InputGroup.Text role='button' onClick={handleQuantityMinus}>-</InputGroup.Text>
                        <Form.Control value={quantity} onChange={() => console.log()} />
                        <InputGroup.Text role='button' onClick={handleQuantityPlus}>+</InputGroup.Text>
                    </InputGroup>
                    :
                    <Button size='sm' variant='outline-success' onClick={handleAddToCart}>Add To Cart</Button>
            }
        </Fragment>
    )
}

export default AddToCart
