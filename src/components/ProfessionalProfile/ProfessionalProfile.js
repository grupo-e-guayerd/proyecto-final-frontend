import React, { Component } from 'react';
import { NavLink} from "react-router-dom";
import RatingStars from "./../RatingStars/RatingStars"

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
                        <span className="profile-job">{job&& ( job[0].toUpperCase()+job.slice(1) ) }</span>
                        <span className="profile-rating"><RatingStars rating={rating} /></span>
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