import React from "react";

import "./cartItem.css";
export const CartItem = ({ item }) => {
  const { img, title } = item;
  return (
    <div className="cart-item">
      <div className="cart-item--img">
        <img src={img} alt="" />
        <div className="percent">
          <span className="percent-title">
            89<sup>%</sup>
          </span>
        </div>
      </div>
      <div className="cart-content">
        <h4 className="cart-title">{title}</h4>
        <span className="cart-time">10 - 3 - 2001</span>
      </div>
    </div>
  );
};
