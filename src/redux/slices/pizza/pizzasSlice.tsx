import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import fetchPizzas from "./asyncAction";
import { PizzaItem, PizzaSliceTypes, Status } from "./types";

const initialState: PizzaSliceTypes = {
  items: [],
  status: Status.LOADING,
};

export const pizzasSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state) => {
      state.status = Status.LOADING;
    });
    builder.addCase(
      fetchPizzas.fulfilled,
      (state, action: PayloadAction<PizzaItem[]>) => {
        state.status = Status.COMPLETED;
        state.items = action.payload;
      }
    );
    builder.addCase(fetchPizzas.rejected, (state) => {
      state.status = Status.ERROR;
      state.items = [];
    });
  },
});

export default pizzasSlice.reducer;
