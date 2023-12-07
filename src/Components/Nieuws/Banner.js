import React from "react";
import "./Banner.css";
import { NavLink } from "react-router-dom";
const Banner = () => {
  return (
    <span>
      <div className="bg-gray-100">
        <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 md:px-12">
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
            <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
              <div className="lg:self-center">
                <h2 className="text-3xl leading-9 font-extrabold text-gray-800 sm:text-4xl sm:leading-10">
                  <span className="block">
                    Nadia El Idrioui haar enthousiasme voor haar opdracht werkt
                    inspirerend en tegelijkertijd aanstekelijk
                  </span>
                </h2>{" "}
                <p className="mt-4 text-lg leading-6 text-gray-700">
                  “Ik blijf sowieso altijd bij mezelf. Ik breng ook mezelf mee
                  en dat staat los van wat er in de opdracht staat.”
                </p>{" "}
                <NavLink
                  to="/nieuws-detail"
                  className="text-xl mt-8 px-6 py-3 inline-flex rounded-full items-center bg-gray-100 leading-6 font-medium text-indigo-600 hover:text-indigo-500 hover:bg-gray-200 transition duration-150 ease-in-out"
                >
                  Lees verder
                </NavLink>
              </div>
            </div>{" "}
            <div className="relative pb-3/5 -mt-6 md:pb-1/2">
              <div className="hidden divider divider-side transform-flip-y bg-white md:block" />{" "}
              <img
                src="https://freep-front-api-static.s3.amazonaws.com/media/nadia_el_idrioui_freep.jpg"
                alt="Nadia El Idrioui haar enthousiasme voor haar opdracht werkt inspirerend en tegelijkertijd aanstekelijk"
                className="absolute inset-0 w-full h-full object-cover object-left-top "
              />
            </div>
          </div>
        </div>
      </div>
    </span>
  );
};

export default Banner;
