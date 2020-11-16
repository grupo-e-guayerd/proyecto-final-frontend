import React, { Component } from "react";
import CardList from "../CardList/CardList";
import SideBar from "../SideBar/SideBar";


export default class ServicesPage extends Component
{
    constructor() {
        super();
        this.state = {
            /* userSearch: "",
            responseResult: {} */
        }
    }

    componentDidMount()
    {
        
    }

    render() {
        return (
            <div className="service-page-container">
                <SideBar />
                <CardList />
            </div>
        )
    }
}