import React, { useContext } from 'react'
import { Button, Image, Table } from 'react-bootstrap'
import { Trash } from 'react-bootstrap-icons'
import { WishlistContext } from '../context/Context'

const Wishlist = () => {
    const { wishlistState, wishlistDispatch } = useContext(WishlistContext)
    return (
        <div>
            <h3>Wishlist</h3>
            <hr />
            {/* <pre>{JSON.stringify(wishlistState, null, 2)}</pre> */}
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
                    {wishlistState.wishlistItems.map((item) => {
                        return (
                            <tr key={item.id}>
                                <td><Image src={item.thumbnail} width="100" /></td>
                                <td>{item.title}</td>
                                <td>{item.price}</td>
                                <td>{item.stock > 0 ? "In Stock" : "Out of Stock"}</td>
                                <td>
                                    <Button size='sm' variant='outline-danger'
                                        onClick={() => wishlistDispatch(
                                            {
                                                type: "REMOVE_FROM_WISHLIST",
                                                payload: item.id
                                            })}
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

export default Wishlist