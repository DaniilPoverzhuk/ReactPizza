import React, { memo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategory, setSortBy } from "../redux/actions/filters";
import filterIcon from "../assets/img/icons8-menu-vertical-50.png";
import Overlay from "./Overlay";
const typesCategories = [
  "Мясные",
  "Вегетарианские",
  "Гриль",
  "Острые",
  "Закрытые",
];
const typesSortRedux = ["popular", "priceLow", "priceHigh", "alphabet"];
const typesSort = [
  "популярности",
  "сначала недорогие",
  "сначала дорогие",
  "алфавиту",
];

const Categories = memo(function Categories() {
  const dispatch = useDispatch();
  const { category } = useSelector((store) => store.filters);
  const [popUp, setPopUp] = useState(false);
  const [selectIndexSort, setSelectIndexSort] = useState(0);
  const activeSortItem = typesSort[selectIndexSort];
  const categoriesRef = useRef();

  const toggleCategory = (index) => {
    dispatch(setCategory(index));
  };

  const changeSort = (index) => {
    setSelectIndexSort(index);
    dispatch(setSortBy(typesSortRedux[index]));
  };

  const toggleCategoriesPopUp = (event) => {
    const path = event.path || (event.composedPath && event.composedPath());
    if (path !== undefined && !path.includes(categoriesRef.current)) {
      return setPopUp(false);
    }
    return setPopUp(!popUp);
  };

  React.useEffect(() => {
    document.body.addEventListener("click", toggleCategoriesPopUp);
  }, []);

  return (
    <div ref={categoriesRef} className="categories">
      <ul>
        <li
          onClick={() => toggleCategory(null)}
          className={category === null ? "active" : ""}
        >
          Все
        </li>
        {typesCategories.map((item, index) => (
          <li
            onClick={() => toggleCategory(index)}
            key={`${item}_${index}`}
            className={category === index ? "active" : "disabled"}
          >
            {item}
          </li>
        ))}
      </ul>
      <div className="categories-adaptive">
        <button onClick={(event) => toggleCategoriesPopUp(event)}>
          <img src={filterIcon} />
        </button>
        <div className="categories-adaptive__current">
          {category === null ? "Все" : typesCategories[category]}
        </div>
        {popUp && (
          <div className="categories-adaptive__list">
            <li
              onClick={() => toggleCategory(null)}
              className={`categoriesItem ${category === null ? "active" : ""}`}
            >
              Все
            </li>
            {typesCategories.map((item, index) => (
              <li
                onClick={() => toggleCategory(index)}
                key={`${item}_${index}`}
                className={`categoriesItem ${
                  category === index ? "active" : "disabled"
                }`}
              >
                {item}
              </li>
            ))}
          </div>
        )}
      </div>
      <button
        onClick={(event) => toggleCategoriesPopUp(event)}
        className="filterButton"
      >
        <img src={filterIcon} />
      </button>
      {popUp && (
        <div className="filter">
          <div className="filter__list">
            <li
              onClick={() => toggleCategory(null)}
              className={`filterItem ${category === null ? "active" : ""}`}
            >
              Все
            </li>
            {typesCategories.map((item, index) => (
              <li
                onClick={() => toggleCategory(index)}
                key={`${item}_${index}`}
                className={`filterItem ${
                  category === index ? "active" : "disabled"
                }`}
              >
                {item}
              </li>
            ))}
            <div className="filterTitle">Сортировка по:</div>
            {typesSort.map((item, index) => (
              <li
                className={`filterItem ${
                  selectIndexSort === index ? "active" : ""
                }`}
                key={`${item}_${index}`}
                onClick={() => changeSort(index)}
              >
                {item}
              </li>
            ))}
          </div>
        </div>
      )}
    </div>
  );
});

export default Categories;
