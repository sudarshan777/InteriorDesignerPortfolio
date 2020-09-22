import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getBedroomsQuery } from "../../queries/queries";
const url = "https://yashadesignstudioserver.herokuapp.com/images";

class Bedroom extends Component {
  displayBedrooms = () => {
    let data = this.props.data;
    if (data.loading) {
      return <div>Loading Bedrooms...</div>;
    } else {
      if (data.bedrooms.length !== 0) {
        return (
          <div
            id="carouselExampleCaptions"
            className="carousel slide carousel-fade"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              {data.bedrooms.map((index) => {
                return (
                  <li
                    data-target="#carouselExampleCaptions"
                    data-slide-to={`${index}`}
                    className="active"
                    key={index}
                  ></li>
                );
              })}
            </ol>
            <div className="carousel-inner">
              {data.bedrooms.map((bedroom) => {
                return (
                  <div className="carousel-item active" key={bedroom.id}>
                    <img
                      src={`${url}/${bedroom.pictureUrl}`}
                      className="d-block w-100"
                      alt={bedroom.name}
                    />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>{bedroom.name}</h5>
                      <p>{bedroom.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleCaptions"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleCaptions"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        );
      }
    }
  };
  render() {
    return <div className="container-fluid">{this.displayBedrooms()}</div>;
  }
}

export default graphql(getBedroomsQuery)(Bedroom);
