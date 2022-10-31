import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Categories from "../components/Categories";
import PizzaBlock from "../components/PizzaBlock";
import PizzaBlockLoader from "../components/PizzaBlockLoader";
import SortPopUp from "../components/SortPopUp";
import { fetchPizzas } from "../redux/actions/asyncActions";
import { setCartPizzas } from "../redux/actions/cart";
import { setLoading } from "../redux/actions/pizzas";

const typesCategories = [
  "Мясные",
  "Вегетарианские",
  "Гриль",
  "Острые",
  "Закрытые",
];

function Home() {
  const dispatch = useDispatch();
  const { items, isLoaded } = useSelector((store) => store.pizzas);
  const addedCount = useSelector(({ cart }) => cart.items);
  const { category, sortBy } = useSelector((store) => store.filters);
  const [activeCategory, setActiveCategory] = useState(null);

  const addPizzaToCart = (obj) => {
    dispatch(setCartPizzas(obj));
  };

  useEffect(() => {
    dispatch(setLoading(false));
    dispatch(fetchPizzas(category, sortBy));
  }, [category, sortBy]);

  return (
    <div>
      <div className="content__top">
        <Categories
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        <SortPopUp />
      </div>
      <h2 className="content__title">
        {typesCategories[category] || "Все"} пиццы
      </h2>
      <div className="content__items">
        {isLoaded
          ? items.map((item) => (
              <PizzaBlock
                onClickAddPizza={addPizzaToCart}
                addedCount={addedCount?.[item.id]?.itemsLength}
                key={item.id}
                {...item}
              />
            ))
          : Array(9)
              .fill(0)
              .map((_, index) => <PizzaBlockLoader key={index} />)}
      </div>
    </div>
  );
}

export default Home;
