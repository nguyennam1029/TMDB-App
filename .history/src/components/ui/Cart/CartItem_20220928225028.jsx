import React from "react";
import { selectItem } from "../../../redux/action";

import { useDispatch } from "react-redux";
import "./cartItem.css";
export const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  function putItem(item) {
    dispatch(selectItem(item));
  }
  const { name, poster_path, first_air_date } = item;
  const getPosterUrl = (posterpath) => {
    return `https://www.themoviedb.org/t/p/w220_and_h330_face/${posterpath}`;
  };
  return (
    <div className="cart-item" onClick={putItem(item)}>
      <div className="cart-item--img">
        <img src={getPosterUrl(poster_path)} alt="" />
        <div className="percent">
          <span className="percent-title">
            89<sup>%</sup>
          </span>
        </div>
      </div>
      <div className="cart-content">
        <h4 className="cart-title">{name}</h4>
        <span className="cart-time">{first_air_date}</span>
      </div>
    </div>
  );
};
