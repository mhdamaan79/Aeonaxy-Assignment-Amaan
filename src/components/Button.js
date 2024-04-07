import React from "react";

// -- Button component --
const Button = ({ borderColor, textColor, content }) => {
  return (
    <button
      className={`text-sm lg:text-base px-6 py-1 rounded-2xl bg-transparent border-2 ${borderColor} ${textColor}`}
    >
      {content}
    </button>
  );
};

export default Button;
