import { setLoading, setPizzas } from "./pizzas";

export const fetchPizzas = (category, sortBy) => {
  let type;
  if (sortBy === "priceLow") {
    sortBy = "price";
    type = "asc";
  } else if (sortBy === "priceHigh") {
    sortBy = "price";
    type = "desc";
  }

  return function (dispatch) {
    fetch(
      `http://localhost:3001/pizzas?${
        category !== null ? `category=${category}` : ""
      }&_sort=${sortBy}&_order=${type}`
    )
      .then((request) => request.json())
      .then((response) => {
        dispatch(setLoading(true));
        return dispatch(setPizzas(response));
      });
  };
};
