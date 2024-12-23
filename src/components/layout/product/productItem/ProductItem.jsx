import React, { useContext } from "react";
import scss from "./ProductItem.module.scss";
import { useProduct } from "../../../../context/ProductContext";
import { useNavigate } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Home from "../../pages/home/Home";

const ProductItem = ({ item }) => {
  const { deleteProduct, setPage } = useProduct();

  const navigate = useNavigate();

  return (
    <div className={scss.home}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.boxes}>
            <div className={scss.box}>
              <FavoriteIcon className={scss.heart} />
              <img src={item.image} alt="alt" />
              <p>{item.name}</p>
              <h4>{item.price}$</h4>
              <button>ADD TO BUSKET</button>
              <DeleteIcon
                onClick={() => deleteProduct(item._id)}
                className={scss.delete}
              />
              <EditIcon
                className={scss.edit}
                onClick={() => navigate(`/edit/${item._id}`)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
