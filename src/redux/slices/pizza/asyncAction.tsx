import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { PizzaItem } from "./types";

type fetchPizzasTypes = {
  category: string;
  orderBy: string;
  order: string;
  search: string;
};

const fetchPizzas = createAsyncThunk<PizzaItem[], fetchPizzasTypes>(
  "pizza/fetchPizzas",
  async ({ category, orderBy, order, search }) => {
    const { data } = await axios.get<PizzaItem[]>(
      `https://63d6cad7dc3c55baf43c90b4.mockapi.io/pizzas?${category}&${search}&${orderBy}&${order}`
    );

    return data;
  }
);

export default fetchPizzas;
