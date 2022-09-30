import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
export const MoviesDetail = () => {
  //   const { selectItem } = useSelector((state) => state);
  const [selectItem, setSelectItem] = useState([]);
  const getPosterUrl = (posterpath) => {
    return `https://www.themoviedb.org/t/p/w220_and_h330_face/${posterpath}`;
  };
  const { id, type } = useParams();
  console.log(type);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/${type}/${id}?api_key=15e383204c1b8a09dbfaaa4c01ed7e17`
        // `https://api.themoviedb.org/3/${type}/${id}?api_key=15e383204c1b8a09dbfaaa4c01ed7e17`
      )
      .then((responsive) => {
        const data = responsive.data;
        setSelectItem(data);
        // console.log(responsive.data);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(id, type, selectItem);
  return (
    <div
      className="movie-detail"
      style={{ backgroundImage: `url(getPosterUrl(selectItem.backdrop_path))` }}
    >
      <h3>{selectItem.title || selectItem.name}</h3>
      <img src={getPosterUrl(selectItem.backdrop_path)} alt="" />
      <img src={getPosterUrl(selectItem.poster_path)} alt="" />
    </div>
  );
};
