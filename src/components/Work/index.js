import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Work extends Component {
  render() {
    return (
      <div>
        Our Projects
        <Link to="/work-kitchen"> Kitchen</Link> |
        <Link to="/work-bathroom"> Bathroom</Link> |
        <Link to="/work-bedroom"> Bedroom</Link> |
        <Link to="/work-livingArea"> Living Area</Link>
      </div>
    );
  }
}

export default Work;
