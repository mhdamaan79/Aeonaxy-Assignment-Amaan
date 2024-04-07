import React from "react";
import typographyCircle from "../assets/typographyCircle.png";

// -- Medium component --
const Medium = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 border-b-2 border-gray-900">
      {/* Section 1 */}
      <div className="col-span-1 md:col-span-2 px-2 lg:px-10 py-16 lg:py-20 text-center border-b-2 border-gray-900">
        <h1 className="text-6xl lg:text-8xl">
          Every idea needs a <span className="font-extrabold">Medium.</span>
        </h1>
      </div>

      {/* Section 2 */}
      <div className="col-span-1 md:col-span-2 flex flex-col xl:flex-row">
        {/* A */}
        <div className=" max-xl:border-b-2 xl:border-r-2 border-gray-900 px-10 lg:px-16 py-10 xl:w-1/2 max-xl:text-justify">
          <h3 className="text-base lg:text-lg text-pretty">
            Medium presents itself as a space that allows great thinking and
            ideas to flourish by removing barriers and connecting passionate
            writers, thinkers, and readers in an engaging community. The image
            portrays Medium as a fertile ground where the best ideas can find an
            audience, gain traction, evolve through discourse, and ultimately
            grow and make an impact.
          </h3>
          <br></br>
          <h3 className="text-base lg:text-lg">
            Medium presents itself as a space that allows great thinking and
            ideas to flourish by removing barriers and connecting passionate
            writers, thinkers, and readers in an engaging community. The image
            portrays Medium as a fertile ground where the best ideas can find an
            audience, gain traction, evolve through discourse, and ultimately
            grow and make an impact. Medium presents itself as a space that
            allows great thinking and ideas to flourish by removing barriers and
            connecting passionate writers, thinkers, and readers in an engaging
            community.
          </h3>
        </div>

        {/* B */}
        <div className="xl:w-1/2 flex justify-center items-center py-10">
          <img
            src={typographyCircle}
            alt="typography circle"
            className="w-80 h-80 scale-125 xl:scale-150 2xl:scale-125"
          />
        </div>
      </div>
    </div>
  );
};

export default Medium;
