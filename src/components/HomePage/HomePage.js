import React from "react";
import Banner from "../Banner/Banner";
import Ranking from "../Ranking/Ranking";


export default class HomePage extends React.Component
{
    render() {
        return (
            <div>
                <Banner />
                <Ranking loadData={this.props.loadData} />
            </div>
        )
    }
}