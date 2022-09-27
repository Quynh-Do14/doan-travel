
import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

import slide1 from '../Asset/bg-main4.jpg';
import slide2 from '../Asset/bg-main2.jpg';
import slide3 from '../Asset/bg-main5.jpg';
import './Slide.css'
export default function Slide() {
  return (
    <div className='slide'>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-90 img-slide"
            src={slide1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-90 img-slide"
            src={slide2}
            alt="Second slide"
          />


        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-90 img-slide"
            src={slide3}
            alt="Third slide"
          />

        </Carousel.Item>
      </Carousel>

    </div>
  )
}
