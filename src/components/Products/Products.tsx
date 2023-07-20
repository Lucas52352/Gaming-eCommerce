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
    const { logout, user} = useAuth0();
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
      console.log("USUARIO CREADO");
      return axios.post("http://localhost:3001/user", userNext)
    }

    let initialPaginate = 0;
    let paginas = Math.floor(productos.products.length/4)
    let nextPage = initialPaginate + 1

    // const paginado = 
    
  return (
    <div className="homeContainer">

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