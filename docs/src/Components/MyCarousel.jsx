import "../Style/MyCarousel.css";
import React from 'react';
import { Carousel } from 'react-bootstrap';

// IMÁGENES SLIDE
import slide1 from "../Img/slide1.png";
import slide2 from "../Img/slide2.png";
import slide3 from "../Img/slide3.png";
import slide4 from "../Img/slide4.jpg";

export default function MyCarousel() {
  return (
    <div className='container__carousel'>
      <Carousel>

      <Carousel.Item interval={1000}>
          <img src={slide1} alt="slide" />
      </Carousel.Item>

      <Carousel.Item interval={1000}>
          <img src={slide2} />
      </Carousel.Item>

      <Carousel.Item interval={1000}>
          <img src={slide3} alt="slide" />
      </Carousel.Item>

      <Carousel.Item interval={1000}>
          <img src={slide4} alt="slide" />
      </Carousel.Item>

    </Carousel>
    </div>
  )
}
