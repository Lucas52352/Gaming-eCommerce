import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { cleanState, getProdtById } from '../../redux/ProductsActions'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Detail.css'
import Swal from 'sweetalert2'
import { pushCartProd } from '../../redux/CartActions';

const Detail = () => {
  interface Num{
    cantidad: number
  }
  const [cantidad , setCantidad] = useState<Num>({
    cantidad:0
  })
  const dispatch: any = useDispatch()

  const { id } = useParams()

  const prodById = useSelector((state:any) => state.products.productById)
  const cart = useSelector((state:any) => state.cart.cartProducts)

  console.log(id);  

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
  
  console.log(prodById);
  console.log(cart,"CART ASHEI");

  return (
    <div>
      {
        prodById && prodById.map((item:any) => {
          return(
            <div>
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
                <span className="text-decoration-line-through">${item.price}</span>
                <span> $60.00</span>
              </p>
              <p className="lead">
                {item.description}
              </p>
              <div className="d-flex">
                <input
                  id="inputQuantity"
                  className="form-control text-center me-3"
                  type="number"
                  defaultValue="1"
                  style={{ maxWidth: '3rem' }}
                  onChange={cant}
                />
                <button className="btn btn-outline-dark flex-shrink-0 btn" type="button" onClick={() =>{
                  
                  Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Product added to cart',
                    showConfirmButton: false,
                    timer: 1500
  
                  })
                  addProd()
                } 
                } >  
                  <i className="bi-cart-fill me-1" />
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

     
      <section className="py-5 bg-light">
        <div className="container px-4 px-lg-5 mt-5">
          <h2 className="fw-bolder mb-4">Related products</h2>
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            <div className='cardDetail'>
              <img className='imgCardDetail' src="https://res.cloudinary.com/dtw0xzty5/image/upload/v1689209803/tecladoFizz_cfwtw7.png" alt="" />
                <p>Keyboard Alloy Origins Core</p>
                <p>$32790</p>
            </div>
            <div className='cardDetail'>
              <img className='imgCardDetail' src="https://logitechar.vtexassets.com/arquivos/ids/159066-800-800?v=638198543892570000&width=800&height=800&aspect=true" alt="" />
              <p>G502 X Plus Wireless RGB Gaming Mouse </p>
              <p>$32200</p>
            </div>
            <div className='cardDetail'>
              <img className='imgCardDetail' src="https://hyperx.com/cdn/shop/files/hyperx_cloud_alpha_s_black_2_detachable_900x.jpg?v=1688318404" alt="" />
              <p>HyperX Cloud Alpha S - Gaming Headset</p>
              <p>$24200</p>
            </div>
          </div>
        </div>
      </section>
      </div>     
          )
        })
      }
    </div>
  )
}

export default Detail







{/* <div className='sectionCarrusel'>
                <div className='imgLaterales'>
                    <img className='imgDetail' src={item.image[0]} alt="" />
                    <img className='imgDetail'src={item.image[1]} alt="" />
                    <img className='imgDetail'src={item.image[2]} alt="" />
                </div>
                  <Carousel className='carruselDetail'>
                  <Carousel.Item interval={3000}>
                    <img
                      className="d-block w-100 img-carousel"
                      src={item.image[0]}
                      alt="First slide"
                      />
                  </Carousel.Item>
                  <Carousel.Item interval={3000}>
                    <img
                      className="d-block w-100 img-carousel"
                      src={item.image[1]}
                      alt="Second slide"
                      />
                  </Carousel.Item>
                  <Carousel.Item interval={3000}>
                    <img
                      className="d-block w-100 img-carousel"
                      src={item.image[2]}
                      alt="Third slide"
                      />
                  </Carousel.Item>
                </Carousel>
                <div className='sectionProductText'>
                  <h2 className='productName'>{item.name}</h2>
                  <p className='productPrice'>${item.price}</p>
                </div>
                
              </div> */}