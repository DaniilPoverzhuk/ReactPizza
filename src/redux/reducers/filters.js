import { types } from "../actions/filters";

const defaultState = {
  category: null,
  sortBy: "popular",
};

export const filters = (state = defaultState, action) => {
  switch (action.type) {
    case types.setCategory:
      return {
        ...state,
        category: action.payload,
      };

    case types.setSortBy:
      return {
        ...state,
        sortBy: action.payload,
      };

    default:
      return state;
  }
};
