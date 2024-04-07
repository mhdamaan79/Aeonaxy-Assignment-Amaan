import React from "react";

// -- GetStartedButton component --
const GetStartedButton = ({ bgColor, textColor }) => {
  return (
    <button
      className={`text-sm md:text-base px-4 xl:px-6 py-1 rounded-2xl ${bgColor} ${textColor}`}
    >
      Get Started
    </button>
  );
};

export default GetStartedButton;
