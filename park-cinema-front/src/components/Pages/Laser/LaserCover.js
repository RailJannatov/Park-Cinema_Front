import React from "react";
import { Row } from "react-bootstrap";
import laser from "../../../images/movie-bg2.jpg";
import topImageShadow from "../../../images/top-shadow.png";
const LaserCover = () => {
  return (
    <>
      {" "}
      <Row>
        <div className="cinemas-header-slider laser-slider">
          <img src={laser} alt="Cinema" className="slider-image img-fluid" />
          <div src={topImageShadow} className="shadow-top"></div>
          <div className="shadow-bottom"></div>
        </div>
      </Row>
    </>
  );
};

export default LaserCover;
