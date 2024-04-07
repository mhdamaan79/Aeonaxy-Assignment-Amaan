import React from "react";
import Button from "./Button";
import typographyText from "../assets/typographyText.png";

// Section component for displaying a section with heading, image, and paragraph
const Section = ({ heading, imgSRC, imgALT, paragraph }) => {
  return (
    <>
      <h1 className="text-2xl lg:text-3xl xl:text-4xl max-sm:text-center">
        {heading}
      </h1>
      <img
        src={imgSRC}
        alt={imgALT}
        className="w-60 h-60 lg:w-72 lg:h-72 xl:w-80 xl:h-80 object-cover scale-125 inline-block max-md:-my-6 md:ml-4"
      />
      <p className="text-sm lg:text-base xl:text-lg max-sm:text-center">
        {paragraph}
      </p>
    </>
  );
};

// -- Membership component --
const Membership = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 border-b-2 border-gray-900 bg-[#00A300]">
      {/* Section 1 */}
      <div className="col-span-1 md:col-span-2 px-8 py-10 lg:py-14 text-center border-b-2 border-gray-900">
        <div className="col-span-1 md:col-span-2 flex flex-col justify-center items-center gap-4 md:gap-6 mb-10">
          <h1 className="text-6xl lg:text-8xl">
            Get more with <br></br> membership.
          </h1>
          <p className="text-base lg:text-lg text-center w-3/4 md:w-2/4">
            Become a mEdium member to enjoy unlimited access and directly
            support the writers you read most.
          </p>
        </div>
        <Button
          borderColor="bg-lime-500"
          textColor="text-white"
          content={"See membership options"}
        />
      </div>

      {/* Section 2 */}
      <div className="col-span-1 md:col-span-2 md:flex">
        {/* A */}
        <div className="flex flex-col justify-start items-center md:items-start gap-2 md:gap-4 max-md:border-b-2 md:border-r-2 border-gray-900 md:w-1/2 px-8 py-10 md:py-14">
          <Section
            heading={"Read as much as you want."}
            imgSRC={typographyText}
            imgALT={"text image"}
            paragraph={
              "Enjoy unlimited access to every story across all of your devices."
            }
          />
        </div>
        {/* B */}
        <div className="flex flex-col justify-start items-center md:items-start gap-2 md:gap-4 md:w-1/2 px-8 py-14">
          <Section
            heading={"Reward quality content."}
            imgSRC={typographyText}
            imgALT={"text image"}
            paragraph={
              "Your membership helps us pay writes, and keeps your experience ad-free."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Membership;
