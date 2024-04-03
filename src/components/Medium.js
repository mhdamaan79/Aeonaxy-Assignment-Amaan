import React from "react";
import typographyCircle from "../assets/typographyCircle.png";

const Medium = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 border-b-2 border-gray-900">
      <div className="col-span-1 md:col-span-2 px-10 py-20 text-center border-b-2 border-gray-900">
        <h1 className="text-8xl">
          Every idea needs a <span className="font-extrabold">Medium.</span>
        </h1>
      </div>
      <div className="col-span-1 md:col-span-2 md:flex">
        <div className="border-r-2 border-gray-900 px-16 py-10 md:w-1/2">
          <h3>
            Medium presents itself as a space that allows great thinking and
            ideas to flourish by removing barriers and connecting passionate
            writers, thinkers, and readers in an engaging community. The image
            portrays Medium as a fertile ground where the best ideas can find an
            audience, gain traction, evolve through discourse, and ultimately
            grow and make an impact.
          </h3>
          <br></br>
          <h3>
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
        <div className="md:w-1/2 flex justify-center items-center py-10">
          <img
            src={typographyCircle}
            alt="typography circle"
            className="w-80 h-80"
          />
        </div>
      </div>
    </div>
  );
};

export default Medium;
