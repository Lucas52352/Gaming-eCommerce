import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
    name: 'products',
    initialState:{
        products:[],
        productById:[]
    },
    reducers:{
        getProducts: (state, action) => {
            state.products = action.payload
        },
        getProductById: (state, action) => {
            state.productById = action.payload
        }
    }
})

export const {getProducts, getProductById} = productsSlice.actions

export default productsSlice.reducer