import React from "react";
import Button from "./Button";
import typographyText from "../assets/typographyText.png";

const Section = ({ heading, imgSRC, imgALT, paragraph }) => {
  return (
    <>
      <h1 className="text-4xl">{heading}</h1>
      <img
        src={imgSRC}
        alt={imgALT}
        className="w-80 h-80 object-cover scale-125 inline-block ml-4"
      />
      <p>{paragraph}</p>
    </>
  );
};

const Membership = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 border-b-2 border-gray-900 bg-lime-500">
      <div className="col-span-1 md:col-span-2 px-8 py-14 text-center border-b-2 border-gray-900">
        <div className="col-span-1 md:col-span-2 flex flex-col justify-center items-center gap-6 mb-10">
          <h1 className="text-8xl">
            Get more with <br></br> membership.
          </h1>
          <p className="text-lg text-center w-2/4">
            Become a mEdium member to enjoy unlimited access and directly
            support the writers you read most.
          </p>
        </div>
        <Button
          bgColor="lime-500"
          borderColor="bg-lime-500"
          textColor="text-white"
          content={"See membership options"}
        />
      </div>

      <div className="col-span-1 md:col-span-2 md:flex">
        <div className="flex flex-col justify-start items-start gap-4 border-r-2 border-gray-900 md:w-1/2 px-8 py-14">
          <Section
            heading={"Read as much as you want."}
            imgSRC={typographyText}
            imgALT={"text image"}
            paragraph={
              "Enjoy unlimited access to every story across all of your devices."
            }
          />
        </div>
        <div className="flex flex-col justify-start items-start gap-4 md:w-1/2 px-8 py-12">
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
