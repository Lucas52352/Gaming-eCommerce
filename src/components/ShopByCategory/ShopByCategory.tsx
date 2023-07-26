import './ShopByCategory.css'
import { Link } from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

const ShopByCategory = () => {
  return (
    <div>
      <div className='divTitleShopByCatMobile'>
        <p className='textByCatMobile'>Shop By Category</p>
      </div>
      <div className='sectionCarouselMobileCategories'>
      <Carousel className='carruselByCategorie'>
      <Carousel.Item interval={2000}>
      <Link to="/keyboards" className='linkPCrousel'>
        <div className='categoryKeyboardCarousel'>
            <p className='categoryText'>Keyboards</p>
        </div>
        </Link>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
      <Link to="/headphones" className='linkPCrousel'>
        <div className='categoryHeadphonesCarousel'>
            <p className='categoryText'>Headphones</p>
        </div>
        </Link>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
      <Link to="/mouses" className='linkPCrousel'>
        <div className='categoryMousesCarousel'>
            <p className='categoryText'>Mouses</p>
        </div>
        </Link>
      </Carousel.Item>
    </Carousel>
      </div>
    <div className='shopByCategorieWeb'>
      <div className='divTitleShopByCat'>
        <p className='textByCat'>Shop By Category</p>
      </div>
    <div className='sectionCategories'>
        <Link to="/keyboards" className='linkP'>
        <div className='categoryKeyboard'>
            <p className='categoryText'>Keyboards</p>
        </div>
        </Link>
        <Link to="/headphones" className='linkP'>
        <div className='categoryHeadphones'>
            <p className='categoryText'>Headphones</p>
        </div>
        </Link>
        <Link to="/mouses" className='linkP'>
        <div className='categoryMouses'>
            <p className='categoryText'>Mouses</p>
        </div>
        </Link>
    </div>
    </div>
    </div>
  )
}

export default ShopByCategory