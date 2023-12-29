import React from "react";

const BottomBanner = () => {
  return (
    <div className="bg-gray-100 paddbto">
      {/**/}{" "}
      <div className="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8 border-t border-gray-200">
        <h2 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900  mt-8 md:mt-16 sm:text-4xl sm:leading-10">
          Mis nooit meer een kans op jouw perfecte carrière in de
          non-profitsector!
        </h2>{" "}
        <p className="py-4 text-gray-700 text-lg">
          Laat je e-mail achter en ontvang als eerste passende opdrachten direct
          in je inbox.
        </p>{" "}
        <div className="mt-8 flex justify-center">
          <div className="inline-flex">
            <a
              href="/account/registreren"
              title="word gratis lid"
              className="inline-flex items-center justify-center px-12 py-5 border border-transparent text-xl leading-6 font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
            >
              Ja ik wil mij aanmelden
            </a>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default BottomBanner;
