import React from "react";
import mediumLogo from "../assets/medium-logo.svg";
import GetStartedButton from "./GetStartedButton";

const Header = () => {
  return (
    <div className="flex justify-between items-center gap-4 px-4 border-b-2 border-gray-900">
      <div className="flex justify-between items-center w-[89%]">
        <img
          src={mediumLogo}
          alt="logo"
          className="w-24 h-24 scale-150 inline-block ml-10"
        />
        <ul className="flex gap-4 text-slate-900 text-sm">
          <li className="underline">Our Story</li>
          <li>Membership</li>
          <li>Write</li>
          <li>Sign in</li>
        </ul>
      </div>
      <GetStartedButton bgColor="bg-black" textColor="text-slate-100" />
    </div>
  );
};

export default Header;
