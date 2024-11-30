import React from "react";
import { assets } from "../../assets/assets";

const AppDownload = () => {
  return (
    <div
      className="app-download max-w-md mx-auto lg:mt-24 sm:mt-5 text-3xl mb-14 text-center font-bold"
      id="app-download"
    >
      <p>
        For a better experience, download <br /> the Tomato App
      </p>
      <div className="app-download-platforms flex justify-center items-center gap-4 mt-4">
        <a href="#" aria-label="Google Play Store">
          <img
            src={assets.play_store}
            alt="Google Play Store"
            className="w-40 h-auto transition-transform transform hover:scale-105 hover:opacity-80"
          />
        </a>
        <a href="#" aria-label="Apple App Store">
          <img
            src={assets.app_store}
            alt="Apple App Store"
            className="w-40 h-auto transition-transform transform hover:scale-105 hover:opacity-80"
          />
        </a>
      </div>
    </div>
  );
};

export default AppDownload;
