import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "./Header";

export const Genres = () => {
  const [genres, setGenres] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=15e383204c1b8a09dbfaaa4c01ed7e17&language=vi-VN"
      )
      .then((res) => {
        setGenres(res.data.genres);
      });
  });

  return <Header genres={genres} />;
};
