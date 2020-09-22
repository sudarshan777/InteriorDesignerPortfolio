import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Header extends Component {
  render() {
    return (
      <div className="container-fluid ">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link className="navbar-brand" to="/">
            YDS
          </Link>
          <Link className="navbar-brand" to="/portfolio">
            Portfolio
          </Link>
          <Link className="navbar-brand" to="/testimonials">
            Testimonials
          </Link>
          <Link className="navbar-brand" to="/shop">
            Shop
          </Link>
          <Link className="navbar-brand" to="/contact">
            Contact
          </Link>
        </nav>
      </div>
    );
  }
}

export default Header;
