import React, { useEffect, useState } from "react";
import scss from "./Basket.module.scss";
import { useBasket } from "../../../../context/BasketContext";

const Basket = () => {
  const { readBasket, basket } = useBasket();

  useEffect(() => {
    readBasket();
  }, []);

  return (
    <div className={scss.basket}>
      {basket.map((el) => (
        <div className={scss.content}>
          <img src={el.img} alt="img" />
          <h1>{el.name}</h1>
          <p>{el.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Basket;
