import React from "react";

const Banner = () => {
  return (
    <div className="relative overflow-hidden bg-indigo-900">
      <main className="my-8 sm:my-8 md:mt-20 relative z-10">
        <div className="mx-auto max-w-screen-xl">
          <div className="px-4 sm:px-6 sm:text-center  md:mx-auto relative z-20">
            <h1 className=" text-4xl tracking-tight leading-10 font-bold text-white sm:mt-5 sm:leading-none sm:text-6xl lg:mt-6 lg:text-5xl xl:text-6xl">
              Werk Voor Oranje
              <br className="hidden md:inline" />{" "}
              <span className="text-green-400 lg:text-4xl xl:text-5xl font-semibold ">
                groei jij mee?
              </span>
            </h1>
          </div>
        </div>
      </main>{" "}
      <div className="divider divider-bottom bg-gray-100 -mb-1" />
    </div>
  );
};

export default Banner;
