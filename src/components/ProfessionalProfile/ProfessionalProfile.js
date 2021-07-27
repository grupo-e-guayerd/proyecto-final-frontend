import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import RatingStars from "./../RatingStars/RatingStars";

class ProfessionalProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      init_point: "",
      isFavorite: this.props.isFavorite,
    };
  }

  setNewFavorite = (event) => {
    const ID_NEW_FAV = event.target.attributes._id.value;
    let LS_FavWorkers = localStorage.getItem("favWorkers");
    let auxArray = [];

    if (LS_FavWorkers) {
      auxArray = JSON.parse(LS_FavWorkers);
      const pos = auxArray.indexOf(ID_NEW_FAV);
      if (pos === -1) {
        auxArray.push(ID_NEW_FAV);
        localStorage.setItem("favWorkers", JSON.stringify(auxArray));
      }
    } else {
      auxArray.push(ID_NEW_FAV);
      localStorage.setItem("favWorkers", JSON.stringify(auxArray));
    }

    this.setState({ isFavorite: true });
  };

  removeFavorite = (event) => {
    const ID_REMOVE = event.target.attributes._id.value;
    let LS_FavWorkers = localStorage.getItem("favWorkers");
    let auxArray = [];
    if (LS_FavWorkers) {
      auxArray = JSON.parse(LS_FavWorkers);
      const posDelete = auxArray.indexOf(ID_REMOVE);
      if (posDelete !== -1) {
        auxArray.splice(posDelete, 1);
        localStorage.setItem("favWorkers", JSON.stringify(auxArray));
      }
    }

    this.setState({ isFavorite: false });
  };

  componentDidMount() {
    fetch("http://localhost:3001/mercadopago")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ init_point: data.init_point });
      });
  }

  render() {
    const {
      _id,
      imgUrl,
      name,
      currency,
      hourPrice,
      job,
      rating,
      description,
      zone,
    } = this.props;
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
            <span className="profile-job">
              {job && job[0].toUpperCase() + job.slice(1)}
            </span>
            <span className="icon-favorite">
              {this.state.isFavorite ? (
                <i
                  _id={_id}
                  className="fas fa-heart"
                  title="Quitar de favoritos"
                  onClick={this.removeFavorite}
                />
              ) : (
                <i
                  _id={_id}
                  className="far fa-heart"
                  title="Marcar como favorito"
                  onClick={this.setNewFavorite}
                />
              )}
            </span>
            <div className="profile-name">
              {name &&
                name[0].toUpperCase() +
                  name.slice(1, name.indexOf(" ")) +
                  " " +
                  name[name.indexOf(" ") + 1].toUpperCase() +
                  name.slice(name.indexOf(" ") + 2)}
            </div>
            <span className="profile-rating">
              <RatingStars rating={rating} />
            </span>
            <div className="profile-zone">{zone}</div>
            <p className="profile-description">{description}</p>
            <a className="profile-button" href={this.state.init_point}>
              <span className="profile-button-text">CONTRATAR DESDE </span>
              {/* <span className="profile-currency">{currency} </span> */}
              <span className="profile-price">${hourPrice}</span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfessionalProfile;
