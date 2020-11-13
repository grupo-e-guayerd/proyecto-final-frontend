import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import Search from "../Search/Search"

export default class Banner extends React.Component{
    render (){
        return( 
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
                  src="https://www.carpinteriamunozplaza.com/images/slider/02.jpg"
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
                  src="https://cmsphoto.ww-cdn.com/superstatic/1580158/art/default/38333880-33514475.jpg?v=1571153954"
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                  <Search></Search>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
            
        )
    }
}