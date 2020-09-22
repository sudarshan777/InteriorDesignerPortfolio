import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getLivingAreasQuery } from "../../queries/queries";
const url = "https://yashadesignstudioserver.herokuapp.com/images";

class LivingArea extends Component {
  displayLivingAreas = () => {
    let data = this.props.data;
    if (data.loading) {
      return <div>Loading Living Areas...</div>;
    } else {
      if (data.livingAreas.length !== 0) {
        return (
          <div
            id="carouselExampleCaptions"
            className="carousel slide carousel-fade"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              {data.livingAreas.map((index) => {
                return (
                  <li
                    data-target="#carouselExampleCaptions"
                    data-slide-to={`${index}`}
                    key={index}
                  ></li>
                );
              })}
            </ol>
            <div className="carousel-inner">
              {data.livingAreas.map((livingArea) => {
                return (
                  <div className="carousel-item-active" key={livingArea.id}>
                    <img
                      src={`${url}/${livingArea.pictureUrl}`}
                      className="d-block w-100"
                      alt={livingArea.name}
                    />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>{livingArea.name}</h5>
                      <p>{livingArea.description}</p>
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
    return <div>{this.displayLivingAreas()}</div>;
  }
}

export default graphql(getLivingAreasQuery)(LivingArea);
