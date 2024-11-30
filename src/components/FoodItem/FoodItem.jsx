import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../Context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {
  const [itemCount, setItemCount] = useState(0);
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  const handleAddToCart = () => addToCart(id);
  const handleRemoveFromCart = () => removeFromCart(id);

  return (
    <div className="food-item w-full m-auto rounded-lg shadow-lg fade-in">
      <div className="food-item-img container relative">
        <img
          className="food-item-image lg:w-full sm:w-full md:w-2/3 rounded-lg right object-cover "
          src={image}
          alt=""
        />
        {!cartItems[id] ? (
          <img
            className="add absolute bottom-4 w-8 right-4 cursor-pointer rounded-lg sm:-right-38"
            onClick={handleAddToCart}
            src={assets.add_icon_white}
            alt=""
          />
        ) : (
          <div className="food-item-counter absolute bottom-3 right-3 flex items-center gap-2 p-1 rounded-full bg-white">
            <img
              className="w-5"
              onClick={handleRemoveFromCart}
              src={assets.remove_icon_red}
              alt=""
            />{" "}
            <p>{cartItems[id]}</p>
            <img
              className="w-5"
              onClick={handleAddToCart}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )}
      </div>
      <div className="food-item-info p-4">
        <div className="food-item-name-rating flex justify-between mb-1 items-center">
          <p className="font-semibold text-lg">{name}</p>
          <img className="w-20" src={assets.rating_starts} alt="Rating Stars" />
        </div>
        <p className="food-item-desc text-base text-gray-700">{description}</p>
        <div className="food-item-price text-red-500  font-bold text-lg">
          ${price}
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
