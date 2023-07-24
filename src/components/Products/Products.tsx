import React ,{useState} from "react"
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProd } from '../../redux/ProductsActions'
import Card from '../Cards/Card'
import './Products.css'
import { useAuth0 } from '@auth0/auth0-react'
import axios from "axios"


const Products = () => {
    const productos = useSelector((state:any) => state.products)
    const dispatch: any = useDispatch()
    const { user} = useAuth0();
    const [userNext , setUserNext] = useState({
      name:"",
      email:""
    });
    
    useEffect(() => {
      if(user?.name && user?.email){
        setUserNext({
          ...userNext,
          name: user.name,
          email: user.email,
        })
      }
      dispatch(getProd())
      response()
    }, [user])

    const response = ()=>{
      return axios.post("http://localhost:3001/user", userNext)
    }

  return (
    <div className="homeContainer">
      <p style={{fontSize: 28, alignSelf: 'start', marginLeft: 50, marginTop: 100}}>All Products</p>
    <div className='sectionCards'>
       {
        productos.products.map((prod:any) => {
          return(
            <Card 
              key={prod.id}
              id={prod.id}
              name={prod.name}
              image={prod.image}
              description={prod.description}
              price={prod.price}
              category={prod.category}
              color={prod.color}
              brand={prod.brand}
              />
              )
            })
          }
    </div>
          </div>
  )
}

export default Products