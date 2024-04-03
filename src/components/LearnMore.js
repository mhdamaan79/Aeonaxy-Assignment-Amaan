import React from "react";
import GetStartedButton from "./GetStartedButton";
import cube from "../assets/cube.png";
import Button from "./Button";

const Section = ({ heading, paragraph, buttonContent }) => {
  return (
    <div className="flex flex-col justify-between items-start gap-40 px-10 py-8 w-3/4">
      <div className="flex flex-col justify-start gap-2">
        <h3 className="text-3xl">{heading}</h3>
        <p className="text-md">{paragraph}</p>
      </div>

      <Button
        bgColor="bg-white"
        borderColor="border-lime-500"
        textColor="text-lime-500"
        content={buttonContent}
        className=""
      />
    </div>
  );
};

const LearnMore = () => {
  return (
    <div className="border-y-2 border-gray-900">
      <div className="flex flex-col md:flex-row border-b-2 border-gray-900">
        <div className="felx flex-col justify-between px-10 py-8 border-r-2 border-gray-900 md:w-1/2">
          <h1 className="text-8xl">Learn more about us. Or join us.</h1>
        </div>

        <div className="flex flex-col justify-between items-start md:w-1/2">
          <Section
            heading={"The medium blog"}
            paragraph={
              "Visit company blog for the latest news, prodcut updates, and tips and tricks."
            }
            buttonContent={"Read our blog"}
          />

          <hr className="w-full font-extrabold border-gray-900" />

          <Section
            heading={"Work at Medium"}
            paragraph={
              "Our terms is home to engineers, journalists, artists, and creatives of all stripes."
            }
            buttonContent={"View open positions"}
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="flex justify-center items-center border-r-2 border-gray-900 md:w-1/2">
          <img
            src={cube}
            alt="cube"
            className="w-96 h-96 scale-150 -skew-x-12 p-2"
          />
        </div>
        <div className="flex flex-col justify-between items-start gap-40 px-10 py-8 md:w-1/2">
          <h1 className="text-8xl">Read, write, and expand your world.</h1>
          <GetStartedButton bgColor="bg-lime-600" textColor="text-slate-100" />
        </div>
      </div>
    </div>
  );
};

export default LearnMore;
