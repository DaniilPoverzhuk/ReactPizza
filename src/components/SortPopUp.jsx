import React, { memo, useRef, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { setSortBy } from "../redux/actions/filters";

const typesSort = [
  "популярности",
  "сначала недорогие",
  "сначала дорогие",
  "алфавиту",
];
const typesSortRedux = ["popular", "priceLow", "priceHigh", "alphabet"];

const SortPopUp = memo(function SortPopUp() {
  const dispatch = useDispatch();
  const [selectIndexSort, setSelectIndexSort] = useState(0);
  const [visibleSortPopUp, setVisibleSortPopUp] = useState(false);
  const activeSortItem = typesSort[selectIndexSort];
  const SortPopUpRef = useRef();

  const changeSort = (index) => {
    setSelectIndexSort(index);
    setVisibleSortPopUp(false)
    dispatch(setSortBy(typesSortRedux[index]));
  };

  const openSortPopUp = () => {
    setVisibleSortPopUp(true);
  }

  const closePopUp = (event) => {
    const path = event.path || (event.composedPath && event.composedPath());
    if (!path.includes(SortPopUpRef.current)) {
      return setVisibleSortPopUp(false);
    }
  };

  React.useEffect(() => {
    document.body.addEventListener("click", closePopUp);
  }, []);

  return (
    <div ref={SortPopUpRef} className="sort">
      <div className={`sort__label ${visibleSortPopUp ? "open" : ""}`}>
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Сортировка по:</b>
        <span onClick={openSortPopUp}>{activeSortItem}</span>
      </div>
      {visibleSortPopUp && (
        <div className="sort__popup">
          <ul>
            {typesSort.map((item, index) => (
              <li
                className={`${selectIndexSort === index ? "active" : ""}`}
                key={`${item}_${index}`}
                onClick={() => changeSort(index)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
});

SortPopUp.propTypes = {
  onClick: PropTypes.func,
  setVisibleSortPopUp: PropTypes.func,
  visibleSortPopUp: PropTypes.bool,
};

SortPopUp.defaultProps = { visibleSortPopUp: false };

export default SortPopUp;
