import React from "react";
import { Banner } from "../components/Banner/Banner";
import { Genres } from "../components/Header/Genres";
import { FreeWatch } from "../components/ui/FreeWatch/FreeWatch";

import { Popular } from "../components/ui/Popular/Popular";
import { Trending } from "../components/ui/Trending/Trending";

export const HomePage = () => {
  return (
    <div>
      <Banner />
      {/* <ListHero /> */}
      <Popular />
      <Trending />
      <FreeWatch />
      {/* <Genres /> */}
    </div>
  );
};
