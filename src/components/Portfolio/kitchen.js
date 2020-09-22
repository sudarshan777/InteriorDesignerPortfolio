import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getKitchensQuery } from "../../queries/queries";
const url = "https://yashadesignstudioserver.herokuapp.com/images";

class Kitchen extends Component {
  displayKitchens = () => {
    let data = this.props.data;
    if (data.loading) {
      return <div>Loading Kitchens...</div>;
    } else {
      if (data.kitchens.length !== 0) {
        return (
          <div
            id="carouselExampleCaptions"
            className="carousel slide carousel-fade"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              {data.kitchens.map((index) => {
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
              {data.kitchens.map((kitchen) => {
                return (
                  <div className="carousel-item active" key={kitchen.id}>
                    <img
                      src={`${url}/${kitchen.pictureUrl}`}
                      className="d-block w-100"
                      alt={kitchen.name}
                    />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>{kitchen.name}</h5>
                      <p>{kitchen.description}</p>
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
    return <div className="container-fluid">{this.displayKitchens()}</div>;
  }
}

export default graphql(getKitchensQuery)(Kitchen);
