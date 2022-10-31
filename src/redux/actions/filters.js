export const types = {
  setCategory: "SET_CATEGORY",
  setSortBy: "SET_SORT_BY",
};

export const setCategory = (item) => ({
  type: types.setCategory,
  payload: item,
});

export const setSortBy = (item) => ({
  type: types.setSortBy,
  payload: item,
});
