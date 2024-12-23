import React, { useEffect, useState } from "react";
import scss from "./Edit.module.scss";
import { useParams } from "react-router-dom";
import { useProduct } from "../../../../context/ProductContext";

const initValue = {
  image: "",
  name: "",
  price: "",
  time: new Date(),
};

const Edit = () => {
  const { getOneProduct, oneProduct, updateProduct } = useProduct();
  const [inputValues, setInputValues] = useState(initValue);

  const { id } = useParams();

  useEffect(() => {
    getOneProduct(id);
    console.log(id);
  }, []);

  useEffect(() => {
    if (oneProduct) {
      setInputValues(oneProduct);
    }
  }, [oneProduct]);

  function handleSave() {
    updateProduct(id, inputValues);
    setInputValues("");
  }

  return (
    <div className={scss.admin}>
      <div className="container">
        <div className={scss.content}>
          <div class={scss.input}>
            <input
              //   onChange={inputValues.img}
              name="image"
              placeholder=""
              type="text"
              id="img"
              required
            />
            <label for="img">edit img...</label>
          </div>
          <div class={scss.input}>
            <input
              onChange={inputValues.name}
              name="name"
              placeholder=""
              type="text"
              id="name"
              required
            />
            <label for="name">edit name...</label>
          </div>
          <div class={scss.input}>
            <input
              //   onChange={inputValues}
              name="price"
              placeholder=""
              type="text"
              id="price"
              required
            />
            <label for="price">edit price...</label>
          </div>
          <button onClick={handleSave}>SAVE</button>
        </div>
        <img
          src="https://www.pngarts.com/files/4/Luxury-Perfume-PNG-Image-with-Transparent-Background.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Edit;
