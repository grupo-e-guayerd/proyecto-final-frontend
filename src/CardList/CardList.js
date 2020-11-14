import React, { Component } from 'react';
import Card from "../Card/Card";

class CardList extends Component {
    render() {
        return (
            <>
                <div className="card-list">

                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    
                    

                    {/* {
                        arrayWorkers && (
                            arrayWorkers.map(worker => {
                                <Card 
                                    mame={worker.name} 
                                    price={worker.price}
                                    job={worker.job} 
                                    rating={worker.rating} 
                                    description={worker.description}
                                    id={worker.id}
                                    img={worker.img}
                                />
                            })
                        )
                    } */}
                </div>
            </>
        );
    }
}

export default CardList;