import React, { ChangeEvent, useEffect, useState } from "react";
import style from "./search.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";
import { debounce } from "lodash";
import { RootState, useAppDispatch } from "../../redux/store";
import { setSearchValue } from "../../redux/slices/filter/filterSlice";
import { useSelector } from "react-redux";

const Search: React.FC = () => {
  const dispatch = useAppDispatch();
  const { searchValue } = useSelector((state: RootState) => state.filter);
  const [value, setValue] = useState("");

  const handlerInput = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    debounce(() => {
      dispatch(setSearchValue(value));
    }, 400)();
  }, [value]);

  const clearInput = () => {
    setValue("");
  };

  return (
    <div className={style.root}>
      <input
        type="text"
        value={value}
        placeholder="Поиск пиццы..."
        className={style.input}
        onChange={handlerInput}
      />
      {searchValue && (
        <FontAwesomeIcon
          icon={faXmark}
          className={style.iconClose}
          onClick={clearInput}
        />
      )}
      <FontAwesomeIcon icon={faMagnifyingGlass} className={style.iconSearch} />
    </div>
  );
};

export default Search;
