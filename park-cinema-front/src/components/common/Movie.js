import React from "react";
import { Col, Row } from "react-bootstrap";
import "./index.scss";
import image from "../../images/Bedheybet.jpg";
import { propTypes } from "react-bootstrap/esm/Image";

const Movie = ({ movie }) => {
  return (
    <>
      <Row>
        <Col md={6}>
          <div className="movie-image" key={movie.id}>
            <img src={movie.Image} alt="movie" className="img-fluid" />
            <button className="movie-ticket-buy">Bilet al</button>
          </div>
        </Col>
        <Col md={6}>
          <div className="movie-description" key={movie.id}>
            <a className="movie-title" href="/">
              {movie.Name}
            </a>
            <div className="movie-date">
              <span>{movie.DateTime}</span>
            </div>
            <div className="movie-type">
              <span>2D</span>
            </div>
            <div className="movie-language">
              <span>{movie.MovieLanguage.toUpperCase()}</span>
            </div>
            <div className="movie-claimer-age">{movie.ClaimerAge}+</div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Movie;
