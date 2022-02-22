import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./index.scss";
import CinemaSlider from "./CinemaSlider";
import Cinema from "../Cinemas/Cinema";
import Advertisement from "../../layout/Advertisement/Advertisment";

const Cinemas = () => {
  return (
    <div>
      <CinemaSlider />
      <Container>
        <h1 className="cinemas-title">Kinoteatrlar</h1>
        <Row>
          <Col md={8}>
            <Cinema />
          </Col>
          <Col md={4}>
            <Advertisement />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Cinemas;
