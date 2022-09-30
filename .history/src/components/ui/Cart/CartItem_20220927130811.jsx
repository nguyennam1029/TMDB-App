import React from "react";

import "./cartItem.css";
export const CartItem = ({ item }) => {
  const { img, title } = item;
  return (
    <div className="cart-item">
      <div className="cart-item--img">
        <img src={img} alt="" />
      </div>
      <h4 className="cart-title">{title}</h4>
    </div>
  );
};
