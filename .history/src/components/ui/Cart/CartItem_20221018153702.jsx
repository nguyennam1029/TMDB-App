import React from "react";
import { selectItem } from "../../../redux/action";

import { useDispatch } from "react-redux";
import "./cartItem.css";
import { Link } from "react-router-dom";
export const CartItem = (props) => {
  // const dispatch = useDispatch();
  // function putItem(item) {
  //   dispatch(selectItem(item));
  // }
  const {
    id,
    name,
    poster_path,
    first_air_date,
    media_type,
    title,
    release_date,
    vote_average,
  } = props.item;
  const getPosterUrl = (posterpath) => {
    return `https://www.themoviedb.org/t/p/w220_and_h330_face/${posterpath}`;
  };
  return (
    <Link
      // `/Home/${id}`
      to={`/Home/${media_type || "movie"}/${id}`}
      className="cart-item"
      // onClick={() => {
      //   putItem(item);
      // }}
    >
      <div className="cart-item--img">
        <img src={getPosterUrl(poster_path)} alt="" />
        <div className="percent">
          <span className="percent-title">
            {vote_average}
            {/* <sup>%</sup> */}
          </span>
        </div>
      </div>
      <div className="cart-content">
        <h4 className="cart-title">{`${name || title}`}</h4>
        <span className="cart-time">{first_air_date || release_date}</span>
      </div>
    </Link>
  );
};
