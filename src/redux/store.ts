import { configureStore } from "@reduxjs/toolkit";
import products from './ProductsSlice'
import CartSlice from "./CartSlice";
export default configureStore({
    reducer:{
        products: products,
        cart: CartSlice
    }
})