import React from "react";
import { ListHero } from "../components/ui/ListHero/ListHero";
import Slider from "../components/ui/Slider/Slider";

export const HomePage = () => {
  return (
    <div>
      <Slider />
      <ListHero />
    </div>
  );
};
