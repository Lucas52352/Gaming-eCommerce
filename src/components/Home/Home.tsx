
import Carrusel from '../Carousel/Carousel';
import Products from '../Products/Products';
import ShopByCategory from '../ShopByCategory/ShopByCategory';
import Paginado from '../Pagination/Pagination';
import Searchbar from '../Searchbar/Searchbar';




function Home() {
  return (

    <div>
        <Carrusel/>
        <ShopByCategory/>
        <Searchbar/>
        <Products/>
        <Paginado />
    </div>
  )
}

export default Home