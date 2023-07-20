import React from 'react'
import Carrusel from '../Carousel/Carousel';
import Products from '../Products/Products'; 
import NavBar from '../NavBar/NavBar';
function Home() {
  return (
    <div>
        <NavBar/>
        <Carrusel/>
        <Products/>
    </div>
  )
}

export default Home