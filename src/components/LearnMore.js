import React from "react";
import GetStartedButton from "./GetStartedButton";
import cube from "../assets/cube.png";
import Button from "./Button";

// Section component for displaying a section with heading, paragraph, and a button
const Section = ({ heading, paragraph, buttonContent, border }) => {
  return (
    <div
      className={`flex flex-col justify-between items-center md:items-start gap-16 lg:gap-24 xl:gap-32 2xl:gap-40 px-10 py-8 w-5/6 lg:w-3/4 ${border}`}
    >
      <div className="flex flex-col justify-start gap-2 max-md:text-center">
        <h3 className="text-2xl xl:text-4xl">{heading}</h3>
        <p className="text-xs lg:text-sm xl:text-base">{paragraph}</p>
      </div>

      <Button
        borderColor="border-[#00A300]"
        textColor="text-[#00A300]"
        content={buttonContent}
        className=""
      />
    </div>
  );
};

// -- LearnMore component --
const LearnMore = () => {
  return (
    <div className="border-y-2 border-gray-900">
      {/* Section 1 */}
      <div className="flex flex-col md:flex-row border-b-2 border-gray-900">
        <div className="felx flex-col justify-between px-10 py-12 md:py-8 max-md:border-b-2 border-r-2 border-gray-900 md:w-1/2">
          <h1 className="text-6xl xl:text-7xl 2xl:text-8xl max-md:text-center lg:w-5/6">
            Learn more about us. Or join us.
          </h1>
        </div>

        {/* Section components */}
        <div className="flex flex-col justify-between items-center md:items-start w-full md:w-1/2">
          {/* A */}
          <Section
            heading={"The Medium blog"}
            paragraph={
              "Visit company blog for the latest news, prodcut updates, and tips and tricks."
            }
            buttonContent={"Read our blog"}
          />

          <hr className="w-full font-extrabold border-gray-900" />

          {/* B */}
          <Section
            heading={"Work at Medium"}
            paragraph={
              "Our terms is home to engineers, journalists, artists, and creatives of all stripes."
            }
            buttonContent={"View open positions"}
          />
        </div>
      </div>

      {/* Section 2 */}
      <div className="flex flex-col md:flex-row">
        <div className="flex justify-center items-center max-md:border-b-2 md:border-r-2 border-gray-900 md:w-1/2">
          <img
            src={cube}
            alt="cube"
            className="w-96 h-96 scale-100 sm:scale-105 md:scale-110 xl:scale-125 2xl:scale-150 -skew-x-12 p-2"
          />
        </div>
        <div className="flex flex-col justify-between items-center md:items-start gap-20 md:gap-28 xl:gap-32 2xl:gap-40 px-10 py-8 md:w-1/2">
          <h1 className="text-6xl xl:text-7xl 2xl:text-8xl max-md:text-center lg:w-5/6">
            Read, write, and expand your world.
          </h1>
          <GetStartedButton bgColor="bg-[#00A300]" textColor="text-white" />
        </div>
      </div>
    </div>
  );
};

export default LearnMore;
