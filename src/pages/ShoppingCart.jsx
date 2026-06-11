import React, { useContext } from 'react'
import { Button, Image, Table } from 'react-bootstrap'
import { Trash } from 'react-bootstrap-icons'

// Context API
//import { WishlistContext } from '../context/Context'

// Redux Store imports
import { useDispatch, useSelector } from 'react-redux'
import { removeFromWishlist } from '../store/slices/wishlistSlice'

const ShoppingCart = () => {
    // Context API
    //const { wishlistState, wishlistDispatch } = useContext(WishlistContext)

    // Redux Store
    const { wishlistItems } = useSelector((state) => state.wishlist)
    const dispatch = useDispatch()
    return (
        <div>
            <h3>Shopping Cart</h3>
            <hr />
            {/* <pre>{JSON.stringify(wishlistItems, null, 2)}</pre> */}
            <Table >
                <thead>
                    <tr>
                        <th>Product Image</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>In Stock ?</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {wishlistItems?.map((item) => {
                        return (
                            <tr key={item.id}>
                                <td><Image src={item.thumbnail} width="100" /></td>
                                <td>{item.title}</td>
                                <td>{item.price}</td>
                                <td>{item.stock > 0 ? "In Stock" : "Out of Stock"}</td>
                                <td>
                                    <Button size='sm' variant='outline-danger'
                                        // onClick={() => wishlistDispatch(
                                        //     {
                                        //         type: "REMOVE_FROM_WISHLIST",
                                        //         payload: item.id
                                        //     })}
                                        onClick={() => dispatch(removeFromWishlist(item.id))}
                                    > <Trash /> Remove</Button>{' '}
                                    <Button size='sm' variant='outline-primary'>Move to Cart</Button>
                                </td>
                            </tr>

                        )
                    })}
                </tbody>
            </Table>

        </div>
    )
}

export default ShoppingCart