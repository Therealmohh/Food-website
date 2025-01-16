// import React, { useContext, useState, useEffect } from "react";
// import { StoreContext } from "../../Context/StoreContext";
// import axios from "axios";
// import { assets } from "../../assets/assets";

// const MyOrders = () => {
//   const { url, token } = useContext(StoreContext);
//   const [data, setData] = useState([]);

//   const fetchOrders = async () => {
//     const response = await axios.post(
//       url + "/api/order/userorders",
//       {},
//       { headers: { token } }
//     );
//     setData(response.data.data);
//   };

//   useEffect(() => {
//     if (token) {
//       fetchOrders();
//     }
//   }, [token]);

//   return (
//     <div className="my-orders">
//       <h2>My Orders</h2>
//       <div className="container">
//         {data.map((order, index) => {
//           return (
//             <div key={index} className="my-orders-order">
//               <img src={assets.parcel_icon} alt="" />
//               <p>
//                 {order.items.map((item, index) => {
//                   if (index === order.items.length - 1) {
//                     return item.name + "x" + item.quantity;
//                   } else {
//                     return item.name + " x" + item.quantity + ", ";
//                   }
//                 })}
//               </p>
//               <p>${order.amount}.00</p>
//               <p>Items:{order.items.length}</p>
//               <p>
//                 <span>&#x25cf;</span> <b>{order.status}</b>
//                 <button>Track Order</button>
//               </p>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default MyOrders;

import React, { useContext, useState, useEffect } from "react";
import { StoreContext } from "../../Context/StoreContext";
import axios from "axios";
import { assets } from "../../assets/assets";

const MyOrders = () => {
  const { url, token } = useContext(StoreContext);
  const [data, setData] = useState([]);

  const fetchOrders = async () => {
    const response = await axios.post(
      url + "/api/order/userorders",
      {},
      { headers: { token } }
    );
    setData(response.data.data);
  };

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);

  return (
    <div className=" mx-auto p-4 sm:p-6">
      <h2 className="text-2xl font-bold mb-4">My Orders</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6 sm:gap-4">
        {data.map((order, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 flex flex-col justify-between"
          >
            <div className="flex sm:flex-col items-center mb-4  ">
              <img
                src={assets.parcel_icon}
                alt="Parcel Icon"
                className="w-12 h-12 mr-4 sm:mb-4"
              />
              <div>
                <p className="text-lg sm:mb-4 font-semibold">
                  {order.items.map((item, index) => (
                    <span key={index}>
                      {item.name} x {item.quantity}
                      {index < order.items.length - 1 ? ", " : ""}
                    </span>
                  ))}
                </p>
                <p className="text-gray-600">${order.amount}.00</p>
                <p className="text-gray-600">Items: {order.items.length}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="flex items-center">
                <span
                  className={`text-${
                    order.status === "Delivered" ? "green" : "red"
                  }-500`}
                >
                  &#x25cf;
                </span>
                <b className="ml-1">{order.status}</b>
              </p>
              <button className="mt-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-900 transition">
                Track Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;
