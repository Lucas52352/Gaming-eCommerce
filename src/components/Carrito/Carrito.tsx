import { useSelector, useDispatch } from 'react-redux';
import './carrito.css';
import { useNavigate } from 'react-router-dom';
import deleteRed from './assets/deleteRed.png';
// import deleteBlack from './assets/deleteBlack.png'
import { removeCartProd } from '../../redux/CartActions';
import { Dispatch } from '@reduxjs/toolkit';

function Carrito() {
  const navigate = useNavigate();
  const dispatch: Dispatch<any> = useDispatch();
  const cart = useSelector((state: any) => state.cart.cartProducts);
  const total = cart.map((item: any) => item.product);

  console.log(cart, 'CART');
  

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


  const idProd = total.map((prod: any) => prod[0].id)
  console.log(idProd, 'ID de productos');
  
  const deleteFromCart = (id: any) => {
    console.log(id);
    dispatch(removeCartProd(id))
    
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
                        <hr className="hr" />
                      </div>
                      <h4 id="h3">${item.price}</h4>
                    </div>
                  );
                })}
                <h3 id="h3"> Quantity:{item.cant}</h3>
                <button onClick={() => deleteFromCart(item.product[0].id)}>
                  <img src={deleteRed} />
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
        <p>Total: {numbers}$</p>
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
    </div>
  );
}

export default Carrito;
