import axios from "axios";
import React, { createContext, useContext, useState } from "react";

const productContext = createContext();
export const useProduct = () => useContext(productContext);

const ProductContext = ({ children }) => {
  const [data, setData] = useState([]);
  const [oneProduct, setOneProduct] = useState({});

  const API =
    "https://api.elchocrud.pro/api/v1/e88e8708a51a49d9e787000aed271313/enscent";

  async function addProduct(newProduct) {
    await axios.post(API, newProduct);
  }

  async function readProduct() {
    let { data } = await axios(API);
    setData(data);
  }
  // console.log(data);

  async function deleteProduct(id) {
    await axios.delete(`${API}/${id}`);
    readProduct();
  }

  //! PAGINATION
  const [page, setPage] = useState(1);
  const itemPerPage = 4;
  const count = Math.ceil(data.length / itemPerPage);

  function handlePage() {
    let start = (page - 1) * itemPerPage;
    let end = start + itemPerPage;
    return data.slice(start, end);
  }

  //! Edit
  async function getOneProduct(id) {
    let { data } = await axios(`${API}/${id}`);
    setOneProduct(data);
  }

  async function updateProduct(id, editedProduct) {
    await axios.patch(`${API}/${id}`, editedProduct);
    readProduct();
  }

  const values = {
    addProduct,
    readProduct,
    data,
    deleteProduct,
    handlePage,
    setPage,
    count,
    getOneProduct,
    oneProduct,
    updateProduct,
  };

  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContext;
