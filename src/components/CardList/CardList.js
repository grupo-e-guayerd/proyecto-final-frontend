import React, { Component } from 'react';
import Card from "../Card/Card";

class CardList extends Component {
    render() {
        const { arrayResponse } = this.props;
        return (
            <>
                <div className="card-list-GE">
                    {console.log(arrayResponse)}
                    {
                        arrayResponse && (
                            arrayResponse.map(professional=>{
                                return <Card 
                                    name={professional.name} 
                                    hourPrice={professional.hourPrice}
                                    job={professional.job} 
                                    rating={professional.rating} 
                                    description={professional.description}
                                    currency={professional.currency}
                                    id={professional.id}
                                    imgUrl={professional.imgUrl}
                                />
                                console.log("vuelta")
                            })
                        )
                    }
                </div>
            </>
        );
    }
}

export default CardList;