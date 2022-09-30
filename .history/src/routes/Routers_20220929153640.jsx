import { Routes, Route, Navigate } from "react-router-dom";

import React from "react";

import { HomePage } from "../page/Home";
// import { HeroDetail } from "../page/HeroDetail";
import { Search } from "../page/Search";
import { MoviesDetail } from "../page/MoviesDetail";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/Home" />} />
      <Route path="/Home" element={<HomePage />} />
      <Route path="/Home/:type/:id" element={<MoviesDetail />} />
      <Route path="/seachr" element={<Search />} />
    </Routes>
  );
};
export default Routers;
