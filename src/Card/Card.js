import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class Card extends Component {
    render() {
        /* TODO Este componente debe recibir un objeto con los datos de un profesional */
        return (
            <>
                {/* CARD COMPONENT */}
                <div className="card-GE">
                    {/* CARD IMAGE */}
                    <div className="card-img-container-GE">
                        <img src="https://www.machinecurve.com/wp-content/uploads/2019/07/thispersondoesnotexist-1.jpg" alt="worker" className="card-img-GE" />
                    </div>

                    {/* CARD INFO */}
                    <div className="card-info-GE">
                        <h3 className="card-name-GE">
                            <span>Carlos Pérez</span>
                            <span className="card-price-GE">$400/h</span>
                        </h3>
                        <h4 className="card-job-GE">Plomero</h4>
                       
                        <span className="card-rating-GE">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i class="fas fa-star-half-alt" />
                            <i class="far fa-star" />
                        </span>

                        <p className="card-description-GE">
                            Hola soy Carlos, soy plomero y cobro $400 la hora, me gusta el modo oscuro, también soy gasista, chofer y martillero público.
                        </p>
                        <NavLink className="card-profile-GE" to="/profile">Ver perfil</NavLink>
                    </div>
                </div>
            </>
        );
    }
}

export default Card;