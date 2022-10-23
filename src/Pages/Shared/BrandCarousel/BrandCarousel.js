import React from 'react';
import { Carousel } from 'react-bootstrap';
import brand1 from '../../../assets/brands/brand1.png';
import brand2 from '../../../assets/brands/brand2.png';

const BrandCarousel = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={brand1}
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={brand2}
                alt="Second slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default BrandCarousel;