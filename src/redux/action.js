export const getListHeros = (heros) => {
  return {
    type: "listHeros",
    payload: heros,
  };
};

export const selectItem = (item) => {
  return {
    type: "selectItem",
    payload: item,
  };
};

export const seachrItem = (item) => {
  return {
    type: "seachrItem",
    payload: item,
  };
};
// export 1 cái getListHeros thì lại đc
// => ko thể sử dụng cú pháp export const getListHeros = (heros) => {...}

// export default getListHeros; export 1 cái thì không lỗi

// export { getListHeros, testt }; cách này củng lỗi
