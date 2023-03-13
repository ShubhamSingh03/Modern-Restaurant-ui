import React from "react";

// styles - header
import "./Header.css";

// components & constants
import { SubHeading } from "../../components";
import { images } from "../../constants";

/*****************************
 *
 *  Header component
 *
 ****************************/
const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app__header-h1">The Key To Fine Dining</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        Welcome to our restaurant dining site! Explore our menu and experience
        the best in cuisine, service, and ambiance. Savor every bite with us!{" "}
      </p>
      <button type="button" className="custom__button">
        Explore Menu
      </button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;
