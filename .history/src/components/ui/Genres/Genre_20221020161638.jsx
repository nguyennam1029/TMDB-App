import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams, useLocation } from "react-router-dom";

import { CartItem } from "../Cart/CartItem";
import "./genre.css";

export const Genre = () => {
  const [dataGenres, setDataGenres] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setLoading] = useState(true);

  const { id } = useParams();
  const location = useLocation();

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=15e383204c1b8a09dbfaaa4c01ed7e17&with_genres=${id}&language=vi-VN&page=${pageNumber}`
      )
      .then((res) => {
        setDataGenres(res.data.results);
      })
      .catch((err) => console.log(err));
  }, [pageNumber]);
  console.log(dataGenres);
  return (
    <div className="genre">
      <Container>
        {isLoading && (
          <span className="flex items-center text-gray-100 absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
            <i className="bx bx-loader bx-spin mr-2"></i>
            Đang tải dữ liệu...
          </span>
        )}
        <h2 className="genre-heading">Thể loại</h2>
        <Row>
          {dataGenres &&
            dataGenres.length > 0 &&
            dataGenres.map((item) => (
              <Col lg={2} key={item.id}>
                <CartItem item={item} />
              </Col>
            ))}
        </Row>
        <button
          className="load-more"
          onClick={() => setPageNumber(pageNumber + 1)}
        >
          Xem thêm
        </button>
      </Container>
    </div>
  );
};
