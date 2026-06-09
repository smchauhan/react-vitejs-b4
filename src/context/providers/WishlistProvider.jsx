import { useReducer } from "react"
import { WishlistContext } from "../Context"

const WishlistProvider = ({ children }) => {
    const initialState = {
        userId: 1,
        wishlistItems: []
    }
    const wishlistReducer = (state, action) => {
        // console.log("state " + JSON.stringify(state))
        //  console.log("action " + JSON.stringify(action))
        const { type, payload } = action
        switch (type) {
            case "ADD_TO_WISHLIST":
                console.log("ADD_TO_WISHLIST action executed..." + payload.id)
                return {
                    ...state,
                    wishlistItems: [
                        ...state.wishlistItems,
                        {
                            id: payload.id,
                            title: payload.title,
                            thumbnail: payload.thumbnail,
                            stock: payload.stock,
                            price: payload.price
                        }
                    ]
                }
            case "REMOVE_FROM_WISHLIST":
                return {
                    ...state,
                    wishlistItems: state.wishlistItems.filter((item) => item.id != payload)
                };
            default:
                return state;
        }
    }
    const [wishlistState, wishlistDispatch] = useReducer(wishlistReducer, initialState)
    return (
        <WishlistContext.Provider value={{ wishlistState, wishlistDispatch }}>
            {children}
        </WishlistContext.Provider>
    )
}

export default WishlistProvider