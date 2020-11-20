import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

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

export default class App extends React.Component
{
  render() {
    return (
      <div className="App">
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/"><HomePage /></Route>
            <Route exact path="/servicios"><ServicesPage /></Route>
            <Route exact path="/nosotros"><AboutUsPage /></Route>
            
            <Route exact path="/login"><Login /></Route>
            <Route exact path="/loginUser"><LoginUser /></Route>
            <Route exact path="/loginProfessional"><LoginProfessional /></Route>
            
            <Route exact path="/signupUser"><SignupUser /></Route>
            <Route exact path="/signupProfessional"><SignupProfessional /></Route>
            
            <Route path="/*">{/* TODO NotFoundPage */}</Route>
          </Switch>
          <Footer/>
        </Router>
      </div>
    )
  }
}
