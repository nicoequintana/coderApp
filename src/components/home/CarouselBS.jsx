import Carousel from 'react-bootstrap/Carousel';
import s from '../Modules/homeStyles.module.css'

function CarouselBS() {
  return (
    <div>
        <Carousel>
          <Carousel.Item className={s.carouselImgContainer} interval={1000}>
            <img
              className="d-block w-100"
              src="https://images.macrumors.com/t/TehGUgb3ooNNWMuugkMe_SflPNM=/1600x/article-new/2022/01/iPhone-14-Mock-pill-and-hole-thumb.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item className={s.carouselImgContainer} interval={500}>
            <img
              className="d-block w-100"
              src="https://cdn.ipadizate.com/2022/05/iPhone-14-Pro-Purple-Side-by-Side-Black.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item className={s.carouselImgContainer}>
            <img
              className="d-block w-100"
              src="https://www.apple.com/v/iphone-13/i/images/meta/iphone-13_specs__bpr60apdzuaa_og.png?202209051408"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
  );
}

export default CarouselBS;