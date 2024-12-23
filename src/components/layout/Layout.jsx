import React from "react";
import scss from "./Layout.module.scss";
import Header from "./header/Header";
import MainRoutes from "../../routes/MainRoutes";
import Footer from "./footer/Footer";
import { useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();
  console.log(location);

  return (
    <div className={scss.layout}>
      <Header />
      <main>
        <MainRoutes />
      </main>
      {location.pathname === "/admin" ? null : <Footer />}
    </div>
  );
};

export default Layout;
