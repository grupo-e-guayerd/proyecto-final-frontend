import React from "react";
import Banner from "./Carousel/Banner.js";
import Ranking from "./Ranking/Ranking";
import CardList from "../components/CardList/CardList";


export default class HomePage extends React.Component {

    constructor() {
        super();
        this.state = {
            arrayResponse: []
        }
    }

/*     componentDidMount() {
        fetch("https://api-servi-oficios.herokuapp.com/professionals")
            .then((response) => response.json())
            .then((jsonResponse) => { this.setState({ arrayResponse: jsonResponse }) })
            .catch((error) => { });
    } */

    render() {
        return (
            <div>
                <Banner />
                <Ranking />
            </div>
        )
    }
}