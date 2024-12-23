import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/layout/pages/home/Home";
import Products from "../components/layout/pages/products/Products";
import About from "../components/layout/pages/about/About";
import AdminPanel from "../components/admin/AdminPanel";
import Basket from "../components/layout/product/basket/Basket";
import NotFoundPage from "../components/layout/pages/notFound/NotFoundPage";
import Edit from "../components/layout/product/edit/Edit";

const MainRoutes = () => {
  const PUBLIC = [
    {
      link: "/admin",
      element: <AdminPanel />,
      id: 1,
    },
    {
      link: "/",
      element: <Home />,
      id: 2,
    },
    {
      link: "/products",
      element: <Products />,
      id: 3,
    },
    {
      link: "/about",
      element: <About />,
      id: 4,
    },
    {
      link: "/basket",
      element: <Basket />,
      id: 5,
    },
    {
      // * озночает ошибочный страницы
      link: "*",
      element: <NotFoundPage />,
      id: 6,
    },
    {
      link: "/edit/:id",
      element: <Edit />,
      id: 7,
    },
  ];

  return (
    <Routes>
      {PUBLIC.map(({ link, element, id }) => (
        <Route path={link} element={element} key={id} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
