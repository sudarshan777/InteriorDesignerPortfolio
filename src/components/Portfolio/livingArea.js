import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getLivingAreasQuery } from "../../queries/queries";
const url = "https://yashadesignstudioserver.herokuapp.com/images";

class LivingArea extends Component {
  displayLivingAreas = () => {
    let data = this.props.data;
    if (data.loading) {
      return <div>Loading Kitchens...</div>;
    } else {
      return data.livingAreas.map((livingArea) => {
        return (
          <div key={livingArea.id}>
            <h2>{livingArea.name}</h2>
            <p>{livingArea.description}</p>
            <img
              alt={livingArea.name}
              src={`${url}/${livingArea.pictureUrl}`}
              width="500"
              height="500"
            />
          </div>
        );
      });
    }
  };
  render() {
    return (
      <div>
        <ul>{this.displayLivingAreas()}</ul>
      </div>
    );
  }
}

export default graphql(getLivingAreasQuery)(LivingArea);
