import React from "react";

import { Container } from "react-bootstrap";
import { NFT__DATA } from "../../../assets/data/data";
import { CartItem } from "../Cart/CartItem";
import { useEffect, useState } from "react";
import "./popular.css";
import axios from "axios";
export const Popular = () => {
  const [popularData, setPopularData] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/tv/popular?api_key=15e383204c1b8a09dbfaaa4c01ed7e17&language=en-US&page=1"
      )
      .then((responsive) => {
        console.log(responsive);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="popular">
      <Container>
        <h3 className="popular-heading">What's Popular</h3>
        <div className="popular-list">
          {NFT__DATA.map((item) => (
            <CartItem item={item} key={item.id} />
          ))}
        </div>
      </Container>
    </div>
  );
};
