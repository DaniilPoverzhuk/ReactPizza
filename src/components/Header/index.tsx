import React from "react";
import style from "./header.module.scss";
import logo from "../../assets/images/pizza-logo.56ac87032d8f6fdf863326acd06c0d97.svg";
import Search from "../Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Link } from "react-router-dom";
import Home from "../../Pages/Home";

const Header: React.FC = () => {
  const { globalCount, totalPrice } = useSelector(
    (state: RootState) => state.cart
  );
  return (
    <div className={style.root}>
      <div className={style.inner}>
        <Link to="/" className={style.logo}>
          <img src={logo} alt="logo" />
          <div className={style.logoText}>
            <h1 className={style.logoTextUp}>react pizza v2</h1>
            <p className={style.logoTextDown}>
              самая вкусная пицца во вселенной
            </p>
          </div>
        </Link>
        <Search />
        <Link to="/cart" className={style.cart}>
          <span>{totalPrice} ₽</span>
          <span className={style.cartLine}></span>
          <span>
            <FontAwesomeIcon icon={faCartShopping} /> {globalCount}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
