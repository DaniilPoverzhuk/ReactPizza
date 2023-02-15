import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Categories from "../../components/Categories";
import PizzaItem from "../../components/PizzaItem";
import { Skeleton } from "../../components/Skeleton";
import Sort from "../../components/Sort";
import fetchPizzas from "../../redux/slices/pizza/asyncAction";
import { Status } from "../../redux/slices/pizza/types";
import { RootState, useAppDispatch } from "../../redux/store";
import style from "./home.module.scss";

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const { items, status } = useSelector((state: RootState) => state.pizza);
  const { categoryId, sort, searchValue } = useSelector(
    (state: RootState) => state.filter
  );

  useEffect(() => {
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const orderBy = `orderBy=${sort.type}`;
    const order = `order=${sort.sortProperty}`;
    const search = searchValue && `search=${searchValue}`;

    dispatch(fetchPizzas({ category, orderBy, order, search }));
  }, [categoryId, sort, searchValue]);

  return (
    <div className={style.root}>
      <div className={style.top}>
        <Categories />
        <Sort />
      </div>
      <div
        className={
          !items.length && status !== Status.LOADING
            ? style.mainFlex
            : style.mainGrid
        }
      >
        {status === Status.LOADING ? (
          [...new Array(9)].map((_, idx) => <Skeleton key={idx} />)
        ) : !items.length ? (
          <h1 className={style.searchError}>
            Извините, у нас нет таких пицц в наличии😕
          </h1>
        ) : (
          items.map((item, idx) => <PizzaItem key={idx} {...item} />)
        )}
      </div>
    </div>
  );
};

export default Home;
