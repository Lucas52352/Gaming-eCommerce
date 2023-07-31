import { cartProd, deleteCartProd } from './CartSlice';

export const pushCartProd = (product:any , cantidad:any)=> async (dispatch:any)=>{
    const obj: any = {
        product: product,
        cant: cantidad
    }
    dispatch(cartProd(obj))
}

export const removeCartProd = (id: any) => (dispatch: any) => {
    dispatch(deleteCartProd(id))
}