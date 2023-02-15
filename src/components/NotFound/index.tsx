import React from "react";
import style from "./not-found.module.scss";

const NotFound: React.FC = () => {
  return (
    <div className={style.root}>
      <h1>
        <span>😕</span>
        <br />
        Ничего не найдено
      </h1>
      <p>К сожалени данная страница отсутствует в нашем интернет-магазине</p>
    </div>
  );
};

export default NotFound;
