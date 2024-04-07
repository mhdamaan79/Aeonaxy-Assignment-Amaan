import React, { useState } from "react";
import mediumLogo from "../assets/medium-logo.svg";
import GetStartedButton from "./GetStartedButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

// -- Header component --
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="flex justify-between items-center gap-4 px-4 border-b-2 border-gray-900">
      <div className="flex justify-between items-center w-[58%] sm:w-[68%] md:w-[80%] lg:w-[85%] xl:w-[87%] 2xl:w-[89%] relative">
        <img
          src={mediumLogo}
          alt="medium-logo"
          className="w-24 h-24 scale-150 inline-block ml-10"
        />
        {/* Navigation Links - Hidden by default on small screens */}
        <ul
          className={`hidden md:flex gap-4 text-slate-900 text-sm pointer ${
            showMenu ? "" : "hidden"
          }`}
        >
          <li className="underline cursor-pointer">Our Story</li>
          <li className="cursor-pointer">Membership</li>
          <li className="cursor-pointer">Write</li>
          <li className="cursor-pointer">Sign in</li>
        </ul>
        {/* Navigation Links - Hidden by default on medium and larger screens */}
        <ul
          className={`md:hidden flex flex-col gap-6 w-screen px-10 py-10 -ml-4 -mt-2 bg-white  text-slate-900 text-sm absolute top-24 ${
            showMenu ? "flex" : "hidden"
          }`}
        >
          <li className="underline cursor-pointer">Our Story</li>
          <li className="cursor-pointer">Membership</li>
          <li className="cursor-pointer">Write</li>
          <li className="cursor-pointer">Sign in</li>
        </ul>
      </div>

      <div className="flex justify-between items-center gap-4">
        <GetStartedButton bgColor="bg-black" textColor="text-slate-100" />
        <div className="md:hidden pr-4">
          {showMenu ? (
            <FontAwesomeIcon
              icon={faX}
              onClick={() => setShowMenu(false)}
              className="scale-150"
            />
          ) : (
            <FontAwesomeIcon
              icon={faBars}
              onClick={() => setShowMenu(true)}
              className="scale-150"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
