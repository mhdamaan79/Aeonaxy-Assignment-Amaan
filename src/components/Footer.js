import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-8 pt-8 pb-6">
      <h1 className="text-6xl font-bold">Medium</h1>
      <ul className="flex gap-6 text-slate-900 text-sm">
        <li className="underline">Terms</li>
        <li className="underline">Privacy</li>
        <li className="underline">Help</li>
      </ul>
    </div>
  );
};

export default Footer;
