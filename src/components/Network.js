import React from "react";
import profile1 from "../assets/profile-pictures/asset 1.png";
import profile2 from "../assets/profile-pictures/asset 2.png";
import profile3 from "../assets/profile-pictures/asset 3.png";
import profile4 from "../assets/profile-pictures/asset 4.png";
import profile5 from "../assets/profile-pictures/asset 5.png";
import profile6 from "../assets/profile-pictures/asset 6.png";
import profile7 from "../assets/profile-pictures/asset 7.png";
import profile8 from "../assets/profile-pictures/asset 8.png";
import profile9 from "../assets/profile-pictures/asset 9.png";
import profile10 from "../assets/profile-pictures/asset 10.png";
import profile11 from "../assets/profile-pictures/asset 11.png";
import profile12 from "../assets/profile-pictures/asset 12.png";

// -- Network component --
const Network = () => {
  return (
    <div className="flex flex-col gap-16 lg:gap-20 bg-orange-300 px-4 py-10 lg:py-14">
      {/* Section 1 */}
      <div className="flex flex-col justify-center items-center gap-4">
        <h1 className="text-6xl lg:text-8xl text-center">
          A living network of <br></br> curious minds.
        </h1>
        <p className="text-base lg:text-lg text-center w-3/4 lg:w-2/4">
          Medium presents itself as a space that allows great thinking and ideas
          to flourish by removing barriers and connecting passionate writers,
          thinkers, and readers in an engaging community. Medium presents itself
          as a space that allows great thinking and ideas.
        </p>
      </div>

      {/* Section 2 */}
      <div className="flex justify-center items-center gap-4 w-full">
        {/* A */}
        <span className="flex flex-col w-1/3">
          <span className="flex flex-row justify-start items-center gap-4 py-2 border-y-2 border-gray-800">
            <img
              src={profile1}
              alt="Eric Dhawan"
              className="w-10 h-10 inline-block"
            />
            <p>Eric Dhawan</p>
          </span>
          <span className="flex flex-row justify-start items-center gap-4 py-2 border-b-2 border-gray-800">
            <img
              src={profile2}
              alt="Scott Galloway"
              className="w-10 h-10 inline-block"
            />
            <p>Scott Galloway</p>
          </span>
          <span className="flex flex-row justify-start items-center gap-4 py-2 border-b-2 border-gray-800">
            <img
              src={profile3}
              alt="OneZero"
              className="w-10 h-10 inline-block"
            />
            <p>OneZero</p>
          </span>
          <span className="flex flex-row justify-start items-center gap-4 py-2 border-b-2 border-gray-800">
            <img
              src={profile4}
              alt="Sarah Cottrell"
              className="w-10 h-10 inline-block"
            />
            <p>Sarah Cottrell</p>
          </span>
        </span>

        {/* B */}
        <span className="flex flex-col w-1/3">
          <span className="flex flex-row justify-start items-center gap-4 py-2 border-y-2 border-gray-800">
            <img
              src={profile5}
              alt="Devon Price"
              className="w-10 h-10 inline-block"
            />
            <p>Devon Price</p>
          </span>
          <span className="flex flex-row justify-start items-center gap-4 py-2 border-b-2 border-gray-800">
            <img
              src={profile6}
              alt="kaki Okumura"
              className="w-10 h-10 inline-block"
            />
            <p>kaki Okumura</p>
          </span>
          <span className="flex flex-row justify-start items-center gap-4 py-2 border-b-2 border-gray-800">
            <img
              src={profile7}
              alt="Carvell Wallace"
              className="w-10 h-10 inline-block"
            />
            <p>Carvell Wallace</p>
          </span>
          <span className="flex flex-row justify-start items-center gap-4 py-2 border-b-2 border-gray-800">
            <img
              src={profile8}
              alt="Forge"
              className="w-10 h-10 inline-block"
            />
            <p>Forge</p>
          </span>
        </span>

        {/* C */}
        <span className="flex flex-col w-1/3">
          <span className="flex flex-row justify-start items-center gap-4 py-2 border-y-2 border-gray-800">
            <img src={profile9} alt="GEN" className="w-10 h-10 inline-block" />
            <p>GEN</p>
          </span>
          <span className="flex flex-row justify-start items-center gap-4 py-2 border-b-2 border-gray-800">
            <img
              src={profile10}
              alt="Hal H. Harris"
              className="w-10 h-10 inline-block"
            />
            <p>Hal H. Harris</p>
          </span>
          <span className="flex flex-row justify-start items-center gap-4 py-2 border-b-2 border-gray-800">
            <img
              src={profile11}
              alt="Elemental"
              className="w-10 h-10 inline-block"
            />
            <p>Elemental</p>
          </span>
          <span className="flex flex-row justify-start items-center gap-4 py-2 border-b-2 border-gray-800">
            <img
              src={profile12}
              alt="LEVEL"
              className="w-10 h-10 inline-block"
            />
            <p>LEVEL</p>
          </span>
        </span>
      </div>
    </div>
  );
};

export default Network;
