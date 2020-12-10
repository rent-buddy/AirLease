import React from 'react';
import { Button, Jumbotron, Carousel } from 'react-bootstrap';
import ListingsGroup from '../components/ListingsGroup';

function HomePage(props) {
  return (
    <div>
      <Jumbotron className= 'p-2'>
        <Carousel>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              height={500}
              src="https://www.thoughtco.com/thmb/C7RiS4QG5TXcBG2d_Sh9i4hFpg0=/3620x2036/smart/filters:no_upscale()/close-up-of-clothes-hanging-in-row-739240657-5a78b11f8e1b6e003715c0ec.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Clothes</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              height={500}
              src="https://images.unsplash.com/photo-1526308182272-d2fe5e5947d8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Furniture</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              height={500}
              src="https://images.unsplash.com/photo-1526738549149-8e07eca6c147?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1250&q=80"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Electronics</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Jumbotron>
      <ListingsGroup />
    </div>
  );
}

export default HomePage;
