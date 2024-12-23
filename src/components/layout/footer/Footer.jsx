import React from "react";
import scss from "./Footer.module.scss";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

const Footer = () => {
  return (
    <footer className={scss.footer}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.left}>
            <h2>OFFERS AND TRENDS</h2>
            <h1>Newsletter Application</h1>
            <p>
              Enter your email address and let us notify you <br />
              about news and discounts...
            </p>
            <div className={scss.box}>
              <input placeholder="email:" type="text" />
              <button>SIGN UP</button>
            </div>
          </div>
          <div className={scss.right}>
            <h2>STAY UP TO DATE</h2>
            <h1>Follow Us</h1>
            <p>
              Become part of our friends on social networks and <br /> find out
              first about the discounts and novelties that <br /> we announce...
            </p>
            <div className={scss.icons}>
              <InstagramIcon sx={{ color: "white", fontSize: "50px" }} />
              <FacebookIcon sx={{ color: "white", fontSize: "50px" }} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
