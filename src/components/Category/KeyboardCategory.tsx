import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Cards from '../Cards/Card'
import { getProd } from '../../redux/ProductsActions'

function KeyboardCategory() {
  const productos = useSelector((state:any) => state.products)
  const dispatch: any = useDispatch()

  const filtered = productos.products.filter((item:any)=> item.category === "Keyboard")
  useEffect(() => {
    dispatch(getProd())
  }, [])
  return (
    <div className='mouseContain'>
    {
        filtered.map((prod:any)=>{
            return(
                <>
                    <Cards
                        id={prod.id}
                        name={prod.name}
                        image={prod.image}
                        price={prod.price} 
                        color={''} 
                        description={''} 
                        brand={''} 
                        category={''}                        
                    />
                </>
            )
        })
    }
</div>
  )
}

export default KeyboardCategory