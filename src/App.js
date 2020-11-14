import React from "react";
import Home from "./Home/Home.js"
import './App.css';
import NavBar from "./NavBar/NavBar";
import { BrowserRouter as Router } from "react-router-dom";
import CardList from "./CardList/CardList";



export default App;
export default class App extends React.Component{
  render(){
    return(
      <div className="App">
      
      <Router>
                <NavBar />
                <CardList />
          <Home></Home>
            </Router>
          
      </div>
    )
  }
}
