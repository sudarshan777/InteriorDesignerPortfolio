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
      return data.kitchens.map((kitchen) => {
        return (
          <div key={kitchen.id}>
            <h2>{kitchen.name}</h2>
            <p>{kitchen.description}</p>
            <img
              alt={kitchen.name}
              src={`${url}/${kitchen.pictureUrl}`}
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
        <ul>{this.displayKitchens()}</ul>
      </div>
    );
  }
}

export default graphql(getKitchensQuery)(Kitchen);
