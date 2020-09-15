import React from "react";
import { useHistory } from "react-router-dom";

const url = "http://localhost:4000/images";
const Portfolio = () => {
  let history = useHistory();

  return (
    <div>
      <h2> Our Portfolio</h2>
      <img
        alt="livingArea"
        src={url + "/livingArea.jpg"}
        width="300"
        height="300"
        onClick={(e) => history.push("portfolio-livingArea")}
      />
      <img
        alt="bedroom"
        src={url + "/bedroom.jpg"}
        width="300"
        height="300"
        onClick={(e) => history.push("portfolio-bedroom")}
      />
      <img
        alt="kitchen"
        src={url + "/kitchen.jpg"}
        width="300"
        height="300"
        onClick={(e) => history.push("portfolio-kitchen")}
      />
      <img
        alt="bathroom"
        src={url + "/bathroom.jpg"}
        width="300"
        height="300"
        onClick={(e) => history.push("portfolio-bathroom")}
      />
    </div>
  );
};

export default Portfolio;
