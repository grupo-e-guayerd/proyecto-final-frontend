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
        fetch("http://localhost:3001/professionals")
        .then((response)=>response.json())
        .then((jsonResponse)=>{this.setState({arrayResponse: jsonResponse})})
        .catch((error)=>{ /* TODO catch handler */ });
    }

    render() {
        return (
            <div className="service-page-container">
                <SideBar />
                <CardList arrayResponse={this.state.arrayResponse} />
            </div>
        )
    }
}