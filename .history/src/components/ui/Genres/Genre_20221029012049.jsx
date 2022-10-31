import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

import { CartItem } from "../Cart/CartItem";
import "./genre.css";

export const Genre = () => {
  const [dataGenres, setDataGenres] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setLoading] = useState(true);

  const { id } = useParams();
  const idRef = useRef(id);
  const location = useLocation();
  const { name } = location.state;
  console.log("useREf", idRef);
  // const { name } = location.state;
  // console.log("Nameee", name);
  const border = true;
  useEffect(() => {
    setTimeout(async () => {
      axios
        .get(
          `https://api.themoviedb.org/3/discover/movie?api_key=15e383204c1b8a09dbfaaa4c01ed7e17&with_genres=${id}&language=vi-VN&page=${pageNumber}`
        )
        .then((res) => {
          if (idRef.current !== id) {
            idRef.current = id;
            setDataGenres(res.data.results);
          } else {
            let merge = dataGenres.concat(res.data.results);
            setDataGenres(merge);
          }
        })
        .catch((err) => console.log(err))
        .finally(() => {
          setLoading(false);
        });
    }, 1400);
  }, [pageNumber, id]);
  // console.log("data", dataGenres);
  return (
    <>
      {isLoading && (
        <div className="box-loading">
          <div class="loading">
            <div class="ring"></div>
            <div class="ring"></div>
            <div class="ring"></div>
            <p>Đang tải...</p>
          </div>
        </div>
      )}

      <div className="genre">
        <Container>
          {isLoading === false && (
            <h2 className="genre-heading">Thể loại: {name}</h2>
          )}
          <motion.div layout>
            <Row>
              {dataGenres &&
                dataGenres.length > 0 &&
                dataGenres.map((item) => (
                  <Col lg={2} key={item.id}>
                    <CartItem item={item} border={border} />
                  </Col>
                ))}
            </Row>
          </motion.div>
          {isLoading === false && (
            <button
              className="load-more d-flex align-items-center justify-content-center"
              onClick={() => setPageNumber(pageNumber + 1)}
            >
              {isLoading === true && <div class="loader"></div>}
              Xem thêm
            </button>
          )}
        </Container>
      </div>
    </>
  );
};
