import React from "react";

const Header = () => {
  return (
    <div
      className="header"
      style={{
        backgroundImage: `url('/header_img.png')`,
        backgroundSize: "cover ",
        backgroundRepeat: "no-repeat",
        position: "relative",
        height: "34vw",
        margin: "30px auto",
        padding: "",
      }}
    >
      <div className="header-contents fade-in absolute flex flex-col items-start gap-3 lg:max-w-[50%] lg:bottom-8 lg:left-14 sm:left-5 sm:bottom-2 ">
        <h2 className="font-semibold tracking-tight text-white lg:text-7xl sm:text-2xl  ">
          Order your <br /> favorite food here
        </h2>
        <p className="text-white leading-6 lg:text-lg sm:text-sm sm:hidden lg:block">
          Choose from a diverse menu featuring a delectable array of dishes
          crafted with the finest ingredients and culinary expertise. Our
          mission is to satisfy your cravings and elevate your dining expertise,
          one delicious meal at a time.
        </p>
        <button className="bg-white text-button-color text-sm rounded-full lg:px-8 font-bold lg:p-3 sm:px-4 sm:p-2">
          View Menu
        </button>
      </div>
    </div>
  );
};

export default Header;
