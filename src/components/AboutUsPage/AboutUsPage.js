import React, { Component } from "react";
import GoogleMap from "../GoogleMap/GoogleMap";


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
    }

    render() {
        return (
            <div className="aboutUs-container">
                <h2>Sobre nosotros</h2>
                <p className="our-description">
                    {this.state.ourDescription}
                </p>

                <h2>Dirección</h2>
                <p className="address">
                    Av. Patricio Peralta Ramos 3532, 7600, Mar del Plata, Buenos Aires.
                </p>
                <GoogleMap />
            </div>
        )
    }
}