import React, { useContext, useState, useEffect } from "react";
import { StoreContext } from "../../Context/StoreContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PlaceOrder = () => {
  const { getTotalCartAmount, token, food_list, cartItems, url } =
    useContext(StoreContext);

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const placeOrder = async (event) => {
    event.preventDefault();
    let orderItems = [];

    // Prepare order items based on cart
    food_list.forEach((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = { ...item }; // Create a copy of the item
        itemInfo["quantity"] = cartItems[item._id]; // Use lowercase 'quantity' for consistency
        orderItems.push(itemInfo);
      }
    });

    // Prepare order data
    let orderData = {
      address: {
        street: data.street,
        city: data.city,
        state: data.state,
        zipcode: data.zipcode,
        country: data.country,
        phone: data.phone,
      },
      items: orderItems,
      amount: getTotalCartAmount() + 2, // Add delivery fee
    };

    try {
      // Send order data to the server
      let response = await axios.post(url + "/api/order/place", orderData, {
        headers: { token },
      });

      if (response.data.success) {
        const { session_url } = response.data;
        console.log("Redirecting to:", session_url);
        window.location.replace(session_url); // Redirect to Stripe checkout
      } else {
        alert("Error placing order. Please try again.");
      }
    } catch (error) {
      console.error("Error placing order:", error);
      alert("An error occurred while placing the order. Please try again.");
    }
  };
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate("/cart");
    } else if (getTotalCartAmount() === 0) {
      navigate("/cart");
    }
  }, [token]);

  return (
    <form
      onSubmit={placeOrder}
      className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-10 p-6 bg-white rounded-lg shadow-md"
    >
      <div className="flex-1">
        <h2 className="text-xl font-semibold mb-4">Delivery Information</h2>
        <div className="grid grid-col-1 gap-4">
          <div className="grid grid-cols-2 gap-4">
            <input
              required
              name="firstName"
              onChange={onChangeHandler}
              value={data.firstName}
              type="text"
              placeholder="First name"
              className="border border-gray-300 rounded p-2"
            />
            <input
              required
              name="lastName"
              onChange={onChangeHandler}
              value={data.lastName}
              type="text"
              placeholder="Last name"
              className="border border-gray-300 rounded p-2"
            />
          </div>
          <input
            required
            name="email"
            onChange={onChangeHandler}
            value={data.email}
            type="email" // Changed to email type for validation
            placeholder="Email address"
            className="border border-gray-300 rounded p-2"
          />
          <input
            required
            name="street"
            onChange={onChangeHandler}
            value={data.street}
            type="text"
            placeholder="Street"
            className="border border-gray-300 rounded p-2"
          />
          <div className="grid grid-cols-2 gap-4">
            <input
              required
              name="city"
              onChange={onChangeHandler}
              value={data.city}
              type="text"
              placeholder="City"
              className="border border-gray-300 rounded p-2"
            />
            <input
              required
              name="state"
              onChange={onChangeHandler}
              value={data.state}
              type="text"
              placeholder="State"
              className="border border-gray-300 rounded p-2"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <input
              required
              name="zipcode"
              onChange={onChangeHandler}
              value={data.zipcode}
              type="text"
              placeholder="Zip code"
              className="border border-gray-300 rounded p-2"
            />
            <input
              required
              name="country"
              onChange={onChangeHandler}
              value={data.country}
              type="text"
              placeholder="Country"
              className="border border-gray-300 rounded p-2"
            />
          </div>
          <input
            required
            name="phone"
            onChange={onChangeHandler}
            value={data.phone}
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
          <button
            type="submit"
            className="bg-red-500 text-white py-2 px-4 rounded mt-2 w-full hover:bg-red-600 transition duration-200"
          >
            PROCEED TO PAYMENT
          </button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
