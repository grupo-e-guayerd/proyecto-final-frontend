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

    render() {
        return (
            <CardList />
        )
    }
}