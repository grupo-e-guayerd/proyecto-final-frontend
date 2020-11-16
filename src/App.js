import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";



import Home from "./Home/Home.js"
import './App.css';
import Footer from "./Footer/Footer.js";
import NavBar from "./NavBar/NavBar";
import AboutUsPage from "./AboutUsPage/AboutUPage.js";
import ServicesPage from "./ServicesPage/ServicesPage.js";

export default class App extends React.Component{
  render(){
    return(
      <div className="App">
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/"><Home /></Route>
            <Route exact path="/servicios"><ServicesPage /></Route>
            <Route exact path="/nosotros"><AboutUsPage /></Route>
            <Route path="/*">{/* TODO NotFoundPage */}</Route>
          </Switch>
          <Footer/>
        </Router>
      </div>
    )
  }
}
