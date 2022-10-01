import axios from "axios";
import React, { useEffect, useState } from "react";
import "./genre.css";

export const Genre = () => {
  const [dataGenres, setDataGenres] = useState([]);
  useEffect(() => {
    axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=15e383204c1b8a09dbfaaa4c01ed7e17&language=vi-VN&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28&with_watch_monetization_types=flatrate`
    );
  }, []);
  return <div className="genre"></div>;
};
