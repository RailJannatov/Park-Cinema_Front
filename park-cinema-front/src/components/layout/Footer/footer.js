import React from "react";
import "./index.scss";
import {Col,Row} from "react-bootstrap";
import footerLogo from "../Layout-Image/logo-footer.png";
import master from "../Layout-Image/visa.png";
import visa from "../Layout-Image/mastercard.png";


const Footer =()=>{

return(
    <div>
                <Row className="footer-wrapper">
            <Col md={8} className="footer-left" >
                    <p>© Park Cinema, 2022</p>
                    <div className="footer-left-img-holder">
                        <img src={visa} className="visa-img"/>
                        <img src={master} className="master-img"/>
                    </div>
            </Col>
            <Col md={4} className="footer-right"  >
                    <div className="footer-right-img-holder">
                    <img src={footerLogo} className="footer-logo"/>
                    </div>
            </Col>
        </Row>
    </div>
)

}

export default Footer;