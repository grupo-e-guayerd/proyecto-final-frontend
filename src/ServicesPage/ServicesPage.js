import React, { Component } from "react";
import CardList from "../CardList/CardList";


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
            <CardList />
        )
    }
}