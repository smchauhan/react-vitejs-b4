import { createSlice } from "@reduxjs/toolkit";

const cartCalculation = (state) => {
    state.totalQuantities = state.cartItems.reduce((total, item) => total + item.qty, 0)
    state.cartTotal = state.cartItems.reduce((total, item) => total + item.totalPrice, 0)
    state.taxAmout = (state.cartTotal * state.tax) / 100;
    state.discountAmount = (state.cartTotal * state.discountPercent) / 100;
    state.orderTotal = state.cartTotal + state.shippingCost + state.taxAmout - state.discountAmount
}

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
        tax: 18, // 18 percent,
        taxAmout: 0,
        appliedCouponCode: "",
        discountPercent: 0,
        discountAmount: 0,
        orderTotal: 0,
        couponCodes: [
            { code: "DIS5", percent: 5 },
            { code: "DIS10", percent: 10 }
        ]
    },
    reducers: {
        addToCart: (state, action) => {
            const { payload } = action
            const newItem = {
                id: payload.id,
                title: payload.title,
                thumbnail: payload.thumbnail,
                sku: payload.sku,
                price: payload.price,
                qty: 1,
                totalPrice: payload.price * 1
            }
            state.cartItems = [...state.cartItems, newItem]
            cartCalculation(state)
        },
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter((item) => item.id !== action.payload)
            cartCalculation(state)
        },
        updateCart: (state, action) => {
            const { id, quantity } = action.payload
            const index = state.cartItems.findIndex((item) => item.id === id)
            state.cartItems[index].qty = quantity
            state.cartItems[index].totalPrice = state.cartItems[index].price * quantity
            cartCalculation(state)
        },
        applyCouponCode: (state, action) => {
            const couponInfo = cart.couponCodes.find((item) => item.code === action.payload)
            state.applyCouponCode = couponInfo.code
            state.discountPercent = couponInfo.percent
            cartCalculation(state)
        }
    }
})
export const { addToCart, removeFromCart, updateCart, applyCouponCode } = cartSlice.actions
export default cartSlice.reducer
