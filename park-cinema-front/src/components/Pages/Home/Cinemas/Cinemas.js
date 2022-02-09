import React from "react";
import { Col, Row,Container } from "react-bootstrap";
import "./index.scss";
import CinemaSlider from "./CinemaSlider";
import Cinema from "./Cinema";
import Footer from "../../../layout/Footer/footer";
import Advertisement from "../../../layout/Advertisement/Advertisement"

const Cinemas=()=>{
    return(
        <div>
            <CinemaSlider/>
            <h1>Kinoteatrlar</h1>
            <Row>
                <Col md={8}>
                    <Cinema/>
                </Col>
                <Col md={4}>
                    <Advertisement/>
                </Col>
            </Row>
            <Footer/>
        </div>
    );
};

export default Cinemas;
