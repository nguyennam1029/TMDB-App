import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { CartItem } from "../Cart/CartItem";

import "./popular.css";
export const Popular = () => {
  return (
    <div className="popular">
      <Container>
        <h3 className="popular-heading">What's Popular</h3>
        <div className="popular-list">
          <Row>
            <Col className="lg-2">
              <CartItem />
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};
