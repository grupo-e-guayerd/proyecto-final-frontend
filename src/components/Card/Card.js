import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import RatingStars from '../RatingStars/RatingStars';

class Card extends Component {

    handleClickProfile = () => {
        const data = this.props;
        this.props.loadData(data);
    }

    render() {
        let { imgUrl, name, currency, hourPrice, job, rating, description } = this.props;
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
                        <span className="card-rating-GE"><RatingStars rating={rating} /></span>

                        <p className="card-description-GE">
                            {description}
                        </p>
                        
                        {/* PROFILE */} 
                        <NavLink 
                            className="card-profile-GE" 
                            to="/perfil"
                            onClick={this.handleClickProfile}
                        >
                            Ver perfil
                        </NavLink>
                    </div>
                </div>
            </>
        );
    }
}

export default Card;