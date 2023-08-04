import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'products',
    initialState:{
        cartProducts:[],
        user:{}
    },
    reducers:{  
        cartProd: (state:any,action: any)=>{
            state.cartProducts = [...state.cartProducts, action.payload]
        },
        deleteCartProd: (state: any, action: any) => {
            const prodId: number = action.payload
            state.cartProducts = state.cartProducts.filter((item: any) => item.product[0].id !== prodId)
        },
        userCart:(state,action)=>{
            state.user = action.payload
        },
        clearState:(state)=>{
            state.cartProducts = []
        }
    }
})

export const {cartProd, userCart, deleteCartProd, clearState} = cartSlice.actions

export default cartSlice.reducer