import { useSelector, useDispatch } from 'react-redux';
import './carrito.css';
import { useNavigate } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
// import deleteBlack from './assets/deleteBlack.png'
import { removeCartProd } from '../../redux/CartActions';
import { Dispatch } from '@reduxjs/toolkit';
import LoaderDelete from '../Loader/LoaderDelete/LoaderDelete'
import { useState } from 'react';

interface Carrito{
  producto: object,
  cantidad: number
}

function Carrito() {
  const navigate = useNavigate();
  const dispatch: Dispatch<any> = useDispatch();

  const [cartObj, setCartObj] = useState<Carrito>({
    producto:{},
    cantidad: 0
  })
  const cart = useSelector((state: any) => state.cart.cartProducts);
  const total = cart.map((item: any) => item.product);
  const [showLoader, setShowLoader] = useState(false);
  console.log(cart, 'CART');
  const allCart = localStorage.getItem("carrito");
  const allCartJSON = JSON.parse(allCart)

  console.log(allCartJSON, "PUSHLOCAL")



  const totally = total.map((item: any) => {
    return item.map((itemBi: any) => {
      return itemBi.price;
    });
  });
  
  
  let numbers = 0;
  for (let i = 0; i < totally.length; i++) {
    const element = totally[i];
    if (element[0]) {
      numbers += Math.floor(element[0]);
    }
  }

    // const carrito = [];  
    // for(let iterador of allCartJSON){
    //   // console.log("soy el carritooooo jueputa",iterador)
    //   if(iterador.prodById && iterador.cantidad){
    //     console.log(iterador.prodById)
    //     carrito.push({
    //       "prodById":iterador.prodById,
    //       "cantidad":iterador.cantidad
    //     })
    //   }
    // }



  const idProd = total.map((prod: any) => prod[0].id)
  console.log(idProd, 'ID de productos');
  
  const deleteFromCart = (id: any) => {
    console.log(id);
    setShowLoader(true);

    dispatch(removeCartProd(id))

    setTimeout(() => {
      setShowLoader(false);
    }, 3000);
    
  };

  return (
    <div className="carContainer">
      <hr />
      {cart ? (
        <div className="cartAllContainer">
          {cart.map((item: any) => {
            return (
              <div className="div">
                {item.product.map((item: any) => {
                  return (
                    <div className="cartContainer">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="imageCart"
                      />
                      <div className="cartInfo">
                        <h3 id="h3">{item.name}</h3>
                      </div>
                      <h4 id="h3">${item.price}</h4>

                    </div>
                  );
                })}
                <h3 id="h3"> Quantity: {item.cant}</h3>
                <button className='btnDelete' onClick={() => deleteFromCart(item.product[0].id)}>
                  <DeleteIcon className='deleteIcon'/>
                </button>
              </div>
            );
          })}
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
        <p style={{fontWeight:'bolder'}}>Total: {numbers}$</p>
        <button
          className="bought"
          onClick={() => {
            if (cart.length > 0) {
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
