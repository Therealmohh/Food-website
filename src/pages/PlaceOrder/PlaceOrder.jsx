import React, { useContext } from "react";
import { StoreContext } from "../../Context/StoreContext";

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <form className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-10 p-6 bg-white rounded-lg shadow-md">
      <div className="flex-1 ">
        <h2 className="text-xl font-semibold mb-4">Delivery Information</h2>
        <div className="grid grid-col-1 gap-4">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First name"
              className="border border-gray-300 rounded p-2"
            />
            <input
              type="text"
              placeholder="Last name"
              className="border border-gray-300 rounded p-2"
            />
          </div>
          <input
            type="text"
            placeholder="Email address"
            className="border border-gray-300 rounded p-2"
          />
          <input
            type="text"
            placeholder="Street"
            className="border border-gray-300 rounded p-2"
          />
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="City"
              className="border border-gray-300 rounded p-2"
            />
            <input
              type="text"
              placeholder="State"
              className="border border-gray-300 rounded p-2"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Zip code"
              className="border border-gray-300 rounded p-2"
            />
            <input
              type="text"
              placeholder="Country"
              className="border border-gray-300 rounded p-2"
            />
          </div>
          <input
            type="text"
            placeholder="Phone"
            className="border border-gray-300 rounded p-2"
          />
        </div>
      </div>
      <div className="place-order-right w-full lg:w-1/3">
        <div className="cart-total bg-gray-100 p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Cart Totals</h2>
          <div className="cart-total-details flex justify-between py-2">
            <p>Subtotal</p>
            <p>${getTotalCartAmount().toFixed(2)}</p>
          </div>
          <hr className="my-2" />
          <div className="cart-total-details flex justify-between py-2">
            <p>Delivery Fee</p>
            <p>{getTotalCartAmount() === 0 ? 0 : 2}</p>
          </div>
          <hr className="my-2" />
          <div className="cart-total-details flex justify-between font-bold py-2">
            <p>Total</p>
            <p>
              $
              {(getTotalCartAmount() === 0
                ? 0
                : getTotalCartAmount() + 2
              ).toFixed(2)}
            </p>
          </div>
          <button className="bg-red-500 text-white py-2 px-4 rounded mt-2 w-full hover:bg-red-600 transition duration-200">
            PROCEED TO PAYMENT
          </button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
