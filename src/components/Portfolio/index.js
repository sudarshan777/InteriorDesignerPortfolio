import React from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const url = "https://yashadesignstudioserver.herokuapp.com/images";
const Portfolio = () => {
  let history = useHistory();

  return (
    <div className="row row-cols-1 row-cols-md-2">
      <div className="col mb-4">
        <div className="card">
          <img
            alt="livingArea"
            src={url + "/livingArea.jpg"}
            onClick={(e) => history.push("portfolio-livingArea")}
            className="card-img-top"
          />
          <div className="card-body">
            <Link
              className=" card-title
              stretched-link"
              to="/portfolio-livingArea"
            >
              Living Area
            </Link>
            <p className="card-text">
              Quis in tempor fugiat sit excepteur consequat.
            </p>
          </div>
        </div>
      </div>
      <div className="col mb-4">
        <div className="card">
          <img
            alt="bedroom"
            src={url + "/bedroom.jpg"}
            onClick={(e) => history.push("portfolio-bedroom")}
            className="card-img-top"
          />
          <div className="card-body">
            <Link
              className=" card-title
              stretched-link"
              to="/portfolio-bedroom"
            >
              Bedroom
            </Link>
            <p className="card-text">
              Quis in tempor fugiat sit excepteur consequat.
            </p>
          </div>
        </div>
      </div>
      <div className="col mb-4">
        <div className="card">
          <img
            alt="kitchen"
            src={url + "/kitchen.jpg"}
            onClick={(e) => history.push("portfolio-kitchen")}
            className="card-img-top"
          />
          <div className="card-body">
            <Link
              className=" card-title
              stretched-link"
              to="/portfolio-kitchen"
            >
              Kitchen
            </Link>

            <p className="card-text">
              Quis in tempor fugiat sit excepteur consequat.
            </p>
          </div>
        </div>
      </div>
      <div className="col mb-4">
        <div className="card">
          <img
            alt="bathroom"
            src={url + "/bathroom.jpg"}
            onClick={(e) => history.push("portfolio-bathroom")}
            className="card-img-top"
          />
          <div className="card-body">
            <Link
              className=" card-title
              stretched-link"
              to="/portfolio-bathroom"
            >
              Bathroom
            </Link>
            <p className="card-text">
              Quis in tempor fugiat sit excepteur consequat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
