import React from "react";


export default class RatingStars extends React.Component
{
    render(){
        const { rating } = this.props;
        return (
            <>
            {
                rating === 1 && (
                    <>
                        <i className="fas fa-star" />
                        <i className="far fa-star" />
                        <i className="far fa-star" />
                        <i className="far fa-star" />
                        <i className="far fa-star" />
                    </>
                )
            }
            {
                rating === 2 && (
                    <>
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="far fa-star" />
                        <i className="far fa-star" />
                        <i className="far fa-star" />
                    </>
                )
            }
            {
                rating === 3 && (
                    <>
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="far fa-star" />
                        <i className="far fa-star" />
                    </>
                )
            }
            {
                rating === 4 && (
                    <>
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="far fa-star" />
                    </>
                )
            }
            {
                rating === 5 && (
                    <>
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                    </>
                )
            }
            </>
        )
    }
}