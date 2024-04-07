import React from "react";
import appStore from "../assets/app-store.svg";
import playStore from "../assets/play-store.svg";
import mobileMedium from "../assets/medium-mobile.png";

// -- DownloadApp component --
const DownloadApp = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-between px-10 pt-8 bg-lime-200">
      {/* Section 1 */}
      <div className="flex flex-col gap-4 md:gap-6 lg:gap-8 justify-start max-md:items-center w-full md:w-1/2">
        <h1 className="text-6xl lg:text-8xl max-md:text-center">
          Take Medium <br></br> with you.
        </h1>
        <p>Download our app so you can read wherever you are.</p>
        <div className="flex gap-2 md:gap-4">
          <img
            src={appStore}
            alt="apple store"
            className="w-28 h-28 md:w-24 lg:w-32 md:h-24 lg:h-32 inline-block"
          />
          <img
            src={playStore}
            alt="play store"
            className="w-28 h-28 md:w-24 lg:w-32 md:h-24 lg:h-32 inline-block"
          />
        </div>
      </div>

      {/* Section 2 */}
      <div className="w-full md:w-1/2 max-md:mt-80 relative">
        <img
          src={mobileMedium}
          alt="mobile-medium"
          className="absolute bottom-0"
        />
      </div>
    </div>
  );
};

export default DownloadApp;
