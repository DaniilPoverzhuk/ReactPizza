import { types } from "../actions/pizzas";

const defaultState = {
  items: [],
  isLoaded: false,
};

export const pizzas = (state = defaultState, action) => {
  switch (action.type) {
    case types.setPizzas:
      return {
        ...state,
        items: action.payload,
      };

    case types.setLoading:
      return {
        ...state,
        isLoaded: action.payload,
      };
    default:
      return state;
  }
};
