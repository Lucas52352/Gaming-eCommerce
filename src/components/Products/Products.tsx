import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProd } from '../../redux/ProductsActions'
import Card from '../Cards/Card'
import './Products.css'



const Products = () => {
    const productos = useSelector((state:any) => state.products)
    const dispatch: any = useDispatch()
    
    useEffect(() => {
      dispatch(getProd())
    }, [])
    
    console.log(productos.products);
  return (
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
  )
}

export default Products