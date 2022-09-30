import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

import {
  IoBookmark,
  IoHeartSharp,
  IoList,
  IoLogoGooglePlaystore,
  IoStarSharp,
} from "react-icons/io5";
import "../styles/detail.css";
import { Col, Container, Row } from "react-bootstrap";
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
      style={{
        backgroundImage: `url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${selectItem.backdrop_path})`,
      }}
    >
      <div className="movie-detail--overlay">
        <div className="movie-header">
          <Container>
            <Row>
              <Col lg="3">
                <div className="movie-header--poster">
                  <img src={getPosterUrl(selectItem.poster_path)} alt="" />
                </div>
              </Col>
              <Col lg="8">
                <div className="poster-info">
                  <div className="poster-titel">
                    <h2>Pinocchio</h2>
                    <span>(2022)</span>
                  </div>
                  <div className="poster-facts d-flex align-items-center">
                    <span className="certification">PG</span>
                    <span className="date">09/08/2022(US)</span>
                    <span className="category">kinh dị, tình cảm</span>
                    <span className="runtime">1h24m</span>
                  </div>
                  <div className="poster-actions">
                    <ul className="d-flex align-items-center">
                      <li className="chart">
                        <div className="chart-content">
                          <span className="chart-content--score">89%</span>
                        </div>
                        <p className="chart-title">
                          User <br></br> Score
                        </p>
                      </li>
                      <li className="poster-item">
                        <Link>
                          <IoList />
                        </Link>
                      </li>
                      <li className="poster-item">
                        <Link>
                          <IoHeartSharp />
                        </Link>
                      </li>
                      <li className="poster-item">
                        <Link>
                          <IoBookmark />
                        </Link>
                      </li>
                      <li className="poster-item">
                        <Link>
                          <IoStarSharp />
                        </Link>
                      </li>
                      <li className="poster-item video">
                        <Link>
                          <span className="video-icon">
                            <IoLogoGooglePlaystore />
                          </span>
                          Play Trailer
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <h3>{selectItem.title || selectItem.name}</h3>
    </div>
  );
};
