import React from "react";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div
      className="footer text-white bg-gray-800 flex flex-col items-center gap-5 py-10"
      id="footer"
    >
      <div
        className="footer-content w-full grid grid-cols-1 md:grid-cols-3 gap-8"
        style={{ width: "80%", margin: "0 auto" }}
      >
        <div className="footer-content-left text-center">
          <img
            src={assets.logo}
            alt="Company Logo"
            className="mb-4 w-32 h-auto sm:ml-20"
          />
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis
            id sapiente, cum distinctio porro cumque aut veniam ut neque iusto
            et in ipsa praesentium impedit ullam incidunt qui beatae.
          </p>
          <div className="footer-social-icons flex justify-center space-x-4 mt-4">
            <a href="#" aria-label="Facebook">
              <img
                src={assets.facebook_icon}
                alt="Facebook"
                className="w-6 h-6 hover:opacity-75 transition-opacity"
              />
            </a>
            <a href="#" aria-label="Twitter">
              <img
                src={assets.twitter_icon}
                alt="Twitter"
                className="w-6 h-6 hover:opacity-75 transition-opacity"
              />
            </a>
            <a href="#" aria-label="LinkedIn">
              <img
                src={assets.linkedin_icon}
                alt="LinkedIn"
                className="w-6 h-6 hover:opacity-75 transition-opacity"
              />
            </a>
          </div>
        </div>
        <div className="footer-content-center text-center">
          <h2 className="text-lg font-bold">COMPANY</h2>
          <ul className="mt-2 space-y-1">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Delivery
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-content-right text-center">
          <h2 className="text-lg font-bold">GET IN TOUCH</h2>
          <ul className="mt-2 space-y-1">
            <li>08046826548</li>
            <li>
              <a href="mailto:contact@kwasu.com" className="hover:underline">
                contact@kwasu.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="border-gray-600 w-full my-4" />
      <p className="copyright text-sm text-center">
        &copy; {new Date().getFullYear()} Kwasu CSC Group 7 - All rights
        reserved.
      </p>
    </div>
  );
};

export default Footer;
