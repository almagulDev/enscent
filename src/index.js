import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ProductContext from "./context/ProductContext";
import BasketContext from "./context/BasketContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ProductContext>
    <BasketContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </BasketContext>
  </ProductContext>
);
