import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import pizza from "./slices/pizza/pizzasSlice";
import filter from "./slices/filter/filterSlice";
import cart from "./slices/cart/cartSlice";

const store = configureStore({
  reducer: { pizza, filter, cart },
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<typeof store.dispatch>();

export default store;
