import { createSlice} from "@reduxjs/toolkit";


export const productsSlice = createSlice({
    name: 'products',
    initialState:{
        products:[],
        productById:[],
        selectedCategory: "All",
        selectedBrand: "Allbrands",
        selectedColor: "AllColors"
    },
    reducers:{
        getProducts: (state, action) => {
            state.products = action.payload
        },
        getProductById: (state, action) => {
            state.productById = action.payload
        },
        setCategoryFilter: (state, action) => {
            state.selectedCategory = action.payload;
        },
        setBrandFilter(state, action) {
            state.selectedBrand = action.payload;
        },
        setColorFilter(state, action){
            state.selectedColor = action.payload;
        }
    }
})

export const {getProducts, getProductById, setCategoryFilter, setBrandFilter, setColorFilter} = productsSlice.actions

export default productsSlice.reducer