import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  return (
    <div className="navbar py-5 px-0 flex justify-between items-center">
      <Link to="/">
        <img className="logo w-36 sm:w-28" src={assets.logo} alt="" />
      </Link>
      <ul className="navbar-menu flex gap-5 cursor-pointer text-primary-color text-lg sm:hidden xl:flex">
        <Link
          to="/"
          className={`pb-0 border-b-2 ${
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
          className={`pb-0 border-b-2 ${
            menu === "contact-us"
              ? "border-secondary-color"
              : "border-transparent"
          }`}
          onClick={() => setMenu("contact-us")}
        >
          Contact-us
        </a>
      </ul>
      <div className="navbar-right flex items-center lg:gap-10 sm:gap-3">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon relative">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="" />
          </Link>
          <div
            className={`${
              getTotalCartAmount() === 0
                ? ""
                : "absolute min-w-2 min-h-2 bg-red-500 rounded-md -top-2 left-7"
            }`}
          />
        </div>
        {!token ? (
          <button
            onClick={() => setShowLogin(true)}
            className="navbar-button text-base bg-transparent text-secondary-color border border-red-500 py-2 px-8 rounded-full cursor-pointer duration-300 hover:bg-tertiary-color sm:px-5 sm:py-1.5"
          >
            Sign in
          </button>
        ) : (
          <div className="navbar-profile relative group">
            <img src={assets.profile_icon} alt="Profile Icon" />
            <ul className="nav-profile-dropdown w-auto  px-6 bg-[#fff2ef] hidden absolute right-0 z-10 border border-red-500 flex-col group-hover:flex cursor-pointer">
              <li
                onClick={() => navigate("/myorders")}
                className=" items-center mr-3 flex hover:bg-gray-100 hover:text-red-500"
              >
                <img
                  src={assets.bag_icon}
                  alt="Bag Icon"
                  className="mr-2 w-6"
                />
                <p className="my-2 ">Orders</p>
              </li>
              <hr className="my-1 mx-0 h-0.5 bg-slate-300 border-none" />
              <li className="flex items-center  hover:bg-gray-100 hover:text-red-500">
                <img
                  src={assets.logout_icon}
                  alt="Logout Icon"
                  className="mr-2 w-6"
                />
                <p onClick={logout} className="my-2">
                  Logout
                </p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
