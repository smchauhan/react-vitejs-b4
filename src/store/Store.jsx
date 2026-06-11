import { configureStore } from "@reduxjs/toolkit";
import { wishlistSlice } from "./slices/wishlistSlice";
import { cartSlice } from "./slices/cartSlice";
export const store = configureStore(
    {
        // List of all reducers from various slices (reducer and action)
        reducer: {
            wishlist: wishlistSlice.reducer,
            cart: cartSlice.reducer
        }
    }
)