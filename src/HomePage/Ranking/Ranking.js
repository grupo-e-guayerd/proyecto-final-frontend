import React from "react"
import CardList from "../../components/CardList/CardList"

export default class Ranking extends React.Component 
{
    constructor() {
        super();
        this.state = {
            arrayMostPopulars: []
        }
    }

    componentDidMount()
    {
        /* TODO Request data from the server. 
            Se van pedir los profesionales registrados y se van a agregar al arreglo del estado los (por ejemplo)
            20 con mejor ranking, */
    }

    render (){
        return (
            <>
                <h2>{/* TODO */}</h2>
                <CardList arrayMostPopulars={this.state.arrayMostPopulars} />
            </>
        )
    }
}