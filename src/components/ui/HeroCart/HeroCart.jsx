import React from "react";
import { useDispatch } from "react-redux";

import { Link } from "react-router-dom";

import { selectItem } from "../../../redux/action";
import "./heroCart.css";
export const HeroCart = (props) => {
  const dispatch = useDispatch();

  function getItem(item) {
    dispatch(selectItem(item));
  }
  const { id, title, description, poster_path } = props.item;
  console.log("item ", props.item);
  return (
    // <Link to={`/Home/${id}`}>

    //  </Link>
    <Link
      to={`/Home/${id}`}
      className="hero-item"
      onClick={() => {
        getItem(props.item);
      }}
    >
      <h2 className="hero-item--name">{title}</h2>
      <span className="hero-item--name">{description}</span>
      <img
        className="hero-item--img"
        src={`https://image.tmdb.org/t/p/original/${poster_path}`}
        alt=""
      />
    </Link>
  );
};
