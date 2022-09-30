import React from "react";

import { useSelector } from "react-redux";
export const MoviesDetail = () => {
  const { selectItem } = useSelector((state) => state);

  return <div className="movie-detail">{selectItem.title}</div>;
};
