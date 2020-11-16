import React from "react"
import Banner from "./Carousel/Banner.js"
import Ranking from "./Ranking/Ranking"

export default class HomePage extends React.Component{
    render (){
        return( 
            <div>
                <Banner />
                <Ranking />
            </div>
        )
    }
}