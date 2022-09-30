import React from "react";
import { Col, Container, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import logoFooter from "../../assets/images/logoFooter.svg";

const Basics = [
  {
    display: "About TMDB",
    url: "/home",
  },
  {
    display: "Contact Us",
    url: "/#",
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

const Involved = [
  {
    display: " Contribution Bible",
    url: "/home",
  },
  {
    display: "Add New Movie",
    url: "/#",
  },
  {
    display: "Add New TV Show",
    url: "/Market",
  },
];

const Community = [
  {
    display: " Contribution Bible",
    url: "/home",
  },
  {
    display: "Add New Movie",
    url: "/#",
  },
  {
    display: "Add New TV Show",
    url: "/Market",
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

          <Col lg="3">
            <h5 className="footer-heading">Get Involved</h5>
            <ListGroup>
              {Involved.map((item) => (
                <ListGroupItem>
                  <Link to={item.url}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3">
            <h5 className="footer-heading">Community</h5>
            <ListGroup>
              {Community.map((item) => (
                <ListGroupItem>
                  <Link to={item.url}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Footer;
