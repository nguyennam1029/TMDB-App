import React from "react";

import { Container } from "react-bootstrap";
import "./banner.css";
export const Banner = () => {
  return (
    <Container>
      <div className="banner d-flex justify-content-center">
        <div className="banner-content">
          <div className="banner-title">
            <h2>Welcome.</h2>
            <h3>
              Millions of movies, TV shows and people to discover. Explore now.
            </h3>
          </div>
          <div className="banner-search">
            <input type="text" placeholder="Tên phim, tên diễn viên..." />
            <button>Search</button>
          </div>
        </div>
      </div>
    </Container>
  );
};
