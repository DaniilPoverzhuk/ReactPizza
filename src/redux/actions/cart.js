export const setCartPizzas = (obj) => ({
  type: "SET_CART",
  payload: obj,
});

export const clearCart = () => ({
  type: "CLEAR_CART",
});

export const changeCountPizzaCart = (obj) => ({
  type: "CHANGE_COUNT",
  payload: obj,
});

export const removePizzaCart = (obj) => ({
  type: "REMOVE_PIZZA",
  payload: obj,
});
