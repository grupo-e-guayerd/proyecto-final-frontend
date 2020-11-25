import React, { Component } from "react";
/* import GoogleMap from "../GoogleMap/GoogleMap"; */
import Imagen from "../../assets/tratohecho.jpg";
import Federico from "../../assets/federico.jpg";
import Guido from "../../assets/guido.jpeg";
import Nahuel from "../../assets/nahuel.jpg";
import Carmen from "../../assets/carmen.jpeg";
import ButtonUp from "../ButtonUp/ButtonUp";
import Aos from "aos";
import "aos/dist/aos.css";

export default class AboutUsPage extends Component
{
    constructor() {
        super();
        this.state = {
            /* TODO vaciar descripción */
            ourDescription: "Somos un grupo de estudiantes unidos por la pasión de programar que a partir de la necesidad de realizar un cambio en la manera de contratar servicios de oficio pensamos en ServiOficios. ServiOficios nace de la necesidad de dar una respuesta a aquellas personas que necesitan de un servicio de algún oficio y no tener ninguna referencia. Los queremos acompañar: ¿No te ha pasado que necesitaste alguna persona que venga a tu casa a hacer un arreglo y no saber a quien recurrir? ¿o experimentar que te han recomendado una persona pero no tenes muchas mas referencias? Si te sentís identificado, estas en el lugar correcto. ServiOficios conecta a las personas que ofrecen oficios con alguien como vos que necesita de ellos. Es muy fácil, solo tenes que seleccionar al profesional que necesitas y nosotros hacemos el resto. Sumate a la nueva forma de de contratar un oficio."
        }
    }
   
    componentDidMount()
    {
        /* TODO Change url of the server. */
        fetch(/* URL Server */)
        .then(response=>response.json())
        .then(jsonString=>{this.setState({ourDescription: jsonString})})
        .catch(error=>{ /* TODO chatch handler */ });

        // ANIMATION
        Aos.init({duration: 2000});
    }

