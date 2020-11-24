import React from "react";
import { Redirect } from "react-router-dom";
import Search from "../Search/Search"
import Video from "../../assets/video.mp4";

export default class Banner extends React.Component
{
  constructor() {
    super();
    this.state = {
      subjectSearch: "",
      userSearch: "",
      redirect: false
    }
  }

  searchHandler = (subjectValue, searchValue)=>{
    this.setState({subjectSearch: subjectValue});
    this.setState({userSearch: searchValue});
    this.setState({redirect: true});
  }

  render() {
    return ( 
      <>
        { this.state.redirect && ( 
          <>
            {localStorage.setItem("subjectSearch", this.state.subjectSearch)}
            {localStorage.setItem("userSearch", this.state.userSearch)}
            <Redirect to="/servicios" /> 
          </>
        )}
        <div className="video-container">
          <video className="video" autoplay="on" loop="on" muted="on">
            <source src={Video}></source>
          </video>
        </div>

        <div className="carousel-caption">
          <h3 className="banner-title">¿Qué necesitas?</h3>
          <Search 
            placeholder="Busca el oficio deseado" 
            searchHandler={this.searchHandler}
          />
        </div>
      </>  
    )
  }
}