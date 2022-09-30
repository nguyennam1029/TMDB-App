import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import logoFooter from "../../assets/images/logoFooter.svg";
const Footer = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col lg="3">
            <div className="footer-logo">
              <img src={logoFooter} alt="" />
            </div>
          </Col>
          <Col lg="3">vcl</Col>
          <Col lg="3">vcl</Col>
          <Col lg="3">vcl</Col>
        </Row>
      </Container>
    </div>
  );
};
export default Footer;