    render() {
        return (
            
            <>
                <ButtonUp />
                <div className="video-container">
                    <img src={Imagen} className="video" alt="About us"></img>
                </div>
            
                <div className="carousel-caption">
                    <h2 className="banner-title">Sobre nosotros</h2>
                </div>
            
                <div className="aboutUs-container">
                    
                    <div data-aos="fade-up" className="aboutUs-nosotros">
                        <h3 className="aboutus-title" >Quíenes somos</h3>
                        <p className="our-description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et sem non nisi suscipit pharetra et at turpis. Morbi efficitur mollis finibus. Donec condimentum est purus. Vestibulum eget fermentum ligula.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et sem non nisi suscipit pharetra et at turpis. Morbi efficitur mollis finibus. Donec condimentum est purus. Vestibulum eget fermentum ligula.
                            <br></br>
                        </p>
                
                        <p className="our-description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et sem non nisi suscipit pharetra et at turpis. Morbi efficitur mollis finibus. Donec condimentum est purus. Vestibulum eget fermentum ligula. Sed quis velit in libero cursus congue. Integer viverra viverra enim consequat convallis. Suspendisse id mauris rutrum, rutrum odio a, pretium urna. Proin dictum id quam sed laoreet. Curabitur volutpat urna justo, sit amet egestas risus cursus egestas. Nullam eget turpis tempor, vehicula urna in, porta ligula. Proin efficitur lacinia elit, sit amet dapibus nulla fringilla sit amet. Aliquam quis convallis purus. Aliquam mollis ac augue non sodales. Curabitur suscipit tristique diam eget maximus. Duis ut metus sit amet nulla laoreet volutpat.
                            <br></br>
                        </p>
                        <p className="our-description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et sem non nisi suscipit pharetra et at turpis. Morbi efficitur mollis finibus. Donec condimentum est purus. Vestibulum eget fermentum ligula. Sed quis velit in libero cursus congue. Integer viverra viverra enim consequat convallis. Suspendisse id mauris rutrum, rutrum odio a, pretium urna. Proin dictum id quam sed laoreet.
                            <br></br>
                        </p>
                    </div>
                    
                    <div className="aboutUs-movv">
                        <div data-aos="fade-up" className="aboutus-container">
                            <div className="aboutUs-info-card">
                                <h3 className="aboutus-movv-title">Misión</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et sem non nisi suscipit pharetra et at turpis. Morbi efficitur mollis finibus. Donec condimentum est purus. Vestibulum eget fermentum ligula. </p>
                            </div>
                            
                            
                            <div className="aboutUs-info-card">
                                <h3 className="aboutus-movv-title">Visión</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et sem non nisi suscipit pharetra et at turpis. Morbi efficitur mollis finibus. Donec condimentum est purus. Vestibulum eget fermentum ligula. </p>
                            </div>
                            
                            <div className="aboutUs-info-card">
                                <h3 className="aboutus-movv-title">Objetivos</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et sem non nisi suscipit pharetra et at turpis. Morbi efficitur mollis finibus. Donec condimentum est purus. Vestibulum eget fermentum ligula. </p>
                            </div>
                            
                            <div className="aboutUs-info-card">
                                <h3 className="aboutus-movv-title">Valores</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et sem non nisi suscipit pharetra et at turpis. Morbi efficitur mollis finibus. Donec condimentum est purus. Vestibulum eget fermentum ligula. </p>
                            </div>
                        </div>
                    </div>

                    <div data-aos="fade-up" className="aboutus-equipo">
                        <h2 className="equipo-title">Nuestro equipo</h2>
                       
                        <div className="equipo-container"> 

                            <div className="equipo-integrante">
                                <div className="equipo-contenedor-img">
                                    <img src={Federico} alt="worker" className="equipo-imagen" />
                                </div>
                                <div className="integrante-info">
                                    <h3 className="integrante-nombre">Federico Canesa</h3>
                                    <h4 className="integrante-puesto">Lorem ipsum </h4>
                                    <p className="integrante-descripcion">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </p>
                                </div>
                            </div>
                        
                            <div className="equipo-integrante">
                                <div className="equipo-contenedor-img">
                                    <img src={Federico} alt="worker" className="equipo-imagen" />
                                </div>
                                <div className="integrante-info">
                                    <h3 className="integrante-nombre">Matias Aquino</h3>
                                    <h4 className="integrante-puesto">Lorem ipsum </h4>
                                    <p className="integrante-descripcion">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </p>
                                </div>
                            </div>
                            <div className="equipo-integrante">
                                <div className="equipo-contenedor-img"> 
                                    <img src={Nahuel} alt="worker" className="equipo-imagen" />
                                </div>
                                <div className="integrante-info">
                                    <h3 className="integrante-nombre">Nahuel Trucco</h3>
                                    <h4 className="integrante-puesto">Lorem ipsum </h4>
                                    <p className="integrante-descripcion">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </p>
                                </div>
                            </div>
                            <div className="equipo-integrante">
                                <div className="equipo-contenedor-img">
                                    <img src={Guido} alt="worker" className="equipo-imagen" />
                                </div>
                                <div className="integrante-info">
                                    <h3 className="integrante-nombre">Guido Alferez</h3>
                                    <h4 className="integrante-puesto">Lorem ipsum </h4>
                                    <p className="integrante-descripcion">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </p>
                                </div>
                            </div>
                            <div className="equipo-integrante">
                                <div className="equipo-contenedor-img"> 
                                    <img src={Carmen} alt="worker" className="equipo-imagen" />
                                </div>
                                <div className="integrante-info">
                                    <h3 className="integrante-nombre">Carmen Quispe</h3>
                                    <h4 className="integrante-puesto">Lorem ipsum </h4>
                                    <p className="integrante-descripcion">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                        {/*       <h2>Dirección</h2>
                        <p className="address">
                            Av. Patricio Peralta Ramos 3532, 7600, Mar del Plata, Buenos Aires.
                        </p>
                        <GoogleMap /> */}
                </div>
            </>

        )
    }
}