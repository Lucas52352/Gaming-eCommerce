import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import headphoneCarousel from './assets/gifCarrusel3.gif'
import mouseCarousel from './assets/gifCarrusel4.gif'
import keyboardCarousel from './assets/gifCarrusel5.gif'

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