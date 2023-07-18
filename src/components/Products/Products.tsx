import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProd } from '../../redux/ProductsActions'

const Products = () => {
    const product = useSelector((state: any) => state.products)
    const dispatch: any = useDispatch()

    useEffect(() => {
        dispatch(getProd())
        product
    }, [])

  return (
    <div>
      <p>products</p>

    </div>
  )
}

export default Products