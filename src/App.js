import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";



import HomePage from "./HomePage/HomePage.js"
import './App.css';
import Footer from "./components/Footer/Footer.js";
import NavBar from "./components/NavBar/NavBar";
import AboutUsPage from "./components/AboutUsPage/AboutUsPage";
import ServicesPage from "./components/ServicesPage/ServicesPage.js";

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
            <Route path="/*">{/* TODO NotFoundPage */}</Route>
          </Switch>
          <Footer/>
        </Router>
      </div>
    )
  }
}
