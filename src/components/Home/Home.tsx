import React from 'react'
import Carrusel from '../Carousel/Carousel';
import Products from '../Products/Products';
import ShopByCategory from '../ShopByCategory/ShopByCategory';
import Paginado from '../Pagination/Pagination';
/* import CarouselBrands from '../CarouselBrands/CarouselBrands'; */


function Home() {
  return (
    <div>
        <Carrusel/>
        <ShopByCategory/>
        {/* <CarouselBrands/> */}
        <Products/>
        <Paginado />
    </div>
  )
}

export default Home