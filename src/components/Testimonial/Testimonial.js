import React, { Component } from 'react';

class Testimonials extends Component {
    render() {
        return (
            <div className="testimonial">
                <i class="fas fa-quote-right"></i>
                <img 
                    src="https://i2.wp.com/www.diarlu.com/wp-content/uploads/2019/09/cara-mujer-joven.jpg?resize=500%2C500&ssl=1" 
                    alt="nombre de la persona" 
                    className="testimonial-img">
                </img>
                <p className="testimonial-description">
                    Servioficios está ayudando a la gente que no necesariamente tienen las habilidades tecnicas o tiempo, a conectar directamente con los trabajadores. Veo eso como un verdadero cambio respecto a la forma en la que estamos acostumbrados.
                </p>
                <h3 className="testimonial-title">Mariza Miyer</h3>
                <div className="testimonial-zone">
                    <span className="testimonial-location">Capital Federal, </span>
                    <span className="testimonial-state">Buenos Aires</span>
                </div>
            </div>
        );
    }
}

export default Testimonials;