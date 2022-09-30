import React from "react";

import { useSelector } from "react-redux";
export const MoviesDetail = () => {
  const { selectItem } = useSelector((state) => state);
  const getPosterUrl = (posterpath) => {
    return `https://www.themoviedb.org/t/p/w220_and_h330_face/${posterpath}`;
  };
  return (
    <div className="movie-detail">
      <h3>{selectItem.title}</h3>
      <img src={getPosterUrl(selectItem.backdrop_path)} alt="" />
    </div>
  );
};
