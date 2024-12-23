import React from "react";
import scss from "./Header.module.scss";
import Person2Icon from "@mui/icons-material/Person2";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { NavLink } from "react-router-dom";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";

const Header = () => {
  return (
    <header className={scss.header}>
      <div className="container">
        <div className={scss.content}>
          <h2>ENSCENT</h2>
          <nav>
            <NavLink to="/admin">
              <AdminPanelSettingsIcon />
            </NavLink>
            <NavLink to="/">
              <p>HOME</p>
            </NavLink>
            <NavLink to="/products">
              <p>PRODUCTS</p>
            </NavLink>
            <NavLink to="/about">
              <p>ABOUT</p>
            </NavLink>
          </nav>
          <div className={scss.icons}>
            <NavLink to="/login">
              <Person2Icon />
            </NavLink>
            <NavLink to="/favorite">
              <FavoriteIcon />
            </NavLink>
            <NavLink to="/basket">
              <ShoppingBasketIcon />
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
