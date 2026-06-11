import { createSlice } from "@reduxjs/toolkit";
export const wishlistSlice = createSlice({
    name: "wishlist",
    initialState: {
        userId: 1,
        wishlistItems: [
            {
                id: 1,
                title: 'Essence Mascara Lash Princess',
                thumbnail: "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp",
                stock: 11,
                price: 19
            },
            {
                id: 2,
                title: 'Eyeshadow Palette with Mirror',
                thumbnail: "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp",
                stock: 11,
                price: 19
            }
        ]
    },
    reducers: {
        // Here you can define list of all required actions
        // ADD_TO_WISHLIST
        addToWishlist: (state, action) => {
            // console.log("State : " + JSON.stringify(state))
            // console.log("action : " + JSON.stringify(action))
            const { payload } = action
            const newItem = {
                id: payload.id,
                title: payload.title,
                thumbnail: payload.thumbnail,
                stock: payload.stock,
                price: payload.price
            }
            state.wishlistItems = [...state.wishlistItems, newItem]
        },
        // REMOVE_FROM_WISHLIST
        removeFromWishlist: (state, action) => {
            // console.log("State : " + JSON.stringify(state))
            //  console.log("action : " + JSON.stringify(action))
            state.wishlistItems = state.wishlistItems.filter((item) => item.id !== action.payload)
        },
    }
})
export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions
export default wishlistSlice.reducer
