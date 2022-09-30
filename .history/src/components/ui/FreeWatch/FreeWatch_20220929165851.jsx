import React from "react";

import { Container } from "react-bootstrap";
import { NFT__DATA } from "../../../assets/data/data";
import { CartItem } from "../Cart/CartItem";
import { useEffect, useState } from "react";
import "./popular.css";
import axios from "axios";
import tmdb from "../../../api/tmdb";
export const FreeWatch = () => {
  const [popularData, setPopularData] = useState([]);
  useEffect(() => {
    const fetchMovie = async () => {
      const { data } = await tmdb.get("airing_today");
      // console.log(data);
      setPopularData(data.results);
    };
    fetchMovie();
  }, []);
  return (
    <div className="popular">
      <Container>
        <h3 className="popular-heading">Free to watch</h3>
        <div className="popular-list">
          {popularData.map((item) => (
            <CartItem item={item} key={item.id} />
          ))}
        </div>
      </Container>
    </div>
  );
};
