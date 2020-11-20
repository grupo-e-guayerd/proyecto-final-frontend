import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class Card extends Component {
    render() {
        let { id, imgUrl, name, currency, hourPrice, job, rating, description } = this.props;
        return (
            <>
                {/* CARD COMPONENT */}
                <div className="card-GE">
                    {/* CARD IMAGE */}
                    <div className="card-img-container-GE">
                        <img src={imgUrl} alt="worker" className="card-img-GE" />
                    </div>

                    {/* CARD INFO */}
                    <div className="card-info-GE">
                        <h3 className="card-name-GE">
                            <span>{
                                name[0].toUpperCase()+name.slice(1, name.indexOf(" "))
                                + " " 
                                + name[name.indexOf(" ")+1].toUpperCase()+name.slice(name.indexOf(" ")+2)
                            }</span>
                            <span className="card-price-GE">{currency.toUpperCase()} ${hourPrice}/h</span>
                        </h3>
                        <h4 className="card-job-GE">{job[0].toUpperCase()+job.slice(1)}</h4>
                       
                        <span className="card-rating-GE">
                        {/* <i className="fas fa-star-half-alt" /> */}
                        {
                            rating === 1 && (
                                <>
                                    <i className="fas fa-star" />
                                    <i className="far fa-star" />
                                    <i className="far fa-star" />
                                    <i className="far fa-star" />
                                    <i className="far fa-star" />
                                </>
                            )
                        }
                        {
                            rating === 2 && (
                                <>
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="far fa-star" />
                                    <i className="far fa-star" />
                                    <i className="far fa-star" />
                                </>
                            )
                        }
                        {
                            rating === 3 && (
                                <>
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="far fa-star" />
                                    <i className="far fa-star" />
                                </>
                            )
                        }
                        {
                            rating === 4 && (
                                <>
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="far fa-star" />
                                </>
                            )
                        }
                        {
                            rating === 5 && (
                                <>
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                </>
                            )
                        }
                        </span>

                        <p className="card-description-GE">
                            {description}
                        </p>
                        <NavLink className="card-profile-GE" to="/profile">Ver perfil</NavLink>
                    </div>
                </div>
            </>
        );
    }
}

export default Card;