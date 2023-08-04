import { useSelector, useDispatch } from 'react-redux';
import './carrito.css';
import { useNavigate } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
// import deleteBlack from './assets/deleteBlack.png'
import { removeCartProd } from '../../redux/CartActions';
import { Dispatch } from '@reduxjs/toolkit';
import LoaderDelete from '../Loader/LoaderDelete/LoaderDelete';
import { useState } from 'react';

interface Carrito {
  producto: object;
  cantidad: number;
}

function Carrito() {
  const navigate = useNavigate();
  const dispatch: Dispatch<any> = useDispatch();

  const cart = useSelector((state: any) => state.cart.cartProducts);
  const total = cart.map((item: any) => item.product);
  const [showLoader, setShowLoader] = useState(false);

  
  const allCart: any = localStorage.getItem('carrito');
  
  const allCartJSON = JSON.parse(allCart);
   
  
  
  const totally = total.map((item: any) => {
    return item.map((itemBi: any) => {
      return itemBi.price;
    });
  });


  let numbers = 0;
  if(cart){
    for (let i = 0; i < totally.length; i++) {
    const element = totally[i];
    if (element[0]) {
      numbers += Math.floor(element[0]);
    }
  }
}else{
  numbers += 100
}

console.log(cart);

  console.log(allCartJSON, 'PRODJSON');
  console.log(cart, 'productos de carrito');

  const deleteFromCart = (id: any) => {
    setShowLoader(true);

    dispatch(removeCartProd(id));

    setTimeout(() => {
      setShowLoader(false);
    }, 3000);
  };

  return (
    <div className='carContainer'>
      <hr />{
        cart > 0
        ?
        <div>
          {
            cart?.map((item:any)=>{
              if(item.product){
                return item.product.map((prod:any)=>{
                  return(
                    <>
                    <h2>{prod.name}</h2>
                    </>
                  )
                })
              }
            })
          }
        </div>
        :
        <div>
        {allCartJSON?.map((items: any) => {
          return (
            <div className='div'>
              {items.prodById.map((item: any) => {
                return (
                  <div className='cartContainer'>
                    <img
                      src={item.image}
                      alt={item.name}
                      className='imageCart'
                      />
                    <div className='cartInfo'>
                      <h3 id='h3'>{item.name}</h3>
                    </div>
                    <h4 id='h3'>${item.price * items.cantidad}</h4>
                  </div>
                );
              })}
              <h3 id='h3'> Quantity: {items.cantidad}</h3>
              <button
                className='btnDelete'
                onClick={() => deleteFromCart(items.product[0].id)}
                >
                <DeleteIcon className='deleteIcon' />
              </button>
            </div>
          );
        })}
        </div>
      }
      {cart ? (
        <div className='cartAllContainer'>
        
        </div>
      ) : (
        <h1>Empty Cart...........</h1>
      )}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          margin: '40px',
          width: '100vw',
          justifyContent: 'end',
        }}
      >
        <p style={{ fontWeight: 'bolder' }}>Total: {numbers}$</p>
        <button
          className='bought'
          onClick={() => {
            if (allCartJSON.length > 0) {
              navigate('/payments');
            }
          }}
        >
          Buy
        </button>
      </div>
      {showLoader && <LoaderDelete />}
    </div>
  );
}

export default Carrito;
