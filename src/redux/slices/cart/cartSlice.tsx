import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { actionAddPizzaToCart, cartSliceTypes } from "./types";
import { countTotalPrice } from "../../../helpers";

const initialState: cartSliceTypes = {
  items: [],
  globalCount: 0,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addPizzaToCart: (state, action: PayloadAction<actionAddPizzaToCart>) => {
      state.globalCount++;
      const findItem = state.items.find((obj) => obj.id === action.payload.id);

      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }

      state.totalPrice = countTotalPrice(state.items);
    },
    clearCart: (state) => {
      state.items = [];
      state.globalCount = 0;
      state.totalPrice = 0;
    },
    addPizza: (state, action: PayloadAction<number>) => {
      state.globalCount++;
      const findItem = state.items.find((item) => item.id === action.payload);

      if (findItem) {
        findItem.count++;
      }

      state.totalPrice = countTotalPrice(state.items);
    },
    minusPizza: (state, action: PayloadAction<number>) => {
      state.globalCount--;
      const findItem = state.items.find((item) => item.id === action.payload);

      if (findItem && findItem.count === 1) {
        state.items = state.items.filter((item) => item.id !== findItem.id);
      }

      if (findItem) {
        findItem.count--;
      }

      state.totalPrice = countTotalPrice(state.items);
    },
    removePizza: (state, action: PayloadAction<number>) => {
      const findItem = state.items.find((item) => item.id === action.payload);
      console.log(findItem);
      if (findItem) state.globalCount -= findItem.count;
      state.items = state.items.filter((item) => item.id !== action.payload);
      console.log(state.items.filter((item) => item.id !== action.payload));
      state.totalPrice = countTotalPrice(state.items);
    },
  },
});

export const { addPizzaToCart, clearCart, addPizza, minusPizza, removePizza } =
  cartSlice.actions;
export default cartSlice.reducer;
