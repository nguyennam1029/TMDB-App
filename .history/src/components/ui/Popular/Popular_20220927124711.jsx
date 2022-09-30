import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { NFT__DATA } from "../../../assets/data/data";
import { CartItem } from "../Cart/CartItem";

import "./popular.css";
export const Popular = () => {
  return (
    <div className="popular">
      <Container>
        <h3 className="popular-heading">What's Popular</h3>
        <div className="popular-list">
          {NFT__DATA.map((item) => (
            <CartItem item={item} key={item.id} />
          ))}
        </div>
      </Container>
    </div>
  );
};
