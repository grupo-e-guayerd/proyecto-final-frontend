import React from "react";
import ProfessionalList from "../ProfessionalList/ProfessionalList";

export default class Ranking extends React.Component {
  constructor() {
    super();
    this.state = {
      arrayMostPopulars: [],
    };
  }

  orderRating = (array) => {
    array.sort(function (a, b) {
      if (a.rating < b.rating) {
        return 1;
      }
      if (a.rating > b.rating) {
        return -1;
      }
      return 0;
    });
  };

  componentDidMount() {
    fetch("http://localhost:3001/professionals") /* TODO */
      .then((response) => response.json())
      .then((jsonResponse) => {
        this.orderRating(jsonResponse);
        const bestProfessionals = [];
        for (let i = 0; i < 6; i++) {
          bestProfessionals.push(jsonResponse[i]);
        }
        this.setState({ arrayMostPopulars: bestProfessionals });
      })
      .catch((error) => {
        /* TODO catch handler */
      });
  }

  render() {
    return (
      <>
        <h2 className="rating-title">
          Algunos de nuestros mejores profesionales
        </h2>
        <ProfessionalList
          loadData={this.props.loadData}
          arrayWorkersToShow={this.state.arrayMostPopulars}
        />
      </>
    );
  }
}
