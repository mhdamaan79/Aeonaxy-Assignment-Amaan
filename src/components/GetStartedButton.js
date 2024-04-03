import React from "react";

const GetStartedButton = ({ bgColor, textColor }) => {
  return (
    <button className={`px-6 py-1 rounded-2xl ${bgColor} ${textColor}`}>
      Get Started
    </button>
  );
};

export default GetStartedButton;
