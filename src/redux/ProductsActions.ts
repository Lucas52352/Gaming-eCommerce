import axios from 'axios';
import { getProducts, getProductById} from './ProductsSlice';


export const getProd = () => async (dispatch: any) => {
  try {
    const response = await axios.get('http://localhost:3001/api/products');
    dispatch(getProducts(response.data));
  } catch (error) {
    console.log(error, 'este es el errorsdsdsd');
  }
};

export const getProdtById = (id: number) => async (dispatch: any) => {
  try {
    const response = await axios.get(`http://localhost:3001/api/products/${id}`);
    dispatch(getProductById(response.data));
    
  } catch (error) {
    console.log(error, 'travestisssssss');
  }
}