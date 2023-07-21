import axios from 'axios';
import { cartProd } from './CartSlice';

export const pushCartProd = (product:any , cantidad:any)=> async (dispatch:any)=>{
    dispatch(cartProd([product, cantidad]))
}
