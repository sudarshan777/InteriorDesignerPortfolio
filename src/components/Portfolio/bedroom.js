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
      return data.bedrooms.map((bedroom) => {
        return (
          <div key={bedroom.id}>
            <h2>{bedroom.name}</h2>
            <p>{bedroom.description}</p>
            <img
              alt={bedroom.name}
              src={`${url}/${bedroom.pictureUrl}`}
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
        <ul>{this.displayBedrooms()}</ul>
      </div>
    );
  }
}

export default graphql(getBedroomsQuery)(Bedroom);
