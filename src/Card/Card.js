import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class Card extends Component {
    render() {
        return (
            <>
                {/* CARD COMPONENT */}
                <div className="card">
                    {/* CARD IMAGE */}
                    <div className="card-img-container">
                        <img src="https://www.machinecurve.com/wp-content/uploads/2019/07/thispersondoesnotexist-1.jpg" alt="worker" className="card-img" />
                    </div>

                    {/* CARD INFO */}
                    <div className="card-info">
                        <h3 className="card-name">Carlos Perez <span className="card-price">$400/h</span></h3>
                        <h4 className="card-job">Plomero</h4>
                        <span className="card-rating">
                            <i className="fas fa-star"></i><i class="fas fa-star-half-alt"></i><i class="far fa-star"></i>
                        </span>
                        <p className="card-description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vulputate consectetur erat.
                        </p>
                        <NavLink className="card-profile" to="/profile">Ver perfil</NavLink>
                    </div>
                </div>
            </>
        );
    }
}

export default Card;