import Carrusel from '../Carousel/Carousel';
import Products from '../Products/Products';
import ShopByCategory from '../ShopByCategory/ShopByCategory';
import Searchbar from '../Searchbar/Searchbar';



const Home = () => {
  return (

    <div>
        <Carrusel/>
        <ShopByCategory/>
        <Searchbar/>
        
        <Products/>
        

    </div>
  )
}

export default Home