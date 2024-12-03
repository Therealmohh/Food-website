import React, { useContext } from "react";
import { StoreContext } from "../../Context/StoreContext";

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } =
    useContext(StoreContext);

  //   const subtotal = food_list.reduce((total, item) => {
  //     return total + item.price * (cartItems[item._id] || 0);
  //   }, 0);

  //   const deliveryFee = 2;
  //   const total = subtotal + deliveryFee;

  return (
    <div className=" mx-auto p-4 sm:text-sm">
      <div className="">
        <div className="grid grid-cols-6 lg:gap-4 sm:gap-3 sm:w-full sm:bg-gray-100 p-2">
          <div className="font-semibold">Image</div>
          <div className="font-semibold">Title</div>
          <div className="font-semibold">Price</div>
          <div className="font-semibold sm:-ml-3">Quantity</div>

          <div className="font-semibold">Total</div>
          <div className="font-semibold">Remove</div>
        </div>
        <hr className="my-2" />
        {food_list.map((item) => {
          if (cartItems[item._id] > 0) {
            return (
              <div
                key={item._id}
                className="grid grid-cols-6 lg:gap-4 sm:gap-3 items-center border-b py-2"
              >
                <div>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover"
                  />
                </div>
                <div>{item.name}</div>
                <div>${item.price.toFixed(2)}</div>
                <div>{cartItems[item._id]}</div>
                <div>${(item.price * cartItems[item._id]).toFixed(2)}</div>
                <div>
                  <button
                    onClick={() => removeFromCart(item._id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              </div>
            );
          }
        })}
      </div>

      <div className="lg:flex sm:flex justify-between sm:flex-col-reverse mt-4 p-4 rounded">
        <div className="cart-total sm:-ml-6 lg:w-1/2 pr-4">
          <h2 className="text-xl font-semibold mb-2">Cart Totals</h2>
          <div className="cart-total-details flex justify-between py-2">
            <p>Subtotal</p>
            {/* <p>${subtotal.toFixed(2)}</p> */}
            <p>${getTotalCartAmount()}</p>
          </div>
          <div className="cart-total-details flex justify-between py-2">
            <p>Delivery Fee</p>
            {/* <p>${deliveryFee.toFixed(2)}</p> */}
            <p>${2}</p>
          </div>
          <hr className="my-2" />
          <div className="cart-total-details flex justify-between font-bold py-2">
            <p>Total</p>
            {/* <p>${total.toFixed(2)}</p> */}
            <p>${getTotalCartAmount() + 2}</p>
          </div>
          <button className="bg-red-500 text-white py-2 px-4 rounded mt-2 w-full">
            PROCEED TO CHECKOUT
          </button>
        </div>

        <div className="cart-promocode lg:w-1/2 pl-4 sm:text-lg sm:mb-6">
          <p>If you have a promo code, enter it here:</p>
          <div className="promocode-input flex mt-2">
            <input
              type="text"
              placeholder="Promo code"
              className="border border-gray-300 rounded-l px-2 py-1 w-full"
            />
            <button className="bg-black text-white px-4 rounded sm:px-6=">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
