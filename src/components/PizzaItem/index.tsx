import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import style from "./pizza.module.scss";
import classNames from "classnames";
import { useAppDispatch, RootState } from "../../redux/store";
import { addPizzaToCart } from "../../redux/slices/cart/cartSlice";
import { useSelector } from "react-redux";

export const typesConstants = ["Тонкое", "Традиционное"];
export const sizesConstants = ["26", "30", "40"];

type PizzaItemProps = {
  category: number;
  id: number;
  imageUrl: string;
  name: string;
  price: number;
  rating: number;
  sizes: number[];
  types: number[];
};

const PizzaItem: React.FC<PizzaItemProps> = ({
  imageUrl,
  name,
  price,
  sizes,
  types,
  category,
  rating,
  id,
}) => {
  const dispatch = useAppDispatch();
  const [activeType, setActiveType] = useState(types[0]);
  const [activeSize, setActiveSize] = useState(sizes[0]);
  const count = useSelector(
    (state: RootState) => state.cart.items.find((item) => item.id === id)?.count
  );

  const handlerAddPizzaToCart = () => {
    dispatch(
      addPizzaToCart({
        imageUrl,
        name,
        price,
        activeSize,
        activeType,
        category,
        rating,
        id,
      })
    );
  };

  const changeTypePizza = (idx: number) => {
    setActiveType(idx);
  };

  const changeSizePizza = (item: number) => {
    setActiveSize(item);
  };

  return (
    <div className={style.root}>
      <img className={style.image} src={imageUrl} />
      <h4 className={style.title}>{name}</h4>
      <div className={style.choices}>
        <ul className={style.type}>
          {typesConstants.map((item, idx) => (
            <li
              key={idx}
              className={classNames({
                [style.activeType]: activeType === idx,
                [style.disabledType]: !types.includes(idx),
              })}
              onClick={() => changeTypePizza(idx)}
            >
              {item}
            </li>
          ))}
        </ul>
        <ul className={style.sizes}>
          {sizesConstants.map((item, idx) => (
            <li
              key={idx}
              className={classNames({
                [style.activeSize]: activeSize === +item,
                [style.disabledSize]: !sizes.includes(+item),
              })}
              onClick={() => changeSizePizza(+item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className={style.bottom}>
        <p className={style.price}>от {price} ₽</p>
        <button className={style.button} onClick={handlerAddPizzaToCart}>
          <FontAwesomeIcon icon={faPlus} />
          Добавить
          <span className={style.amountGoods}>{count || 0}</span>
        </button>
      </div>
    </div>
  );
};

export default PizzaItem;
