export const types = {
  setPizzas: "SET_PIZZAS",
  setLoading: "SET_LOADING",
};

export const setPizzas = (items) => ({
  type: types.setPizzas,
  payload: items,
});

export const setLoading = (item) => ({
  type: types.setLoading,
  payload: item,
});
