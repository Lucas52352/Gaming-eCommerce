import axios from 'axios';
import { getProducts } from './ProductsSlice';

export const getProd = () => async (dispatch: any) => {
  try {
    const response = await axios.get('http://localhost:3001/api/products');
    dispatch(getProducts(response.data));
  } catch (error) {
    console.log(error, 'este es el error');
  }
};