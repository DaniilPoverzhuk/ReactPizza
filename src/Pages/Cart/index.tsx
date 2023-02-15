import React from "react";
import style from "./cart.module.scss";
import { RootState, useAppDispatch } from "../../redux/store";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { clearCart } from "../../redux/slices/cart/cartSlice";
import EmptyCart from "../../components/EmptyCart";
import CartItem from "../../components/CartItem";

const Cart: React.FC = () => {
  const dispatch = useAppDispatch();
  const { items } = useSelector((state: RootState) => state.cart);

  if (!items.length) {
    return <EmptyCart />;
  }

  const clearCartBtn = () => {
    dispatch(clearCart());
  };

  return (
    <div className={style.root}>
      <div className={style.top}>
        <h2 className={style.title}>
          <FontAwesomeIcon icon={faCartShopping} />
          Корзина
        </h2>
        <button className={style.btnClear} onClick={clearCartBtn}>
          <FontAwesomeIcon icon={faTrashCan} />
          Очистить корзину
        </button>
      </div>
      <div className={style.listItem}>
        {items.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
