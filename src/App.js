import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import HomePage from "./Components/HomePage/HomePage"
import './App.css';
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";
import AboutUsPage from "./Components/AboutUsPage/AboutUsPage";
import ServicesPage from "./Components/ServicesPage/ServicesPage";

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
