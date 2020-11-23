import React, { Component } from 'react';
import { NavLink} from "react-router-dom";

class ProfessionalProfile extends Component {


    handleClick = (e) => {
        e.preventDefault();
    }

    render() {

        const { imgUrl, name, currency, hourPrice, job, rating, description, zone } = this.props;

        return (
            <div className="profile-container">
                <div className="profile-card">
                    <NavLink className="profile-button-back" to="/servicios">
                        <i class="fas fa-chevron-circle-left"></i>
                        <span className="button-back-text">volver</span>
                    </NavLink>

                    <div className="profile-img-container">
                        <img className="profile-img" src={imgUrl} alt={name} />
                    </div>

                    <div className="profile-info">
                        <span className="profile-job">{job}</span>
                        <span className="profile-rating">
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
                        <div className="profile-name">{
                                name[0].toUpperCase()+name.slice(1, name.indexOf(" "))
                                + " " 
                                + name[name.indexOf(" ")+1].toUpperCase()+name.slice(name.indexOf(" ")+2)
                            }</div>
                        <div className="profile-zone">{zone}</div>
                        <p className="profile-description">{description}</p>
                        <button 
                        className="profile-button" 
                        onClick={this.handleClick}>
                            <span className="profile-button-text">CONTRATAR DESDE</span>
                            <span className="profile-currency">{currency}</span>
                            <span className="profile-price">${hourPrice}</span>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProfessionalProfile;