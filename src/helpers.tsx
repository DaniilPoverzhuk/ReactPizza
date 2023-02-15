import { cartItem } from "./redux/slices/cart/types";

export const countTotalPrice = (arr: cartItem[]) => {
  return arr.reduce((sum, obj) => obj.price * obj.count + sum, 0);
};
