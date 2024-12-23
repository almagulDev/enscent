import React, { useEffect } from "react";
import scss from "./Home.module.scss";
import { useProduct } from "../../../../context/ProductContext";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import line from "../../../../images/Line 1.svg";
import ProductItem from "../../product/productItem/ProductItem";

const Home = () => {
  const { readProduct, data, handlePage } = useProduct();

  const sortedData = data.sort((a, b) => new Date(a.time) - new Date(b.time));

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    readProduct();
  }, []);

  return (
    <div className={scss.home}>
      <div className={scss.white}></div>
      <div className={scss.back}>
        <img src={line} alt="img" />
        <h1>NEW IN ENSCENT</h1>
        <img src={line} alt="img" />
      </div>
      <div className="container">
        <div className={scss.content}>
          <Slider {...settings}>
            {sortedData.slice(-4).map((item, index) => (
              <div key={index} className={scss.box}>
                <img src={item.image} alt={item} width={200} />
                <p>{item.name}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Home;
