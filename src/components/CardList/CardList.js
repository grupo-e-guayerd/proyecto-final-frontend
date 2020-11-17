import React, { Component } from 'react';
import Card from "../Card/Card";

class CardList extends Component {
    render() {
        const { arrayWorkersToShow } = this.props;
        return (
            <>
                <div className="card-list-GE">
                    {
                        arrayWorkersToShow && (
                            arrayWorkersToShow.map(worker=>{
                                return <Card 
                                    name={worker.name} 
                                    hourPrice={worker.hourPrice}
                                    job={worker.job} 
                                    rating={worker.rating} 
                                    description={worker.description}
                                    currency={worker.currency}
                                    id={worker.id}
                                    imgUrl={worker.imgUrl}
                                    key={worker._id}
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