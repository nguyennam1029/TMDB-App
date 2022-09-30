import React from "react";
import { Banner } from "../components/Banner/Banner";

import { Popular } from "../components/ui/Popular/Popular";
import { Trending } from "../components/ui/Trending/Trending";

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
