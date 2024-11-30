import React, { useState } from "react";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");

  return (
    <div className="navbar py-5 px-0 flex justify-between items-center">
      <img className="logo w-36 sm:w-28 " src={assets.logo} alt="" />
      <ul className="navbar-menu flex  gap-5 cursor-pointer text-primary-color text-lg sm:hidden xl:flex ">
        <Link
          to="/"
          className={`pb-0 border-b-2  ${
            menu === "home" ? "border-secondary-color" : "border-transparent"
          }`}
          onClick={() => setMenu("home")}
        >
          Home
        </Link>
        <a
          href="#explore-menu"
          className={`pb-0 border-b-2 ${
            menu === "menu" ? "border-secondary-color" : "border-transparent"
          }`}
          onClick={() => setMenu("menu")}
        >
          Menu
        </a>
        <a
          href="#app-download"
          className={`pb-0 border-b-2 ${
            menu === "mobile-app"
              ? "border-secondary-color"
              : "border-transparent"
          }`}
          onClick={() => setMenu("mobile-app")}
        >
          Mobile-app
        </a>
        <a
          href="#footer"
          className={`pb-0 border-b-2 -mb-  ${
            menu === "contact-us"
              ? "border-secondary-color"
              : "border-transparent"
          }`}
          onClick={() => setMenu("contact-us")}
        >
          Contact-us
        </a>
      </ul>
      <div className="navbar-right flex items-center lg:gap-10 sm:gap-3  ">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon relative  ">
          <img src={assets.basket_icon} alt="" />
          <div className="dot absolute min-w-2 min-h-2 bg-red-500 rounded-md -top-2 left-7 "></div>
        </div>
        <button
          onClick={() => setShowLogin(true)}
          className="navbar-button text-base bg-transparent text-secondary-color border border-red-500 py-2 px-8 rounded-full cursor-pointer duration-300 hover:bg-tertiary-color sm:px-5 sm:py-1.5"
        >
          sign in
        </button>
      </div>
    </div>
  );
};

export default Navbar;