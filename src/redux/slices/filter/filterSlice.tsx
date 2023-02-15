import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import {
  FilterSliceTypes,
  popupType,
  sortItem,
  sortPropertyEnum,
} from "./types";

const initialState: FilterSliceTypes = {
  searchValue: "",
  categoryId: 0,
  sort: {
    sortProperty: sortPropertyEnum.DESC,
    type: popupType.RATING,
  },
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
    setCategory: (state, action: PayloadAction<number>) => {
      state.categoryId = action.payload;
    },
    setSort: (state, action: PayloadAction<sortItem>) => {
      state.sort.sortProperty = action.payload.sortProperty;
      state.sort.type = action.payload.type;
    },
  },
});

export const { setCategory, setSort, setSearchValue } = filterSlice.actions;
export default filterSlice.reducer;
