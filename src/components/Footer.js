import React from "react";

// -- Footer component --
const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 md:gap-6 lg:gap-8 pt-4 md:pt-6 lg:pt-8 pb-4 lg:pb-6">
      <h1 className="text-xl md:text-2xl lg:text-4xl font-bold">Medium</h1>
      <ul className="flex gap-4 lg:gap-6 text-slate-900 text-sm">
        <li className="underline cursor-pointer">Terms</li>
        <li className="underline cursor-pointer">Privacy</li>
        <li className="underline cursor-pointer">Help</li>
      </ul>
    </div>
  );
};

export default Footer;
