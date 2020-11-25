import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "./Components/HomePage/HomePage"
import './App.css';
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";
import AboutUsPage from "./Components/AboutUsPage/AboutUsPage";
import ServicesPage from "./Components/ServicesPage/ServicesPage";

import SignupUser from "./Components/Signup/SignupUser";
import SignupProfessional from "./Components/Signup/SignupProfessional";

import Login from "./Components/Login/Login";
import LoginUser from "./Components/Login/LoginUser";
import LoginProfessional from "./Components/Login/LoginProfessional";
import ProfessionalProfile from "./Components/ProfessionalProfile/ProfessionalProfile";
// import Favs from "./Favs/Favs";

export default class App extends React.Component {


	constructor() {
		super();	
    this.state = {
      professionalData:{}
    }
  }

	loadData = (data) => { this.setState({professionalData:data}) }

  render() {
    return (
      <div className="App">
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/"><HomePage loadData={this.loadData} /></Route>
            <Route exact path="/servicios"><ServicesPage loadData={this.loadData} /></Route>
            <Route exact path="/nosotros"><AboutUsPage /></Route>

            <Route exact path="/login"><Login /></Route>
            <Route exact path="/loginUser"><LoginUser /></Route>
            <Route exact path="/loginProfessional"><LoginProfessional /></Route>

            <Route exact path="/signupUser"><SignupUser /></Route>
            <Route exact path="/signupProfessional"><SignupProfessional /></Route>
            {/* <Route exact path="/favoritos"><Favs /></Route> */}
            <Route exact path="/perfil">
            	<ProfessionalProfile
                _id={this.state.professionalData._id}
                name={this.state.professionalData.name}
                imgUrl={this.state.professionalData.imgUrl}
                currency={this.state.professionalData.currency}
                hourPrice={this.state.professionalData.hourPrice}
                job={this.state.professionalData.job}
                rating={this.state.professionalData.rating}
                description={this.state.professionalData.description}
                isFavorite={this.state.professionalData.isFavorite}
                zone={this.state.professionalData.zone}
              />
            </Route>

            {/* TODO */}
            <Route path="/*"><h2>404 - not found</h2></Route>
          </Switch>
          <Footer />
        </Router>
      </div>
    )
  }
}
