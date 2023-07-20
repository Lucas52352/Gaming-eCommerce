import React from 'react'
import Carrusel from '../Carousel/Carousel';
import Products from '../Products/Products';
import Footer from '../Footer/Footer';
import ShopByCategory from '../ShopByCategory/ShopByCategory';
/* import CarouselBrands from '../CarouselBrands/CarouselBrands'; */


function Home() {
  return (
    <div>
        <Carrusel/>
        <ShopByCategory/>
        {/* <CarouselBrands/> */}
        <Products/>
        <Footer/>
    </div>
  )
}

export default Home