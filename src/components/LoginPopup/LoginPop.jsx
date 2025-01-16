import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../Context/StoreContext";
import axios from "axios";
const LoginPopUp = ({ setShowLogin }) => {
  const { url, setToken } = useContext(StoreContext);

  const [currentState, setCurrentState] = useState("Login");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };
  const onLogin = async (event) => {
    event.preventDefault();
    let newUrl = url;
    if (currentState === "Login") {
      newUrl += "/api/user/login";
    } else {
      newUrl += "/api/user/register";
    }

    const response = await axios.post(newUrl, data);

    if (response.data.success) {
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      setShowLogin(false);
    } else {
      alert(response.data.message);
    }
  };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <form
        onSubmit={onLogin}
        className="bg-white rounded-lg shadow-lg p-6 w-11/12 max-w-sm"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">{currentState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt="Close"
            className="w-6 h-6 cursor-pointer"
          />
        </div>
        <div className="space-y-4">
          {currentState === "Login" ? null : (
            <input
              name="name"
              onChange={onChangeHandler}
              value={data.name}
              type="text"
              placeholder="Your name"
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-red-300"
            />
          )}
          <input
            name="email"
            onChange={onChangeHandler}
            value={data.email}
            type="email"
            placeholder="Your email"
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-red-300"
          />
          <input
            name="password"
            onChange={onChangeHandler}
            value={data.password}
            type="password"
            placeholder="Password"
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-red-300"
          />
        </div>
        <button
          type="submit"
          className="w-full mt-4 p-2 bg-red-500 text-white rounded-md hover:bg-red-800 transition duration-200"
        >
          {currentState === "Sign Up" ? "Create account" : "Login"}
        </button>
        <div className="flex items-center mt-4">
          <input type="checkbox" required className="mr-2" />
          <p className="text-sm">
            By continuing, I agree to the terms of use & privacy policy.
          </p>
        </div>
        <p className="mt-4 text-sm">
          {currentState === "Login" ? (
            <>
              Create a new account?{" "}
              <span
                onClick={() => setCurrentState("Sign Up")}
                className="text-red-600 cursor-pointer hover:underline"
              >
                Click here
              </span>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <span
                onClick={() => setCurrentState("Login")}
                className="text-red-600 cursor-pointer hover:underline"
              >
                Click here
              </span>
            </>
          )}
        </p>
      </form>
    </div>
  );
};

export default LoginPopUp;
