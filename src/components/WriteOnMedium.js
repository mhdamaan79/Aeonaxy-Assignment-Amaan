import React from "react";
import logo from "../assets/medium-logo-2.svg";
import Button from "./Button";

// -- WriteOnMedium component --
const WriteOnMedium = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 bg-black text-white">
      {/* Section 1 */}
      <div className="col-span-1 md:col-span-2 flex flex-col md:flex-row max-md:justify-center max-md:items-center border-b-2 border-orange-300">
        {/* A */}
        <div className="max-md:border-b-2 md:border-r-2 border-orange-300 px-8 md:px-14 lg:px-16 pt-10 pb-16 w-full md:w-3/4 lg:w-4/5 xl:w-1/2">
          <h1 className="text-6xl lg:text-7xl xl:text-8xl max-md:text-center">
            Over 100 million readers and growing.
          </h1>
        </div>

        {/* B */}
        <div className="w-3/4 lg:w-4/5 xl:w-1/2 flex flex-col justify-center items-center md:items-start px-8 pb-16">
          <img
            src={logo}
            alt="medium-logo"
            className="w-64 h-64 inline-block mb-6 md:mb-0"
          />
          <div className="flex flex-col items-center md:items-start gap-6">
            <p className="text-base lg:text-lg max-md:text-center w-3/4">
              "Medium is a great place to read and learn from a wide range of
              authors. It's not muddied up by ads. It feels like one of the few
              pure places to go online. Medium is a great place to read and
              learn from a wide range of authors."
            </p>
            <p className="text-base lg:text-lg">Jackie Colburn</p>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="col-span-1 md:col-span-2 px-8 md:px-14 lg:px-16 py-10 lg:py-14 text-center">
        <div className="flex flex-col justify-center items-center gap-6 mb-10">
          <h1 className="text-6xl lg:text-8xl">
            Create the space for your thinking to take off.
          </h1>
          <p className="text-base lg:text-lg w-3/4 lg:w-2/4">
            Medium presents itself as a space that allows great thinking and
            ideas to flourish by removing barriers and connecting passionate
            writers, thinkers, and readers in an engaging community.
          </p>
        </div>
        <Button
          borderColor="border-[#00A300]"
          textColor="text-[#00A300]"
          content={"Write on Medium"}
        />
      </div>
    </div>
  );
};

export default WriteOnMedium;
