import { createSlice } from "@reduxjs/toolkit";
export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        userId: 1,
        cartItems: [
            {
                id: 1,
                title: 'Essence Mascara Lash Princess',
                thumbnail: "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp",
                sku: "FUR-ANN-ANN-011",
                price: 19,
                qty: 1,
                totalPrice: 19 * 1
            },
            {
                id: 2,
                title: 'Eyeshadow Palette with Mirror',
                thumbnail: "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp",
                sku: "FUR-ANN-ANN-012",
                price: 20,
                qty: 1,
                totalPrice: 20 * 1
            }
        ],
        totalQuantities: 0,
        cartTotal: 0,
        shippingCost: 100,
        tax: 18, // 18 percent
        appliedCouponCode: "",
        discountPercent: 0,
        discoutAmount: 0,
        orderTotal: 0,
        couponCodes: [
            { code: "DIS5", percent: 5 },
            { code: "DIS10", percent: 10 }
        ]
    },
    reducers: {
        addToCart: (state, action) => {
        },
        removeFromCart: (state, action) => {
        },
        updateCart: (state, action) => {
        },
    }
})
export const { addToCart, removeFromCart, updateCart } = cartSlice.actions
export default cartSlice.reducer
