import React from "react";
import { Container } from "react-bootstrap";
import { CartItem } from "../Cart/CartItem";

import "./popular.css";
export const Popular = () => {
  return (
    <div className="popular">
      <Container>
        <h3 className="popular-heading">What's Popular</h3>
        <div className="popular-list">
          <CartItem />
        </div>
      </Container>
    </div>
  );
};
