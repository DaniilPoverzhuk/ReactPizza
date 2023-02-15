import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faXmark } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { typesConstants } from "../PizzaItem";
import style from "./cart-item.module.scss";
import { useAppDispatch } from "../../redux/store";
import {
  addPizza,
  minusPizza,
  removePizza,
} from "../../redux/slices/cart/cartSlice";

type CartItemProps = {
  category: number;
  id: number;
  imageUrl: string;
  name: string;
  price: number;
  rating: number;
  activeSize: number;
  activeType: number;
  count: number;
};

const CartItem: React.FC<CartItemProps> = ({
  imageUrl,
  name,
  activeSize,
  activeType,
  price,
  count,
  id,
}) => {
  const dispatch = useAppDispatch();

  const addPizzaBtn = () => {
    dispatch(addPizza(id));
  };

  const minusPizzaBtn = () => {
    dispatch(minusPizza(id));
  };

  const removePizzaBtn = () => {
    dispatch(removePizza(id));
  };

  return (
    <div className={style.root}>
      <img src={imageUrl} />
      <div className={style.info}>
        <p className={style.name}>{name}</p>
        <p className={style.type}>{`тесто ${typesConstants[
          activeType
        ].toLocaleLowerCase()}, ${activeSize} см.`}</p>
      </div>
      <div className={style.count}>
        <button onClick={minusPizzaBtn}>
          <FontAwesomeIcon icon={faMinus} />
        </button>
        <span>{count}</span>
        <button onClick={addPizzaBtn}>
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
      <div className={style.price}>{price}</div>
      <button className={style.btnDelete} onClick={removePizzaBtn}>
        <FontAwesomeIcon icon={faXmark} />
      </button>
    </div>
  );
};

export default CartItem;
