import { configureStore } from "@reduxjs/toolkit";
import products from './ProductsSlice'

export default configureStore({
    reducer:{
        products: products,

    }
})