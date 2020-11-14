import React from "react";
import Home from "./Home/Home.js"
import './App.css';
import Footer from "./Footer/Footer.js";

export default class App extends React.Component{
  render(){
    return(
      <div className="App">
          <Home></Home>
          <Footer></Footer>
      </div>
    )
  }
}