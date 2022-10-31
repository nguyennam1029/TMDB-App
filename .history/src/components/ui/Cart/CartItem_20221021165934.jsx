import React from "react";

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
  } = props.item;
  const { border } = props.border;
  console.log("border", border);
  const getPosterUrl = (posterpath) => {
    return `https://www.themoviedb.org/t/p/w220_and_h330_face/${posterpath}`;
  };
  return (
    <Link
      // `/Home/${id}`
      to={`/Home/${media_type || "movie"}/${id}`}
      className={"card-item" + (border === true ? "active" : "")}
      // onClick={() => {
      //   putItem(item);
      // }}
    >
      <div className="card-item--img">
        <img src={getPosterUrl(poster_path)} alt="" />
        <div className="percent">
          <span className="percent-title">
            89<sup>%</sup>
          </span>
        </div>
      </div>
      <div className="card-content">
        <h4 className="card-title">{`${name || title}`}</h4>
        <span className="card-time">{first_air_date || release_date}</span>
      </div>
    </Link>
  );
};
