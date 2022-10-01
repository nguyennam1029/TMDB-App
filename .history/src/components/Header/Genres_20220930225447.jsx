import axios from "axios";
import React, { useState } from "react";

export const Genres = () => {
  const [genres, setGenres] = useState([]);
  axios
    .get(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=15e383204c1b8a09dbfaaa4c01ed7e17&language=vi-VN"
    )
    .then((res) => {
      console.log(res);
    });
  return <div>Genres</div>;
};
