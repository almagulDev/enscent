import React, { useState } from "react";
import scss from "./Admin.module.scss";
import { useProduct } from "../../context/ProductContext";

const initValue = {
  image: "",
  name: "",
  price: "",
  time: new Date(),
};

const AdminPanel = () => {
  const { addProduct, readProduct } = useProduct();
  const [inputValues, setInputValues] = useState(initValue);

  const handleInput = (e) => {
    if (e.target.name === "price") {
      let obj = { ...inputValues, [e.target.name]: +e.target.value };
      setInputValues(obj);
    } else {
      let obj = { ...inputValues, [e.target.name]: e.target.value };
      setInputValues(obj);
    }
  };
  console.log(inputValues);

  //! ичине backend-ке тушуучу объектти салабыз
  function handleSubmit() {
    addProduct(inputValues);
    setInputValues("");
    readProduct();
  }

  let x = new Date();
  console.log(`${x.getHours()}:${x.getMinutes()}:${x.getSeconds()}`);

  return (
    <div className={scss.admin}>
      <div className="container">
        <div className={scss.content}>
          <div class={scss.input}>
            <input
              value={inputValues.image}
              onChange={handleInput}
              name="image"
              placeholder=""
              type="text"
              id="img"
              required
            />
            <label for="img">img...</label>
          </div>
          <div class={scss.input}>
            <input
              onChange={handleInput}
              name="name"
              placeholder=""
              type="text"
              id="name"
              required
            />
            <label for="name">name...</label>
          </div>
          <div class={scss.input}>
            <input
              onChange={handleInput}
              name="price"
              placeholder=""
              type="text"
              id="price"
              required
            />
            <label for="price">price...</label>
          </div>
          <button onClick={handleSubmit}>ADD</button>
        </div>
        <img
          src="https://www.pngarts.com/files/4/Luxury-Perfume-PNG-Image-with-Transparent-Background.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default AdminPanel;
