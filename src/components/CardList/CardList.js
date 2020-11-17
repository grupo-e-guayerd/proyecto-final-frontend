import React, { Component } from 'react';
import Card from "../Card/Card";

class CardList extends Component {
    render() {
        const { arrayProfessionals } = this.props;
        return (
            <>
                <div className="card-list-GE">
                    {
                        arrayProfessionals && (
                            arrayProfessionals.map(professional=>{
                                return <Card 
                                    name={professional.name} 
                                    hourPrice={professional.hourPrice}
                                    job={professional.job} 
                                    rating={professional.rating} 
                                    description={professional.description}
                                    currency={professional.currency}
                                    id={professional.id}
                                    imgUrl={professional.imgUrl}
                                    key={professional._id}
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