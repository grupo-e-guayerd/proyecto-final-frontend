import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import Search from "../Search/Search"

export default class Banner extends React.Component
{
    render() {
      return ( 
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100" 
              src="https://www.tecsaqro.com.mx/wp-content/uploads/2019/04/diferencia-electricista-tecnico-electricista.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              <Search></Search>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://ibiza-solutions.com/wp-content/uploads/2018/06/pintor8.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <Search></Search>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.servihogar-ecija.com/wp-content/uploads/2019/11/trabajos-de-albaileria.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              <Search></Search>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.servihogar-ecija.com/wp-content/uploads/2019/11/trabajos-de-albaileria.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Four slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              <Search></Search>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.servihogar-ecija.com/wp-content/uploads/2019/11/trabajos-de-albaileria.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Five slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              <Search></Search>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
          
      )
  }
}