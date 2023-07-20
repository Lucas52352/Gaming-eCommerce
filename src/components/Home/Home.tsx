import React from 'react'
import Carrusel from '../Carousel/Carousel';
import Products from '../Products/Products'; 
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer'


function Home() {
  return (
    <div>
        <NavBar/>
        <Carrusel/>
        <Products/>
        <Footer/>
    </div>
  )
}

export default Home