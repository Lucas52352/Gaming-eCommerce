import { cartProd } from './CartSlice';

export const pushCartProd = (product:any , cantidad:any)=> async (dispatch:any)=>{
    const obj = {
        product: product,
        cant: cantidad
    }
    dispatch(cartProd(obj))
}
