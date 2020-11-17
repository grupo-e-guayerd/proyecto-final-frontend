import React, { Component } from "react";
import CardList from "../CardList/CardList";
import Search from "../Search/Search";
import SideBar from "../SideBar/SideBar";


export default class ServicesPage extends Component
{
    constructor() {
        super();
        this.state = {
            arrayResponse: [],
            arrayWorkersToShow: []
        }
    }

    normalizeString = (string)=>{return string.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()}


    
    searchHandler = (searchValue)=>{
        let auxArray = this.state.arrayResponse.filter((worker)=>{
            return this.normalizeString(worker.job) === this.normalizeString(searchValue);
        })
        this.setState({arrayWorkersToShow: auxArray});
    }

    componentDidMount()
    {
        fetch("https://api-servi-oficios.herokuapp.com/professionals") /* TODO */
        .then((response)=>response.json())
        .then((jsonResponse)=>{this.setState({arrayResponse: jsonResponse})})
        .catch((error)=>{ /* TODO catch handler */ });
    }

    render() {
        const { arrayResponse, arrayWorkersToShow } = this.state;
        return (
            <div className="service-page-container">
                <SideBar />
                <div className="services-box-GE">
                    <div className="search-services-container">
                        <Search
                            placeholder="Busca por categoría" 
                            searchHandler={this.searchHandler} 
                        />
                    </div>
                    <CardList arrayWorkersToShow={arrayWorkersToShow.length > 0 ? arrayWorkersToShow : arrayResponse} />
                </div>
            </div>
        
            
        )
    }
}