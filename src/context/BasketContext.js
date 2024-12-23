import React, { createContext, useContext, useState } from "react";
import axios from "axios";

const BasketContext = createContext();
export const useBasket = () => useContext(BasketContext);

const API =
  "https://api.elchocrud.pro/api/v1/e88e8708a51a49d9e787000aed271313/enscent";

const Basket = ({ children }) => {
  const [basket, setBasket] = useState([]);

  async function addToBasket(order) {
    // const { data } = await axios.post(API, order);
    console.log(order);
  }

  async function readBasket() {
    // let { data } = await axios(API);
    // setBasket(data);
    console.log(basket);
  }

  const values = {
    addToBasket,
    readBasket,
    basket,
  };

  return (
    <BasketContext.Provider value={values}>{children}</BasketContext.Provider>
  );
};

export default Basket;
