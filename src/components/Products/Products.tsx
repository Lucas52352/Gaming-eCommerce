import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getProd } from '../../redux/ProductsActions'

const Products = () => {
    const dispatch: any = useDispatch()

    useEffect(() => {
        dispatch(getProd())
    }, [])

  return (
    <div>
      <p>products</p>

    </div>
  )
}

export default Products