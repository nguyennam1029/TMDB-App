const initState = {
  search: "",
  selectItem: {},
  listHeros: [],
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "listHeros":
      return {
        ...state,
        listHeros: action.payload,
      };
    case "selectItem":
      return {
        ...state,
        selectItem: action.payload,
      };
    case "seachrItem":
      return {
        ...state,
        search: action.payload,
      };
    default:
      return state;
  }
};
export default rootReducer;
