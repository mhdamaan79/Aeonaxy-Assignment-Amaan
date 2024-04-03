import React from "react";

const Button = ({ bgColor, borderColor, textColor, content }) => {
  return (
    <button
      className={`px-6 py-1 rounded-2xl ${bgColor} border-2 ${borderColor} ${textColor}`}
    >
      {content}
    </button>
  );
};

export default Button;
