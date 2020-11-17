import React, { Component } from "react";
import CardList from "../CardList/CardList";
import SideBar from "../SideBar/SideBar";


export default class ServicesPage extends Component
{
    constructor() {
        super();
        this.state = {
            userSearch: "",
            arrayResponse: []
        }
    }

    componentDidMount()
    {
        fetch("https://api-servi-oficios.herokuapp.com/professionals") /* TODO */
        .then((response)=>response.json())
        .then((jsonResponse)=>{this.setState({arrayResponse: jsonResponse})})
        .catch((error)=>{ /* TODO catch handler */ });
    }

    render() {
        return (
            <div className="service-page-container">
                <SideBar />
                <CardList arrayProfessionals={this.state.arrayResponse} />
            </div>
        )
    }
}