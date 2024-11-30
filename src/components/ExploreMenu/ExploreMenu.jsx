import React from "react";
import { menu_list } from "../../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="explore-menu flex flex-col gap-3 " id="explore-menu">
      <h1 className="text-text-color font-semibold  text-3xl">
        Explore our menu
      </h1>
      <p className="explore-menu-text max-w-3xl text-text-color2 font-bold">
        Choose from a diverse menu featuring a delectable array of dishes. Our
        mission is to satify your cravings and elevate your dining experience,
        one delicious meal at a time.
      </p>
      <div className="explore-menu-list flex items-center overflow-x-auto justify-between text-center gap-3 my-5 mx-0 ">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
              key={index}
              className="explore-menu-list-item"
            >
              <img
                className={`min-w-20 cursor-pointer transition duration-2000 rounded-full ${
                  category === item.menu_name
                    ? "border-4 border-red-500 p-1"
                    : ""
                }`}
                src={item.menu_image}
                alt=""
              />
              <p className="text-button-color text-lg mt-1 cursor-pointer">
                {item.menu_name}
              </p>
            </div>
          );
        })}
      </div>
      <hr className="my-1 mx-0 h-0.5 bg-slate-300 border-none" />
    </div>
  );
};

export default ExploreMenu;
