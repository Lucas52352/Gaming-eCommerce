import './Card.css'
import { Link } from 'react-router-dom'
interface CardProps {
  id: number,
  name: string,
  image: string,
  color: string,
  price: number,
  description: string,
  brand: string,
  category: string

}

const Cards = ({id, name, image, price}: CardProps) => {
  return (
    

      <div className='card' key={id}>
        <Link className='link' to={`/product/${+id}`}>
        <img className="imgCard" src={image[0]} alt="" />
        <div className='sectionText'>
          <p className='textCard'>{name}</p>
          <hr />
          <p className='priceCard'>${price}</p>
        </div>
        </Link>
      </div>
  )
}

export default Cards