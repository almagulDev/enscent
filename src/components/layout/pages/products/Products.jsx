import React, { useEffect } from "react";
import scss from "./Products.module.scss";
import { useProduct } from "../../../../context/ProductContext";
import ProductItem from "../../product/productItem/ProductItem";
import BasicPagination from "../../product/pagination/PaginationProduct";

const Products = () => {
  const { readProduct, data, handlePage } = useProduct();

  useEffect(() => {
    readProduct();
  }, []);

  return (
    <div className={scss.main}>
      <div className={scss.box}></div>
      <div className="container">
        <div className={scss.content}>
          {handlePage().map((item, index) => (
            <ProductItem item={item} key={index} />
          ))}
        </div>
      </div>
      <BasicPagination />
    </div>
  );
};

export default Products;
