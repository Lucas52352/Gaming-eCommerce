import axios from 'axios';
import { getProducts, getProductById, clear} from './ProductsSlice';


export const getProd = () => async (dispatch: any) => {
  try {
    const response = await axios.get('http://localhost:3001/products');
    dispatch(getProducts(response.data));
  } catch (error) {
    console.log(error);
  }
};

export const getProdtById = (id: number) => async (dispatch: any) => {
  try {
    const response = await axios.get(`http://localhost:3001/products/${id}`);
    dispatch(getProductById([response.data]));
  } catch (error) {
    console.log(error);
    
  }
}


export const cleanState = ()=>  async (dispatch: any)=>{
      dispatch(clear());
}

