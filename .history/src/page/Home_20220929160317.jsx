import React from "react";
import { Banner } from "../components/Banner/Banner";
import { ListHero } from "../components/ui/ListHero/ListHero";
import { Popular } from "../components/ui/Popular/Popular";
import { Trending } from "../components/ui/Trending/Trending";
// import Slider from "../components/ui/Slider/Slider";

export const HomePage = () => {
  return (
    <div>
      <Banner />
      {/* <ListHero /> */}
      <Popular />
      <Trending />
    </div>
  );
};
