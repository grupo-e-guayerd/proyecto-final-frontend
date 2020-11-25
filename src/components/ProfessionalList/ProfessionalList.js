import React, { Component } from 'react';
import ProfessionalCard from "../ProfessionalCard/ProfessionalCard";

export default class ProfessionalList extends Component {
    render() {
        const { arrayWorkersToShow } = this.props;
        let auxArray = []
        let pos = -1;
        return (
            <>
                <div className="card-list-GE">
                {
                    arrayWorkersToShow && (
                        arrayWorkersToShow.map(worker=>{
                            let LS_FavWorkers = localStorage.getItem("favWorkers");
                            if (LS_FavWorkers) { 
                                auxArray = JSON.parse(LS_FavWorkers); 
                                pos = auxArray.indexOf(worker._id);
                            }

                            return (
                                <ProfessionalCard 
                                    _id={worker._id}
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
                                    isFavorite={ pos !== -1 ? true : false }
                                    loadData={this.props.loadData}
                                />
                            )
                        })
                    )
                }
                </div>
            </>
        );
    }
}
