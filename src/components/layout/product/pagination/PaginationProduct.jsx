import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useProduct } from "../../../../context/ProductContext";
import scss from "./Pagination.module.scss";

export default function BasicPagination() {
  const { setPage, count } = useProduct();

  function handlePagination(p, n) {
    setPage(n);
  }

  return (
    <div className={scss.content}>
      <Pagination onChange={handlePagination} count={count} color="primary" />
    </div>
  );
}
