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
              src="https://cimg2.ibsrv.net/cimg/www.doityourself.com/1049x700_85/18/screwdriver-288018.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3 className="banner-title">Contrate un profesional</h3>
              {/* <p className="slogan">Disponibles las 24hs, con precios super accesibles</p> */}
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
              <h3 className="banner-title">Contrate un profesional</h3>
              {/* <p className="slogan">Disponibles las 24hs, con precios super accesibles</p> */}
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
              <h3 className="banner-title">Contrate un profesional</h3>
              {/* <p className="slogan">Disponibles las 24hs, con precios super accesibles</p> */}
              <Search></Search>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.tecsaqro.com.mx/wp-content/uploads/2019/04/diferencia-electricista-tecnico-electricista.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3 className="banner-title">Contrate un profesional</h3>
              {/* <p className="slogan">Disponibles las 24hs, con precios super accesibles</p> */}
              <Search></Search>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://muchosnegociosrentables.com/wp-content/uploads/2017/06/C%C3%B3mo-iniciar-un-servicio-de-fontanero-o-plomero.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3 className="banner-title">Contrate un profesional</h3>
              {/* <p className="slogan">Disponibles las 24hs, con precios super accesibles</p> */}
              <Search></Search>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
          
      )
  }
}