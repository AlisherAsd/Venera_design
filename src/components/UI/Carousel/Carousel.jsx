import React from 'react';
import Carousel from 'react-bootstrap/Carousel'

const MyCarousel = () => {
    return (
        <>
        <div>
            <h2 style={{padding: 30}}>Отзывы наших клиентов</h2>
        </div>
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={require('../../../IMG/clients.png')}
                alt="First slide"
                style={{borderRadius: 0}}
                />
            </Carousel.Item>
            <Carousel.Item>
            <img
                className="d-block w-100"
                src={require('../../../IMG/clients.png')}
                alt="First slide"
                style={{borderRadius: 0}}
                />
            </Carousel.Item>
            <Carousel.Item>
            <img
                className="d-block w-100"
                src={require('../../../IMG/clients.png')}
                alt="First slide"
                style={{borderRadius: 0}}
                />
            </Carousel.Item>
            <Carousel.Item>
            <img
                className="d-block w-100"
                src={require('../../../IMG/clients.png')}
                alt="First slide"
                style={{borderRadius: 0}}
                />
            </Carousel.Item>
        </Carousel>
      </>
    );
};

export default MyCarousel;