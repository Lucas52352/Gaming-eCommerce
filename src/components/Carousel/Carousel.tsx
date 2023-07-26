import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import headphoneCarousel from './assets/hyperxCarrusel.gif'
import mouseCarousel from './assets/mouseCarrusel.gif'
import keyboardCarousel from './assets/keyboardCarrusel.gif'

function Carrusel() {
  return (
    <Carousel>
      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100 h-80"
          src={headphoneCarousel}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100"
          src={mouseCarousel}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100"
          src={keyboardCarousel}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrusel;