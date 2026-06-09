import { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { WishlistContext } from '../context/Context'
import { Check } from 'react-bootstrap-icons'
import { toast } from 'react-toastify';

const AddToWishlist = ({ product }) => {
    const { wishlistState, wishlistDispatch } = useContext(WishlistContext)
    const found = wishlistState.wishlistItems.some((item) => item.id === product.id)

    const handleAddToWishlist = () => {
        if (found) {
            toast.info("Item already added in the wishlist")
        } else {
            wishlistDispatch({ type: "ADD_TO_WISHLIST", payload: product })
            toast.success("Item added in the wishlist")
        }
    }

    return (<Button size='sm' variant='outline-primary'
        onClick={handleAddToWishlist}>
        Add To Wishlist
        {found ? <Check size={20} /> : ""}
    </Button>
    )
}

export default AddToWishlist
