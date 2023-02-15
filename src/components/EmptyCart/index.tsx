import React from "react";
import style from "./empty-cart.module.scss";
import emptyCart from "../../assets/images/empty-cart.png";
import { Link } from "react-router-dom";

const EmptyCart: React.FC = () => {
  return (
    <div className={style.root}>
      <h2>Корзина пустая 😕</h2>
      <p>
        Вероятней всего, вы не заказывали ещё пиццу. Для того, чтобы заказать
        пиццу, перейди на главную страницу.
      </p>
      <img src={emptyCart} alt="Empty Cart" />
      <Link to="/" className={style.button}>
        Вернуться назад
      </Link>
    </div>
  );
};

export default EmptyCart;
