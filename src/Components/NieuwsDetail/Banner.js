import React from "react";

const Banner = () => {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="max-w-screen-xl mx-auto bg-white">
        <div className="relative z-10 pb-8  sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="text-center lg:text-left md:mr-12 py-12">
              <div className="relative lg:ml-10">
                <svg
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 144 144"
                  className="absolute top-0 left-0 transform -translate-x-8 -translate-y-24 h-36 w-36 text-indigo-200 opacity-50"
                >
                  <path
                    strokeWidth={2}
                    d="M41.485 15C17.753 31.753 1 59.208 1 89.455c0 24.664 14.891 39.09 32.109 39.09 16.287 0 28.386-13.03 28.386-28.387 0-15.356-10.703-26.524-24.663-26.524-2.792 0-6.515.465-7.446.93 2.327-15.821 17.218-34.435 32.11-43.742L41.485 15zm80.04 0c-23.268 16.753-40.02 44.208-40.02 74.455 0 24.664 14.891 39.09 32.109 39.09 15.822 0 28.386-13.03 28.386-28.387 0-15.356-11.168-26.524-25.129-26.524-2.792 0-6.049.465-6.98.93 2.327-15.821 16.753-34.435 31.644-43.742L121.525 15z"
                  />
                </svg>{" "}
                <blockquote className="relative">
                  <div className="text-3xl leading-9 font-medium text-gray-900">
                    {/**/}
                  </div>{" "}
                  <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    Ik vind het leuk om contact te maken met collega’s en hen
                    mee te nemen in het belang van het te bereiken doel.
                  </p>
                </blockquote>
              </div>
            </div>
          </main>
        </div>
      </div>{" "}
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <div className="hidden divider divider-side transform-flip-y bg-white md:block" />{" "}
        <img
          src="https://res.cloudinary.com/freep/image/fetch/f_auto,q_auto/https://freep-front-api-static.s3.amazonaws.com/media/Jasper_Linkein_foto.jpg"
          alt="Jasper Wegman zorgt ervoor dat hij mensen meeneemt in zijn visie"
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full lazyloaded"
        />
      </div>
    </div>
  );
};

export default Banner;
