import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Header extends Component {
  render() {
    return (
      <div>
        <Link to="/"> Home</Link> |<Link to="/work"> Work</Link>|
        <Link to="/contact"> Contact</Link>
      </div>
    );
  }
}

export default Header;
