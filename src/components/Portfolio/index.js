import React from "react";
import { useHistory } from "react-router-dom";

const url = "https://yashadesignstudioserver.herokuapp.com/images";
const Portfolio = () => {
  let history = useHistory();

  return (
    <div>
      <h2> Our Portfolio</h2>
      <img
        alt="livingArea"
        src={url + "/livingArea.jpg"}
        onClick={(e) => history.push("portfolio-livingArea")}
        width="500"
        height="500"
      />
      <img
        alt="bedroom"
        src={url + "/bedroom.jpg"}
        onClick={(e) => history.push("portfolio-bedroom")}
        width="500"
        height="500"
      />
      <img
        alt="kitchen"
        src={url + "/kitchen.jpg"}
        onClick={(e) => history.push("portfolio-kitchen")}
        width="500"
        height="500"
      />
      <img
        alt="bathroom"
        src={url + "/bathroom.jpg"}
        onClick={(e) => history.push("portfolio-bathroom")}
        width="500"
        height="500"
      />
    </div>
  );
};

export default Portfolio;
