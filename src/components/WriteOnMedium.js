import React from "react";
import logo from "../assets/medium-logo-2.svg";
import Button from "./Button";

const WriteOnMedium = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 bg-black text-white">
      <div className="col-span-1 md:col-span-2 md:flex border-b-2 border-orange-300">
        <div className="border-r-2 border-orange-300 px-16 pt-10 pb-16 md:w-1/2">
          <h1 className="text-8xl">Over 100 million readers and growing.</h1>
        </div>
        <div className="md:w-1/2 flex flex-col gap-4 justify-start items-start px-8">
          <img src={logo} alt="logo" className="w-64 h-64 inline-block" />
          <div className="flex flex-col gap-6">
            <p className="w-3/4">
              "Medium is a great place to read and learn from a wide range of
              authors. It's not muddied up by ads. It feels like one of the few
              pure places to go online. Medium is a great place to read and
              learn from a wide range of authors."
            </p>
            <p className="">Jackie Colburn</p>
          </div>
        </div>
      </div>

      <div className="col-span-1 md:col-span-2 px-8 py-14 text-center">
        <div className="flex flex-col justify-center items-center gap-6 mb-10">
          <h1 className="text-8xl">
            Create the space for yourthinking to take off.
          </h1>
          <p className="text-lg text-center w-2/4">
            Medium presents itself as a space that allows great thinking and
            ideas to flourish by removing barriers and connecting passionate
            writers, thinkers, and readers in an engaging community.
          </p>
        </div>
        <Button
          bgColor="bg-black"
          borderColor="border-lime-200"
          textColor="text-lime-200"
          content={"Write on Medium"}
        />
      </div>
    </div>
  );
};

export default WriteOnMedium;
