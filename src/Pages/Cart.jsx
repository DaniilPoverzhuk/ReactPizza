import React from "react";
import { useSelector } from "react-redux";
import CartEmpty from "../components/CartEmpty";
import CartWithGoods from "../components/CartWithGoods";

function Cart() {
  const { totalCount } = useSelector(({ cart }) => cart);
  return <div>{totalCount ? <CartWithGoods /> : <CartEmpty />}</div>;
}

export default Cart;
