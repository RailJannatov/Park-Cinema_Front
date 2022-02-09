import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Movie from "../../../common/Movie";
import "./index.scss";
import axios from "axios";
import { Form } from "react-bootstrap";
import Advertisement from "../../../layout/Advertisement/Advertisment";

const Movies = () => {
  const [movies, setMovies] = React.useState([]);

  React.useEffect(() => {
    let url = "https://localhost:44300/api";
    axios.get(`${url}/Movies`).then((res) => setMovies(res.data));
  }, []);
  console.log(movies);
  return (
    <Container>
      <Row>
        <Col md={9}>
          <div className="main-buttons">
            <div className="filter-button activeMovie">Bu gün</div>
            <div className="filter-button">Tezliklə</div>
            <div className="filter-button">Cədvəl</div>
          </div>

          <div className="main-movies">
            <div className="filtering-content">
              <div className="filter-hall"> Hamısı </div>
              <div className="filter-hall imax-icon"> İMAX </div>
              <div className="filter-hall laser-icon"> LaseR </div>
              <div className="filter-hall dolby-icon"> Dolby </div>
              <div className="filter-hall "> 3D </div>
              <div className="filter-hall"> 2D </div>
            </div>
            <div className="movies-options">
              <Form.Select
                aria-label="Default select example"
                className="select-cinema"
              >
                <option className="main-movie-title">Kinoteatrlar</option>
                <option value="Park Bulvar">Park Bulvar</option>
                <option value="Metro Park">Metro Park</option>
                <option value="Flame Towers">Flame Towers</option>
                <option value="Zaqulba">Zaqulba</option>
                <option value="Şahdağ">Şahdağ</option>
              </Form.Select>
            </div>
            <div className="filter-language-movies">
              <div className="filter-language"> Ingilis dilində filmlər </div>
              <div className="filter-language "> Türk dilində filmlər </div>
            </div>
            <Row>
              {/* {movies?.map((movie) => (
              <Col md={4} className="movie">
                <Movie key={movie.id} movie={movie} />
              </Col>
            ))} */}
            </Row>
          </div>
        </Col>
        <Col md={3}>
          <Advertisement />
        </Col>
      </Row>
    </Container>
  );
};
export default Movies;
