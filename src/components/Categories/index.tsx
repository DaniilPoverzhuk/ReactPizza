import React, { useState } from "react";
import { setCategory } from "../../redux/slices/filter/filterSlice";
import { useAppDispatch } from "../../redux/store";
import style from "./categories.module.scss";

const categories = [
  "Все",
  "Мясные",
  "Вегетарианские",
  "Гриль",
  "Острые",
  "Закрытые",
];

const Categories: React.FC = () => {
  const dispatch = useAppDispatch();
  const [activeItem, setActiveItem] = useState(0);

  const changeActiveItem = (idx: number) => {
    setActiveItem(idx);
    dispatch(setCategory(idx));
  };

  return (
    <div className={style.root}>
      <ul className={style.list}>
        {categories.map((item, idx) => (
          <li
            key={idx}
            className={
              activeItem === idx ? style.listItemActive : style.listItem
            }
            onClick={() => changeActiveItem(idx)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
