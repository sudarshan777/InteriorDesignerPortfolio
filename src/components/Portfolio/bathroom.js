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
      return data.bathrooms.map((bathroom) => {
        return (
          <div key={bathroom.id}>
            <h2>{bathroom.name}</h2>
            <p>{bathroom.description}</p>
            <img
              alt={bathroom.name}
              src={`${url}/${bathroom.pictureUrl}`}
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
        <ul>{this.displayBathrooms()}</ul>
      </div>
    );
  }
}

export default graphql(getBathroomsQuery)(Bathroom);
