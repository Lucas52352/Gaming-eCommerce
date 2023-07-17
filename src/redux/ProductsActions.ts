import axios from 'axios'
import { getProducts, getProductById } from './ProductsSlice'


export const getProd = ()=>(dispatch: any)=>  {
    try {
        axios.get('http://localhost:3001/products')
        .then(res=> dispatch(getProducts(res.data)))
        
    } catch (error) {
        console.log(error, 'este es el errror');
        
    }
}