import React from "react";

import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { HeroCart } from "../components/ui/HeroCart/HeroCart";

export const Search = () => {
  const { listHeros, search } = useSelector((state) => state);
  const [data, setData] = useState([]);

  useEffect(() => {
    const result = listHeros.filter((item) => {
      return item.name.toLowerCase().includes(search.toLowerCase());
    });
    setData(result);
  }, [search]);
  return (
    <div>
      {data.map((item) => item && <HeroCart key={item.id} item={item} />)}
      eo hieu
    </div>
  );
};
