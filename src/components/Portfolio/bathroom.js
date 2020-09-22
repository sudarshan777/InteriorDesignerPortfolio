import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getBathroomsQuery } from "../../queries/queries";
const url = "https://yashadesignstudioserver.herokuapp.com/images";

class Bathroom extends Component {
  displayBathrooms = () => {
    let data = this.props.data;
    if (data.loading) {
      return <div>Loading Bathrooms...</div>;
    } else {
      if (data.bathrooms.length !== 0) {
        return (
          <div
            id="carouselExampleCaptions"
            className="carousel slide carousel-fade"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              {data.bathrooms.map((index) => {
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
              {data.bathrooms.map((bathroom) => {
                return (
                  <div className="carousel-item active" key={bathroom.id}>
                    <img
                      src={`${url}/${bathroom.pictureUrl}`}
                      className="d-block w-100"
                      alt={bathroom.name}
                    />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>{bathroom.name}</h5>
                      <p>{bathroom.description}</p>
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
    return (
      <div>
        <ul>{this.displayBathrooms()}</ul>
      </div>
    );
  }
}

export default graphql(getBathroomsQuery)(Bathroom);
