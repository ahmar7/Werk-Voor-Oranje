import React from "react";
import { NavLink } from "react-router-dom";

const Blogs = () => {
  return (
    <div className="relative bg-gray-100 py-8 lg:py-8 ">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3" />
      </div>{" "}
      <div className="relative max-w-screen-xl mx-auto py-16 px-4 sm:px-6 md:px-12">
        <h1 className="text-3xl leading-9 tracking-tight font-extrabold text-indigo-900 sm:text-4xl sm:leading-10">
          Nieuws, Tips en Uitleg over de interim overheidsmarkt
        </h1>{" "}
        <div>
          <div className="flex justify-start mt-4">
            <div className="mt-0">
              <div className="relative border bg-white rounded-full focus:outline-none">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6 text-gray-400 ml-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>{" "}
                <input
                  type="search"
                  placeholder="Zoeken"
                  defaultValue
                  className="form-input block w-full pl-16 text-lg leading-5 p-4 rounded-full border focus:border-indigo-500 focus:outline-none"
                />
              </div>
            </div>{" "}
            <div className="hidden md:flex ml-4  space-x-4">
              <span
                bucket="[object Object]"
                name="segment"
                className="bg-indigo-100 text-indigo-700 leading-5 py-4 px-6 items-center font-medium text-lg rounded-full capitalize cursor-pointer"
              >
                <label className="flex items-center space-x-4">
                  <input
                    type="checkbox"
                    defaultValue="interviews"
                    className="checkbox "
                  />{" "}
                  <p>interviews (7) </p>
                </label>
              </span>
              <span
                bucket="[object Object]"
                name="segment"
                className="bg-indigo-100 text-indigo-700 leading-5 py-4 px-6 items-center font-medium text-lg rounded-full capitalize cursor-pointer"
              >
                <label className="flex items-center space-x-4">
                  <input
                    type="checkbox"
                    defaultValue="nieuws"
                    className="checkbox "
                  />{" "}
                  <p>nieuws (6) </p>
                </label>
              </span>
              <span
                bucket="[object Object]"
                name="segment"
                className="bg-indigo-100 text-indigo-700 leading-5 py-4 px-6 items-center font-medium text-lg rounded-full capitalize cursor-pointer"
              >
                <label className="flex items-center space-x-4">
                  <input
                    type="checkbox"
                    defaultValue="aanbesteden"
                    className="checkbox "
                  />{" "}
                  <p>aanbesteden (2) </p>
                </label>
              </span>
            </div>
          </div>
        </div>{" "}
        <div className="mt-12 grid gap-5 max-w-lg mx-auto md:grid-cols-2 lg:grid-cols-3 lg:max-w-none md:max-w-none">
          <div
            id={0}
            className="flex flex-col rounded-lg border border-gray-200 overflow-hidden transition duration-200 ease-in-out transform hover:shadow-md hover:-translate-y-1"
          >
            <div className="flex-shrink-0">
              <img
                data-src="https://freep-front-api-static.s3.amazonaws.com/media/nadia_el_idrioui_freep.jpg"
                alt="Nadia El Idrioui haar enthousiasme voor haar opdracht werkt inspirerend en tegelijkertijd aanstekelijk"
                className="h-48 w-full object-cover lazyloaded"
                src="https://freep-front-api-static.s3.amazonaws.com/media/nadia_el_idrioui_freep.jpg"
              />
            </div>{" "}
            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
              <div className="flex-1">
                <p className="text-sm leading-5 font-medium text-indigo-600">
                  interviews
                </p>{" "}
                <NavLink to="/nieuws-detail" className="block">
                  <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                    Nadia El Idrioui haar enthousiasme voor haar opdracht werkt
                    inspirerend en tegelijkertijd aanstekelijk
                  </h3>{" "}
                  <p className="mt-3 text-base leading-6 text-gray-500">
                    “Ik blijf sowieso altijd bij mezelf. Ik breng ook mezelf mee
                    en dat staat los van wat er in de opdracht staat.”
                  </p>
                </NavLink>
              </div>{" "}
              <div className="mt-4">
                <NavLink
                  to="/nieuws-detail"
                  className="text-base px-4 py-3 inline-flex rounded-full items-center bg-gray-100 leading-6 font-medium text-indigo-600 hover:text-indigo-500 hover:bg-gray-200 transition duration-150 ease-in-out"
                >
                  Lees verder
                </NavLink>
              </div>
            </div>
          </div>
          <div
            id={1}
            className="flex flex-col rounded-lg border border-gray-200 overflow-hidden transition duration-200 ease-in-out transform hover:shadow-md hover:-translate-y-1"
          >
            <div className="flex-shrink-0">
              <img
                data-src="https://freep-front-api-static.s3.amazonaws.com/media/Jasper_Linkein_foto.jpg"
                alt="Jasper Wegman zorgt ervoor dat hij mensen meeneemt in zijn visie"
                className="h-48 w-full object-cover lazyloaded"
                src="https://freep-front-api-static.s3.amazonaws.com/media/Jasper_Linkein_foto.jpg"
              />
            </div>{" "}
            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
              <div className="flex-1">
                <p className="text-sm leading-5 font-medium text-indigo-600">
                  interviews
                </p>{" "}
                <NavLink to="/nieuws-detail" className="block">
                  <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                    Jasper Wegman zorgt ervoor dat hij mensen meeneemt in zijn
                    visie
                  </h3>{" "}
                  <p className="mt-3 text-base leading-6 text-gray-500">
                    Ik vind het leuk om contact te maken met collega’s en hen
                    mee te nemen in het belang van het te bereiken doel.
                  </p>
                </NavLink>
              </div>{" "}
              <div className="mt-4">
                <NavLink
                  to="/nieuws-detail"
                  className="text-base px-4 py-3 inline-flex rounded-full items-center bg-gray-100 leading-6 font-medium text-indigo-600 hover:text-indigo-500 hover:bg-gray-200 transition duration-150 ease-in-out"
                >
                  Lees verder
                </NavLink>
              </div>
            </div>
          </div>
          <div
            id={2}
            className="flex flex-col rounded-lg border border-gray-200 overflow-hidden transition duration-200 ease-in-out transform hover:shadow-md hover:-translate-y-1"
          >
            <div className="flex-shrink-0">
              <img
                data-src="https://freep-front-api-static.s3.amazonaws.com/media/21.svg"
                alt="Wat is een tender?"
                className="h-48 w-full object-cover lazyloaded"
                src="https://freep-front-api-static.s3.amazonaws.com/media/21.svg"
              />
            </div>{" "}
            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
              <div className="flex-1">
                <p className="text-sm leading-5 font-medium text-indigo-600">
                  aanbesteden
                </p>{" "}
                <NavLink to="/nieuws-detail" className="block">
                  <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                    Wat is een tender?
                  </h3>{" "}
                  <p className="mt-3 text-base leading-6 text-gray-500">
                    Bij sommige opdrachtgevers wordt er ook gesproken van
                    tenders. Dit kan verwarrend zijn, dus helderen we graag een
                    paar zaken voor je op.
                  </p>
                </NavLink>
              </div>{" "}
              <div className="mt-4">
                <NavLink
                  to="/nieuws-detail"
                  className="text-base px-4 py-3 inline-flex rounded-full items-center bg-gray-100 leading-6 font-medium text-indigo-600 hover:text-indigo-500 hover:bg-gray-200 transition duration-150 ease-in-out"
                >
                  Lees verder
                </NavLink>
              </div>
            </div>
          </div>
          <div
            id={3}
            className="flex flex-col rounded-lg border border-gray-200 overflow-hidden transition duration-200 ease-in-out transform hover:shadow-md hover:-translate-y-1"
          >
            <div className="flex-shrink-0">
              <img
                data-src="https://freep-front-api-static.s3.amazonaws.com/media/demmy-onink.jpg"
                alt="Demmy Onink wil na elke opdracht een betere designer zijn"
                className="h-48 w-full object-cover lazyloaded"
                src="https://freep-front-api-static.s3.amazonaws.com/media/demmy-onink.jpg"
              />
            </div>{" "}
            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
              <div className="flex-1">
                <p className="text-sm leading-5 font-medium text-indigo-600">
                  interviews
                </p>{" "}
                <NavLink to="/nieuws-detail" className="block">
                  <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                    Demmy Onink wil na elke opdracht een betere designer zijn
                  </h3>{" "}
                  <p className="mt-3 text-base leading-6 text-gray-500">
                    Ik vind het belangrijk dat ik na een klus een betere
                    designer ben dan voorheen.
                  </p>
                </NavLink>
              </div>{" "}
              <div className="mt-4">
                <NavLink
                  to="/nieuws-detail"
                  className="text-base px-4 py-3 inline-flex rounded-full items-center bg-gray-100 leading-6 font-medium text-indigo-600 hover:text-indigo-500 hover:bg-gray-200 transition duration-150 ease-in-out"
                >
                  Lees verder
                </NavLink>
              </div>
            </div>
          </div>
          <div
            id={4}
            className="flex flex-col rounded-lg border border-gray-200 overflow-hidden transition duration-200 ease-in-out transform hover:shadow-md hover:-translate-y-1"
          >
            <div className="flex-shrink-0">
              <img
                data-src="https://freep-front-api-static.s3.amazonaws.com/media/willemijn-hessels.jpg"
                alt="Willemijn Hessels is een aanpakker die graag in mogelijkheden denkt en kansen ziet"
                className="h-48 w-full object-cover lazyloaded"
                src="https://freep-front-api-static.s3.amazonaws.com/media/willemijn-hessels.jpg"
              />
            </div>{" "}
            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
              <div className="flex-1">
                <p className="text-sm leading-5 font-medium text-indigo-600">
                  interviews
                </p>{" "}
                <NavLink to="/nieuws-detail" className="block">
                  <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                    Willemijn Hessels is een aanpakker die graag in
                    mogelijkheden denkt en kansen ziet
                  </h3>{" "}
                  <p className="mt-3 text-base leading-6 text-gray-500">
                    Het denken in oplossingen en het ‘gewoon’ doen, is wat ik
                    belangrijk vind als zzp’er.
                  </p>
                </NavLink>
              </div>{" "}
              <div className="mt-4">
                <NavLink
                  to="/nieuws-detail"
                  className="text-base px-4 py-3 inline-flex rounded-full items-center bg-gray-100 leading-6 font-medium text-indigo-600 hover:text-indigo-500 hover:bg-gray-200 transition duration-150 ease-in-out"
                >
                  Lees verder
                </NavLink>
              </div>
            </div>
          </div>
          <div
            id={5}
            className="flex flex-col rounded-lg border border-gray-200 overflow-hidden transition duration-200 ease-in-out transform hover:shadow-md hover:-translate-y-1"
          >
            <div className="flex-shrink-0">
              <img
                data-src="https://freep-front-api-static.s3.amazonaws.com/media/babette-jonker.jpg"
                alt="Babette Jonker in haar rol als zzp'er: de variatie tussen opdrachten houdt mij scherp"
                className="h-48 w-full object-cover lazyloaded"
                src="https://freep-front-api-static.s3.amazonaws.com/media/babette-jonker.jpg"
              />
            </div>{" "}
            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
              <div className="flex-1">
                <p className="text-sm leading-5 font-medium text-indigo-600">
                  interviews
                </p>{" "}
                <NavLink to="/nieuws-detail" className="block">
                  <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                    Babette Jonker in haar rol als zzp'er: de variatie tussen
                    opdrachten houdt mij scherp
                  </h3>{" "}
                  <p className="mt-3 text-base leading-6 text-gray-500">
                    Het werken aan verschillende opdrachten geeft variatie. Dit
                    houdt mij scherp en past bij mij.
                  </p>
                </NavLink>
              </div>{" "}
              <div className="mt-4">
                <NavLink
                  to="/nieuws-detail"
                  className="text-base px-4 py-3 inline-flex rounded-full items-center bg-gray-100 leading-6 font-medium text-indigo-600 hover:text-indigo-500 hover:bg-gray-200 transition duration-150 ease-in-out"
                >
                  Lees verder
                </NavLink>
              </div>
            </div>
          </div>
          <div
            id={6}
            className="flex flex-col rounded-lg border border-gray-200 overflow-hidden transition duration-200 ease-in-out transform hover:shadow-md hover:-translate-y-1"
          >
            <div className="flex-shrink-0">
              <img
                data-src="https://freep-front-api-static.s3.amazonaws.com/media/vera-maillie-zzp.jpg"
                alt="Een professional met hart voor de zaak, dat is Vera Maillie"
                className="h-48 w-full object-cover lazyloaded"
                src="https://freep-front-api-static.s3.amazonaws.com/media/vera-maillie-zzp.jpg"
              />
            </div>{" "}
            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
              <div className="flex-1">
                <p className="text-sm leading-5 font-medium text-indigo-600">
                  interviews
                </p>{" "}
                <NavLink to="/nieuws-detail" className="block">
                  <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                    Een professional met hart voor de zaak, dat is Vera Maillie
                  </h3>{" "}
                  <p className="mt-3 text-base leading-6 text-gray-500">
                    Als je opdrachtgever tevreden is met het resultaat, dan ben
                    je succesvol.
                  </p>
                </NavLink>
              </div>{" "}
              <div className="mt-4">
                <NavLink
                  to="/nieuws-detail"
                  className="text-base px-4 py-3 inline-flex rounded-full items-center bg-gray-100 leading-6 font-medium text-indigo-600 hover:text-indigo-500 hover:bg-gray-200 transition duration-150 ease-in-out"
                >
                  Lees verder
                </NavLink>
              </div>
            </div>
          </div>
          <div
            id={7}
            className="flex flex-col rounded-lg border border-gray-200 overflow-hidden transition duration-200 ease-in-out transform hover:shadow-md hover:-translate-y-1"
          >
            <div className="flex-shrink-0">
              <img
                data-src="https://freep-front-api-static.s3.amazonaws.com/media/tom-piepers.jpg"
                alt="Ontmoet Tom Piepers: een zzp’er in hart en nieren"
                className="h-48 w-full object-cover lazyloaded"
                src="https://freep-front-api-static.s3.amazonaws.com/media/tom-piepers.jpg"
              />
            </div>{" "}
            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
              <div className="flex-1">
                <p className="text-sm leading-5 font-medium text-indigo-600">
                  interviews
                </p>{" "}
                <NavLink to="/nieuws-detail" className="block">
                  <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                    Ontmoet Tom Piepers: een zzp’er in hart en nieren
                  </h3>{" "}
                  <p className="mt-3 text-base leading-6 text-gray-500">
                    Tom Piepers is een doorgewinterde zzp’er . Hij is acht jaar
                    actief als zzp’er. De opdrachten die hij uitvoert zijn
                    gericht op contractmanagement van bouw-&nbsp; en beheer
                    projecten.
                  </p>
                </NavLink>
              </div>{" "}
              <div className="mt-4">
                <NavLink
                  to="/nieuws-detail"
                  className="text-base px-4 py-3 inline-flex rounded-full items-center bg-gray-100 leading-6 font-medium text-indigo-600 hover:text-indigo-500 hover:bg-gray-200 transition duration-150 ease-in-out"
                >
                  Lees verder
                </NavLink>
              </div>
            </div>
          </div>
          <div
            id={8}
            className="flex flex-col rounded-lg border border-gray-200 overflow-hidden transition duration-200 ease-in-out transform hover:shadow-md hover:-translate-y-1"
          >
            <div className="flex-shrink-0">
              <img
                data-src="https://freep-front-api-static.s3.amazonaws.com/media/25.svg"
                alt="We verlagen de kosten van onze dienstverlening"
                className="h-48 w-full object-cover lazyloaded"
                src="https://freep-front-api-static.s3.amazonaws.com/media/25.svg"
              />
            </div>{" "}
            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
              <div className="flex-1">
                <p className="text-sm leading-5 font-medium text-indigo-600">
                  nieuws
                </p>{" "}
                <NavLink to="/nieuws-detail" className="block">
                  <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                    We verlagen de kosten van onze dienstverlening
                  </h3>{" "}
                  <p className="mt-3 text-base leading-6 text-gray-500">
                    Freep 2.0 bestaat 2 jaar, tijd voor een korte terugblik.
                  </p>
                </NavLink>
              </div>{" "}
              <div className="mt-4">
                <NavLink
                  to="/nieuws-detail"
                  className="text-base px-4 py-3 inline-flex rounded-full items-center bg-gray-100 leading-6 font-medium text-indigo-600 hover:text-indigo-500 hover:bg-gray-200 transition duration-150 ease-in-out"
                >
                  Lees verder
                </NavLink>
              </div>
            </div>
          </div>
          <div
            id={9}
            className="flex flex-col rounded-lg border border-gray-200 overflow-hidden transition duration-200 ease-in-out transform hover:shadow-md hover:-translate-y-1"
          >
            <div className="flex-shrink-0">
              <img
                data-src="https://freep-front-api-static.s3.amazonaws.com/media/pawel-furman-jo21H-4lYFU-unsplash-300x200.jpg"
                alt="Herken de kroonprins procedure"
                className="h-48 w-full object-cover ls-is-cached lazyloaded"
                src="https://freep-front-api-static.s3.amazonaws.com/media/pawel-furman-jo21H-4lYFU-unsplash-300x200.jpg"
              />
            </div>{" "}
            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
              <div className="flex-1">
                <p className="text-sm leading-5 font-medium text-indigo-600">
                  aanbesteden
                </p>{" "}
                <NavLink to="/nieuws-detail" className="block">
                  <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                    Herken de kroonprins procedure
                  </h3>{" "}
                  <p className="mt-3 text-base leading-6 text-gray-500">
                    Wat is een kroonprins / Warme stoel procedure? Hoe herken je
                    deze procedures? Bespaar jezelf veel tijd en frustratie
                  </p>
                </NavLink>
              </div>{" "}
              <div className="mt-4">
                <NavLink
                  to="/nieuws-detail"
                  className="text-base px-4 py-3 inline-flex rounded-full items-center bg-gray-100 leading-6 font-medium text-indigo-600 hover:text-indigo-500 hover:bg-gray-200 transition duration-150 ease-in-out"
                >
                  Lees verder
                </NavLink>
              </div>
            </div>
          </div>
          <div
            id={10}
            className="flex flex-col rounded-lg border border-gray-200 overflow-hidden transition duration-200 ease-in-out transform hover:shadow-md hover:-translate-y-1"
          >
            <div className="flex-shrink-0">
              <img
                data-src="https://freep-front-api-static.s3.amazonaws.com/media/linkedin-share-image-norm-w600h400-300x200.png"
                alt="Freep Opgenomen In Het Register Normering Arbeid"
                className="h-48 w-full object-cover lazyloaded"
                src="https://freep-front-api-static.s3.amazonaws.com/media/linkedin-share-image-norm-w600h400-300x200.png"
              />
            </div>{" "}
            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
              <div className="flex-1">
                <p className="text-sm leading-5 font-medium text-indigo-600">
                  nieuws
                </p>{" "}
                <NavLink to="/nieuws-detail" className="block">
                  <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                    Freep Opgenomen In Het Register Normering Arbeid
                  </h3>{" "}
                  <p className="mt-3 text-base leading-6 text-gray-500">
                    Freep.nl B.V. voldoet aan de normen zoals vastgelegd in het
                    Handboek Normen SNA en is opgenomen in het Register
                    Normering Arbeid.
                  </p>
                </NavLink>
              </div>{" "}
              <div className="mt-4">
                <NavLink
                  to="/nieuws-detail"
                  className="text-base px-4 py-3 inline-flex rounded-full items-center bg-gray-100 leading-6 font-medium text-indigo-600 hover:text-indigo-500 hover:bg-gray-200 transition duration-150 ease-in-out"
                >
                  Lees verder
                </NavLink>
              </div>
            </div>
          </div>
          <div
            id={11}
            className="flex flex-col rounded-lg border border-gray-200 overflow-hidden transition duration-200 ease-in-out transform hover:shadow-md hover:-translate-y-1"
          >
            <div className="flex-shrink-0">
              <img
                data-src="https://freep-front-api-static.s3.amazonaws.com/media/freep-app-beschikbaar-300x200.png"
                alt="Freep App Nu Beschikbaar"
                className="h-48 w-full object-cover lazyloaded"
                src="https://freep-front-api-static.s3.amazonaws.com/media/freep-app-beschikbaar-300x200.png"
              />
            </div>{" "}
            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
              <div className="flex-1">
                <p className="text-sm leading-5 font-medium text-indigo-600">
                  nieuws
                </p>{" "}
                <NavLink to="/nieuws-detail" className="block">
                  <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                    Freep App Nu Beschikbaar
                  </h3>{" "}
                  <p className="mt-3 text-base leading-6 text-gray-500">
                    Je kunt nu alle freelance overheidsopdrachten eenvoudig
                    bekijken in de app.
                  </p>
                </NavLink>
              </div>{" "}
              <div className="mt-4">
                <NavLink
                  to="/nieuws-detail"
                  className="text-base px-4 py-3 inline-flex rounded-full items-center bg-gray-100 leading-6 font-medium text-indigo-600 hover:text-indigo-500 hover:bg-gray-200 transition duration-150 ease-in-out"
                >
                  Lees verder
                </NavLink>
              </div>
            </div>
          </div>
        </div>{" "}
        <nav className="border-t border-gray-200 px-4 flex items-center justify-between sm:px-0 mt-4">
          <div className="-mt-px w-0 flex-1 flex">
            <a
              href="#"
              className="border-t-2 border-transparent pt-4 pr-1 inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-800 hover:border-gray-300"
              style={{ display: "none" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                className="mr-3 h-5 w-5 text-gray-400"
              >
                <path
                  fillRule="evenodd"
                  d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>{" "}
              <span>Vorige</span>
            </a>
          </div>{" "}
          <div className="hidden md:-mt-px md:flex" style={{ display: "" }}>
            <div>
              <a
                href="#"
                className="border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium border-indigo-500 text-indigo-600"
                style={{ display: "" }}
              >
                1
              </a>{" "}
              <span
                className="border-transparent text-gray-500 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
                style={{ display: "none" }}
              >
                ...
              </span>
            </div>
            <div>
              <a
                href="#"
                className="border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                style={{ display: "" }}
              >
                2
              </a>{" "}
              <span
                className="border-transparent text-gray-500 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
                style={{ display: "none" }}
              >
                ...
              </span>
            </div>
          </div>{" "}
          <div className="-mt-px w-0 flex-1 flex justify-end">
            <a
              href="#"
              className="border-t-2 border-transparent pt-4 pl-1 inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-800 hover:border-gray-300"
              style={{ display: "" }}
            >
              <span>Volgende</span>{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                className="ml-3 h-5 w-5 text-gray-400"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Blogs;
