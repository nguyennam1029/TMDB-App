import React from "react";
import { Col, Container, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import logoFooter from "../../assets/images/logoFooter.svg";

const Basics = [
  {
    display: "About TMDB",
    url: "/Seller-profile",
  },
  {
    display: "Contact Us",
    url: "/Create",
  },
  {
    display: "Support Forums",
    url: "/Market",
  },
  {
    display: "API",
    url: "/Edit-profile",
  },
];

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col lg="3">
            <div className="footer-logo">
              <img src={logoFooter} alt="" />
            </div>
          </Col>
          <Col lg="3">
            <h5 className="footer-heading">The Basics</h5>
            <ListGroup>
              {Basics.map((item) => (
                <ListGroupItem>
                  <Link to={item.url}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg="3">vcl</Col>
          <Col lg="3">vcl</Col>
        </Row>
      </Container>
    </div>
  );
};
export default Footer;
