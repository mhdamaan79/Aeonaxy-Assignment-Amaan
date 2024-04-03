import React from "react";
import appStore from "../assets/app-store.svg";
import playStore from "../assets/play-store.svg";
import mobileMedium from "../assets/medium-mobile.png";

const DownloadApp = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between px-10 pt-8 bg-lime-200">
      <div className="flex flex-col gap-8 justify-start w-full md:w-1/2">
        <h1 className="text-8xl">
          Take Medium <br></br> with you.
        </h1>
        <p>Download our app so you can read wherever you are.</p>
        <div className="flex gap-4">
          <img
            src={appStore}
            alt="apple store"
            className="w-32 h-32 inline-block"
          />
          <img
            src={playStore}
            alt="play store"
            className="w-32 h-32 inline-block"
          />
        </div>
      </div>

      <div className="w-full md:w-1/2 relative">
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
