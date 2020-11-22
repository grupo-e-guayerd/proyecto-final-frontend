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
                                zone={worker.zone}
                                key={worker._id}
                                loadData={this.props.loadData}
                            />
                        })
                    )
                }
                </div>
            </>
        );
    }
}

export default CardList;