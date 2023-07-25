import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { cleanState, getProdtById } from '../../redux/ProductsActions'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Detail.css'
import Swal from 'sweetalert2'
import { pushCartProd } from '../../redux/CartActions';
import { useAuth0 } from '@auth0/auth0-react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import img from "../NavBar/assets/Radtek1.png";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'black', // Fondo negro
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  color:"white",
  display: 'flex', // Usar flex
  flexDirection: 'column', // Dirección de columna (vertical)
  alignItems: 'center',
};
const typographyStyle = {
  display: 'flex', // Usar flex
  flexDirection: 'column', // Dirección de columna (vertical)
  textAlign: 'center', // Centrar el texto verticalmente
  
};

const Detail = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  interface Num{
    cantidad: number
  }
  const {isAuthenticated , loginWithRedirect} = useAuth0()
  console.log(isAuthenticated, "AUTH0");
  
  const [cantidad , setCantidad] = useState<Num>({
    cantidad:0
  })

  const dispatch: any = useDispatch()

  const { id } = useParams()


  //LOGICA CARRITO +

  let ids:Array<Number> = [];
  //ESTADO OBJETO CON EL PRODUCTO DEL DETALLE
  const prodById = useSelector((state:any) => state.products.productById)

  const prodId = prodById?.map((item:any)=>{
    return item
  });

  console.log(prodId[0]);
  
  //ESTADO OBJETO CON LOS DEL CARRITO
  const cart = useSelector((state:any) => state.cart.cartProducts)
  //
 
  console.log(cart,"CARRITO")

  //product carrito
  cart?.map((item:any)=>{
    if(item.product.length){
      item.product.filter((id:any) => {
        if(id.id === prodId[0]?.id){
          ids.push(id.id)
        }
      })
    }
  })
  
  
  const addProd = ()=>{
  if(prodById){
    dispatch(pushCartProd(prodById, cantidad))
  }
  }
  const cant = (event:any)=>{
    setCantidad(event.target.value);
  }
  useEffect(() => {
    if (id) {
      dispatch(getProdtById(+id))
    }
    if(prodById){
      dispatch(cleanState())
    }
  }, [])
  
  return (
    <div>
      {prodById &&
        prodById.map((item:any) => {
          return (
            <div key={item.id}> {/* Agregamos un key único al div */}
              <section className="py-5">
                <div className="container px-4 px-lg-5 my-5">
                  <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                      <img
                        className="card-img-top mb-5 mb-md-0"
                        src={item.image[0]}
                        alt="..."
                      />
                    </div>
                    <div className="col-md-6">
                      <small className="mb-1">SKU: BST-498</small>
                      <h1 className="display-5 fw-bolder">{item.name}</h1>
                      <p className="fs-5 mb-5">
                        <span className="text-decoration-line-through">
                          ${item.price}
                        </span>
                        <span> $60.00</span>
                      </p>
                      <p className="lead">{item.description}</p>
                      <div className="d-flex">
                       
                          <>
                          
                          {
                            ids.find((id:any)=> id === item.id)
                            ?
                            <p style={{color:"green"}}>! This item is already in the cart !</p>
                            :
                            <>

                            <button
                            className="btn btn-outline-dark flex-shrink-0 btn"
                          type="button"
                          onClick={() => {
                            if (isAuthenticated) {
                              Swal.fire({
                                position: 'center',
                                icon: 'success',
                                title: 'Product added to cart',
                                showConfirmButton: false,
                                timer: 1500,
                              });
                              addProd();
                            } else {
                              console.log('Iniciar sesion');
                              handleOpen();
                            }
                          }}
                          >
                          <i className="bi-cart-fill me-1" />
                          Add to cart
                        </button>
                        <input
                        id="inputQuantity"
                        className="form-control text-center me-3"
                        type="number"
                        defaultValue="1"
                        style={{ maxWidth: '9rem' , padding: "20px"}}
                        onChange={cant}
                      />
                      </>
                        }
                            </>
                     
                        
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="py-5 bg-light">
                <div className="container px-4 px-lg-5 mt-5">
                  <h2 className="fw-bolder mb-4">Related products</h2>
                  <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    {/* ...Contenido de productos relacionados... */}
                  </div>
                </div>
              </section>
            </div>
          );
        })}

      {/* Modal fuera del bucle de mapeo */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={typographyStyle}>
            <img src={img} alt="" className='modalImg'/>
            <h2 className='pModal'>Please, before continuing, please log in.</h2>
            <hr />
          </Typography>
          <Typography id="modal-modal-description" sx={typographyStyle}>
            <button className='btnModal' onClick={()=> loginWithRedirect()}>Log In</button>
            <button className='btnModal' onClick={()=> loginWithRedirect()}>Register</button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default Detail