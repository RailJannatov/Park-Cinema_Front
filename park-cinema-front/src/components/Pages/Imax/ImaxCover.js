import React from "react";
import { Row } from "react-bootstrap";
import imax from "../../../images/imax-az.jpg";
import topImageShadow from "../../../images/top-shadow.png";

const ImaxCover = () => {
  return (
    <>
      <Row>
        <div className="cinemas-header-slider">
          <img src={imax} alt="Cinema" className="slider-image img-fluid" />
          <div src={topImageShadow} className="shadow-top"></div>
          <div className="shadow-bottom"></div>
        </div>
      </Row>
    </>
  );
};

export default ImaxCover;
