import React from 'react'
import { useSelector } from 'react-redux'
import Cards from '../Cards/Card'

function KeyboardCategory() {
  const productos = useSelector((state:any) => state.products)

  const filtered = productos.products.filter((item:any)=> item.category === "Keyboard")
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