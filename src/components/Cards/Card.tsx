import { useState } from 'react';
import './Card.css';
import {useNavigate } from 'react-router-dom';
import Loader from '../Loader/Loader';


interface CardProps {
  id: number;
  name: string;
  image: string;
  color: string;
  price: number;
  description: string;
  brand: string;
  category: string;
  stock:number
}

const Cards = ({ id, name, image, price}: CardProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleCardClick = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      // Redirige al enlace `/product/${id}` después de 2 segundos (cuando isLoading sea falso)
      navigate(`/product/${id}`);
    }, 3000); // 2 segundos de duración del Loader
  }


  return (
    <div className='card' key={id}>
      <div className='link' onClick={handleCardClick}>
        <img className="imgCard" src={image} alt={name} />
        <div className='sectionText'>
          <p className='textCard'>{name}</p>
          <hr />
          <p className='priceCard'>${price}</p>
        </div>
      </div>
      {isLoading && <Loader />}
    </div>
  );
};

export default Cards;
