// import React, { useContext, useEffect } from "react";
// import { useNavigate, useSearchParams } from "react-router-dom";
// import { StoreContext } from "../../Context/StoreContext";
// import axios from "axios";

// const Verify = () => {
//   const [searchParams, setSearchParams] = useSearchParams();
//   const success = searchParams.get("success");
//   const orderId = searchParams.get("orderId");
//   const { url } = useContext(StoreContext);
//   const navigate = useNavigate()

//   const verifyPayment = (asnyc) => {
//     const response = await axios.post(url+"/api/order/verify", {success, orderId})
//     if (response.data.success) {
//         navigate("/myorders")

//     }
//     else{
//         navigate("/")
//     }
//     useEffect(()=>{
//         verifyPayment()
//     }, [])
//   };

//   return (
//     <div className="verify">
//       <div className="spinner"></div>
//     </div>
//   );
// };

// export default Verify;

import React, { useContext, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";
import axios from "axios";

const Verify = () => {
  const [searchParams] = useSearchParams();
  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");
  const { url } = useContext(StoreContext);
  const navigate = useNavigate();

  const verifyPayment = async () => {
    try {
      const response = await axios.post(url + "/api/order/verify", {
        success,
        orderId,
      });
      if (response.data.success) {
        navigate("/myorders");
      } else {
        navigate("/");
      }
    } catch (error) {
      console.error("Error verifying payment:", error);
      navigate("/");
    }
  };

  useEffect(() => {
    verifyPayment();
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center">
        <div className="spinner border-t-4 border-b-4 border-red-500 rounded-full w-16 h-16 animate-spin"></div>
        <p className="mt-4 text-lg">Verifying your payment...</p>
      </div>
    </div>
  );
};

export default Verify;
