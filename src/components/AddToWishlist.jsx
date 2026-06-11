import { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { WishlistContext } from '../context/Context'
import { Check } from 'react-bootstrap-icons'
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { addToWishlist } from '../store/slices/wishlistSlice';

const AddToWishlist = ({ product }) => {
    // Context API 
    //const { wishlistState, wishlistDispatch } = useContext(WishlistContext)
    //const found = wishlistState.wishlistItems.some((item) => item.id === product.id)

    // Redux Store
    const { wishlistItems } = useSelector((state) => state.wishlist)
    const found = wishlistItems.some((item) => item.id === product.id)
    const dispatch = useDispatch()

    const handleAddToWishlist = () => {
        if (found) {
            toast.info("Item already added in the wishlist")
        } else {
            // Context API 
            //wishlistDispatch({ type: "ADD_TO_WISHLIST", payload: product })
            // Redux Store
            dispatch(addToWishlist(product))
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
