import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
export const MoviesDetail = () => {
  //   const { selectItem } = useSelector((state) => state);
  const [selectItem, setSelectItem] = useState([]);
  const getPosterUrl = (posterpath) => {
    return `https://www.themoviedb.org/t/p/w220_and_h330_face/${posterpath}`;
  };
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(
        // `https://api.themoviedb.org/3/movie/${id}?api_key=15e383204c1b8a09dbfaaa4c01ed7e17`
        `https://api.themoviedb.org/3/movie/343611?api_key=15e383204c1b8a09dbfaaa4c01ed7e17`
      )
      .then((responsive) => {
        // const data = responsive.data.results;
        // setSelectItem(data);
        console.log(responsive.data);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(id);
  return (
    <div className="movie-detail">
      <h3>{selectItem.title}</h3>
      <img src={getPosterUrl(selectItem.backdrop_path)} alt="" />
    </div>
  );
};
