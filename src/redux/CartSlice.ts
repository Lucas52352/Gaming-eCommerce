import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'products',
    initialState:{
        cartProducts:[],
        user:{}
    },
    reducers:{  
        cartProd: (state:any,action:any)=>{
            state.cartProducts = [...state.cartProducts, action.payload]
        },
        userCart:(state,action)=>{
            state.user = action.payload
        }
    }
})

export const {cartProd, userCart} = cartSlice.actions

export default cartSlice.reducer