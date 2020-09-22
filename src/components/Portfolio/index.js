import React from "react";
import { useHistory } from "react-router-dom";

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
            <h5 className="card-title">Living Area</h5>
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
            <h5 className="card-title">Bedroom </h5>
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
            <h5 className="card-title">Kitchen </h5>
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
            <h5 className="card-title">Bathroom </h5>
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
