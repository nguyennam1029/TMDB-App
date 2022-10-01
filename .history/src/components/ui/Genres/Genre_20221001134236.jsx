import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

import { CartItem } from "../Cart/CartItem";
import "./genre.css";

export const Genre = () => {
  const [dataGenres, setDataGenres] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=15e383204c1b8a09dbfaaa4c01ed7e17&language=vi-VN&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${id}&with_watch_monetization_types=flatrate`
      )
      .then((res) => {
        setDataGenres(res.data.results);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="genre">
      <Container>
        <Row>
          {dataGenres &&
            dataGenres.length > 0 &&
            dataGenres.map((item) => (
              <Col lg={3} key={item.id}>
                <CartItem item={item} />
              </Col>
            ))}
        </Row>
      </Container>
    </div>
  );
};
