import React, {useEffect} from 'react'
import {useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProdtById } from '../../redux/ProductsActions'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Detail.css'

const Detail = () => {

  const dispatch: any = useDispatch()

  const { id } = useParams()

  const prodById = useSelector((state:any) => state.products.productById)

  console.log(id);
  
  
  useEffect(() => {
    if (id) {
      dispatch(getProdtById(+id))
    }
  }, [])
  
  console.log(prodById);

  return (
    <div>
      {
        prodById && prodById.map((item:any) => {
          return(
            <div className='sectionCarrusel'>
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
                
                
              </div>
            
          )
        })
      }
    </div>
  )
}

export default Detail




