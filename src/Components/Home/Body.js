import React from "react";
import Sidebar from "./Sidebar";
import { NavLink } from "react-router-dom";
import "./Body.css";

const Body = () => {
  return (
    <>
      <div
        className="container max-w-screen-xl flex flex-wrap mdpad mx-auto mt-8 mb-0 lg:mb-8 md:px-12"
        style={{ display: "" }}
        data-v-4d4e8e34
      >
        <Sidebar />
        <div
          className="ml-0 -mt-12 lg:mt-0 lg:ml-8 my-0 min-w-0 max-w-5xl flex-1 h-full"
          data-v-4d4e8e34
        >
          <div
            className="block lg:hidden text-base text-gray-500 mt-12 "
            data-v-4d4e8e34
          >
            <div
              className="flex items-center space-x-2 w-64 mx-auto"
              data-v-4d4e8e34
            >
              <p className="font-semibold" data-v-4d4e8e34>
                630
              </p>
              <p data-v-4d4e8e34>interim opdrachten gevonden</p>
            </div>
          </div>
          <div
            className="flex-cards

"
          >
            <div className="main-vacant">
              <div
                className="relative py-10 px-8 bg-indigo-700 rounded-none sm:rounded-2xl  lg:flex lg:items-start mb-4 shadow-lg"
                style={{ display: "none" }}
                data-v-4d4e8e34
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-1 -mt-72 sm:-mt-32 md:mt-0 rounded-2xl"
                >
                  <svg
                    preserveAspectRatio="xMidYMid slice"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 1463 360"
                    className="absolute inset-0 h-full w-full"
                  >
                    <path
                      fill="currentColor"
                      d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
                      className="text-indigo-500 text-opacity-40"
                    />
                    <path
                      fill="currentColor"
                      d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
                      className="text-indigo-800 text-opacity-40"
                    />
                  </svg>
                </div>
                <div className="relative lg:w-0 lg:flex-1">
                  <h2 className="text-3xl font-extrabold tracking-tight text-white">
                    Mis geen opdracht!
                  </h2>
                  <p className="mt-2 max-w-3xl text-base text-indigo-100">
                    Ontvang jouw zoekopdracht als e-mailalert
                  </p>
                </div>
                <div className="relative mt-12 sm:w-full sm:max-w-md lg:mt-0 lg:ml-8 lg:flex-1">
                  <form className="sm:flex">
                    <label htmlFor="email-address" className="sr-only">
                      E-mailadres
                    </label>{" "}
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required="required"
                      placeholder="Je e-mailadres"
                      defaultValue
                      className="w-full border-white px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white rounded-md"
                    />
                    <button
                      type="submit"
                      className="cursor-pointer mt-3 w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-700 focus:ring-white sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
                    >
                      Activeer
                    </button>
                  </form>
                  <p className="mt-3 text-xs text-indigo-200">
                    We vinden privacy belangrijk, lees onze
                    <a className="font-medium underline">privacy verklaring</a>
                  </p>
                </div>
              </div>{" "}
              <NavLink
                to="/vacancy-detail"
                aria-label="zzp opdracht Business analist migratie bij Stedin Groep"
                className="mb-4 max-w-lg mx-auto sm:rounded-2xl shadow-lg overflow-hidden lg:max-w-none lg:flex  duration-200 ease-in-out transform border border-gray-200  hover:shadow-md "
                data-v-4d4e8e34
              >
                <div className="flex sm:hidden pt-12 px-8 bg-white lg:flex-shrink-0">
                  <img
                    src="https://freepapi-assets.s3.amazonaws.com/media/logos/None/stedin.png"
                    alt="zzp opdracht bij Stedin Groep"
                    className="relative h-16  object-scale-down lazyloaded"
                  />
                </div>
                <div className="flex-1 bg-white p-10 lgcustom">
                  <div className="hidden lg:flex fixed top-4 right-4">
                    <span className="ml-4 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-pink-50 text-pink-800">
                      detachering
                    </span>{" "}
                    <span
                      className="ml-4 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-50 text-green-800"
                      style={{ display: "none" }}
                    >
                      freelance
                    </span>
                  </div>
                  <div className="flex items-center justify-start lg:space-x-8 space-x-0">
                    <div className="w-32 hidden sm:flex">
                      <img
                        src="https://freepapi-assets.s3.amazonaws.com/media/logos/None/stedin.png"
                        alt="zzp opdracht bij Stedin Groep"
                        className="relative h-12 w-full object-scale-down lazyloaded"
                      />
                    </div>
                    <div className="space-y-2 lg:space-y-0">
                      <h3 className="text-xl leading-8 font-semibold text-indigo-900  sm:leading-9">
                        Business analist migratie
                      </h3>
                      <p className=" text-base leading-6 text-gray-600">
                        Stedin Groep
                      </p>
                    </div>
                  </div>
                  <div className="mt-8">
                    <div className="flex items-center lg:hidden lg:mb-0 mb-4">
                      <h4 className="flex-shrink-0 pr-4 bg-white text-sm leading-5 tracking-wider font-semibold uppercase text-indigo-600">
                        Over de opdracht
                      </h4>
                      <div className="flex-1 border-t-2 border-gray-200" />{" "}
                      <span className="lg:hidden inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-pink-50 text-pink-800">
                        detachering
                      </span>{" "}
                      {/**/}
                    </div>
                    <div className="flex justify-between items-center item-cards">
                      <div className="hidden xl:flex items-center">
                        <h4 className="flex-shrink-0 pr-4 bg-white text-sm leading-5 tracking-wider font-semibold uppercase text-indigo-600">
                          Over de opdracht
                        </h4>
                        <div className="flex-1 border-t-2 border-gray-200" />
                      </div>
                      <div>
                        <ul className="lg:grid lg:grid-cols-3 lg:gap-x-12 lg:gap-y-5 ul-flex">
                          <li className="flex items-start lg:col-span-1">
                            <div className="flex-shrink-0">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="h-5 w-5 text-gray-800"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M14.121 15.536c-1.171 1.952-3.07 1.952-4.242 0-1.172-1.953-1.172-5.119 0-7.072 1.171-1.952 3.07-1.952 4.242 0M8 10.5h4m-4 3h4m9-1.5a9 9 0 11-18 0 9 9 0 0118 0z"
                                ></path>
                              </svg>
                            </div>
                            <p
                              className="ml-3 text-sm leading-5 text-gray-700"
                              style={{ display: "none" }}
                            >
                              max € 0 p/u
                            </p>
                            <p className="ml-3 text-sm leading-5 text-gray-700">
                              geen max tarief
                            </p>
                          </li>
                          <li className="mt-5 flex items-start lg:col-span-1 lg:mt-0">
                            <div className="flex-shrink-0">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="h-5 w-5 text-gray-800"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                ></path>
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                              </svg>
                            </div>
                            <p className="ml-3 text-sm leading-5 text-gray-700">
                              Zuid-Holland
                            </p>
                          </li>
                          <li className="mt-5 flex items-start lg:col-span-1 lg:mt-0">
                            <div className="flex-shrink-0">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="h-5 w-5 text-gray-800"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                ></path>
                              </svg>
                            </div>
                            <p className="ml-3 text-sm leading-5 text-gray-700">
                              24 uur p/w
                            </p>
                            <p
                              className="ml-3 text-sm leading-5 text-gray-700"
                              style={{ display: "none" }}
                            >
                              Onbekend
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </NavLink>
            </div>

            {/* <div className="main-vacant">
              <div
                className="relative py-10 px-8 bg-indigo-700 rounded-none sm:rounded-2xl  lg:flex lg:items-start mb-4 shadow-lg"
                style={{ display: "none" }}
                data-v-4d4e8e34
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-1 -mt-72 sm:-mt-32 md:mt-0 rounded-2xl"
                >
                  <svg
                    preserveAspectRatio="xMidYMid slice"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 1463 360"
                    className="absolute inset-0 h-full w-full"
                  >
                    <path
                      fill="currentColor"
                      d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
                      className="text-indigo-500 text-opacity-40"
                    />
                    <path
                      fill="currentColor"
                      d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
                      className="text-indigo-800 text-opacity-40"
                    />
                  </svg>
                </div>
               
                <div className="relative mt-12 sm:w-full sm:max-w-md lg:mt-0 lg:ml-8 lg:flex-1">
                  <form className="sm:flex">
                    <label htmlFor="email-address" className="sr-only">
                      E-mailadres
                    </label>{" "}
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required="required"
                      placeholder="Je e-mailadres"
                      defaultValue
                      className="w-full border-white px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white rounded-md"
                    />
                    <button
                      type="submit"
                      className="cursor-pointer mt-3 w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-700 focus:ring-white sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
                    >
                      Activeer
                    </button>
                  </form>
                  <p className="mt-3 text-xs text-indigo-200">
                    We vinden privacy belangrijk, lees onze
                    <a href="/privacy" className="font-medium underline">
                      privacy verklaring
                    </a>
                  </p>
                </div>
              </div>{" "}
              <NavLink
                to="/vacancy-detail"
                aria-label="zzp opdracht Business analist integratie bmr eo dnwg bij Stedin Groep"
                className="mb-4 max-w-lg mx-auto sm:rounded-2xl shadow-lg overflow-hidden lg:max-w-none lg:flex  duration-200 ease-in-out transform border border-gray-200  hover:shadow-md "
                data-v-4d4e8e34
              >
                <div className="flex sm:hidden pt-12 px-8 bg-white lg:flex-shrink-0">
                  <img
                    src="https://freepapi-assets.s3.amazonaws.com/media/logos/None/stedin.png"
                    alt="zzp opdracht bij Stedin Groep"
                    className="relative h-16  object-scale-down lazyloaded"
                  />
                </div>
                <div className="flex-1 bg-white p-10 lgcustom">
                  <div className="hidden lg:flex fixed top-4 right-4">
                    <span className="ml-4 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-pink-50 text-pink-800">
                      detachering
                    </span>{" "}
                    <span
                      className="ml-4 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-50 text-green-800"
                      style={{ display: "none" }}
                    >
                      freelance
                    </span>
                  </div>
                  <div className="flex items-center justify-start lg:space-x-8 space-x-0">
                    <div className="w-32 hidden sm:flex">
                      <img
                        src="https://freepapi-assets.s3.amazonaws.com/media/logos/None/stedin.png"
                        alt="zzp opdracht bij Stedin Groep"
                        className="relative h-12 w-full object-scale-down lazyloaded"
                      />
                    </div>
                    <div className="space-y-2 lg:space-y-0">
                      <h3 className="text-xl leading-8 font-semibold text-indigo-900  sm:leading-9">
                        Business analist integratie bmr eo dnwg
                      </h3>
                      <p className=" text-base leading-6 text-gray-600">
                        Stedin Groep
                      </p>
                    </div>
                  </div>
                  <div className="mt-8">
                    <div className="flex items-center lg:hidden lg:mb-0 mb-4">
                      <h4 className="flex-shrink-0 pr-4 bg-white text-sm leading-5 tracking-wider font-semibold uppercase text-indigo-600">
                        Over de opdracht
                      </h4>
                      <div className="flex-1 border-t-2 border-gray-200" />{" "}
                      <span className="lg:hidden inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-pink-50 text-pink-800">
                        detachering
                      </span>{" "}
                     
                    </div>
                    <div className="flex justify-between items-center item-cards">
                      <div className="hidden xl:flex items-center">
                        <h4 className="flex-shrink-0 pr-4 bg-white text-sm leading-5 tracking-wider font-semibold uppercase text-indigo-600">
                          Over de opdracht
                        </h4>
                        <div className="flex-1 border-t-2 border-gray-200" />
                      </div>
                      <div>
                        <ul className="lg:grid lg:grid-cols-3 lg:gap-x-12 lg:gap-y-5 ul-flex">
                          <li className="flex items-start lg:col-span-1">
                            <div className="flex-shrink-0">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="h-5 w-5 text-gray-800"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M14.121 15.536c-1.171 1.952-3.07 1.952-4.242 0-1.172-1.953-1.172-5.119 0-7.072 1.171-1.952 3.07-1.952 4.242 0M8 10.5h4m-4 3h4m9-1.5a9 9 0 11-18 0 9 9 0 0118 0z"
                                ></path>
                              </svg>
                            </div>
                            <p
                              className="ml-3 text-sm leading-5 text-gray-700"
                              style={{ display: "none" }}
                            >
                              max € 0 p/u
                            </p>
                            <p className="ml-3 text-sm leading-5 text-gray-700">
                              geen max tarief
                            </p>
                          </li>
                          <li className="mt-5 flex items-start lg:col-span-1 lg:mt-0">
                            <div className="flex-shrink-0">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="h-5 w-5 text-gray-800"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                ></path>
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                              </svg>
                            </div>
                            <p className="ml-3 text-sm leading-5 text-gray-700">
                              Zuid-Holland
                            </p>
                          </li>
                          <li className="mt-5 flex items-start lg:col-span-1 lg:mt-0">
                            <div className="flex-shrink-0">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="h-5 w-5 text-gray-800"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                ></path>
                              </svg>
                            </div>
                            <p className="ml-3 text-sm leading-5 text-gray-700">
                              20 uur p/w
                            </p>
                            <p
                              className="ml-3 text-sm leading-5 text-gray-700"
                              style={{ display: "none" }}
                            >
                              Onbekend
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </NavLink>
            </div> */}

            <div className="main-vacant">
              <div
                className="relative py-10 px-8 bg-indigo-700 rounded-none sm:rounded-2xl  lg:flex lg:items-start mb-4 shadow-lg"
                style={{ display: "none" }}
                data-v-4d4e8e34
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-1 -mt-72 sm:-mt-32 md:mt-0 rounded-2xl"
                >
                  <svg
                    preserveAspectRatio="xMidYMid slice"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 1463 360"
                    className="absolute inset-0 h-full w-full"
                  >
                    <path
                      fill="currentColor"
                      d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
                      className="text-indigo-500 text-opacity-40"
                    />
                    <path
                      fill="currentColor"
                      d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
                      className="text-indigo-800 text-opacity-40"
                    />
                  </svg>
                </div>
                <div className="relative lg:w-0 lg:flex-1">
                  <h2 className="text-3xl font-extrabold tracking-tight text-white">
                    Mis geen opdracht!
                  </h2>
                  <p className="mt-2 max-w-3xl text-base text-indigo-100">
                    Ontvang jouw zoekopdracht als e-mailalert
                  </p>
                </div>
                <div className="relative mt-12 sm:w-full sm:max-w-md lg:mt-0 lg:ml-8 lg:flex-1">
                  <form className="sm:flex">
                    <label htmlFor="email-address" className="sr-only">
                      E-mailadres
                    </label>{" "}
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required="required"
                      placeholder="Je e-mailadres"
                      defaultValue
                      className="w-full border-white px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white rounded-md"
                    />
                    <button
                      type="submit"
                      className="cursor-pointer mt-3 w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-700 focus:ring-white sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
                    >
                      Activeer
                    </button>
                  </form>
                  <p className="mt-3 text-xs text-indigo-200">
                    We vinden privacy belangrijk, lees onze
                    <a href="/privacy" className="font-medium underline">
                      privacy verklaring
                    </a>
                  </p>
                </div>
              </div>{" "}
              <NavLink
                to="/vacancy-detail"
                aria-label="zzp opdracht Beleidsmedewerker ruimtelijke ordening bij Gemeente Kampen"
                className="mb-4 max-w-lg mx-auto sm:rounded-2xl shadow-lg overflow-hidden lg:max-w-none lg:flex  duration-200 ease-in-out transform border border-gray-200  hover:shadow-md "
                data-v-4d4e8e34
              >
                <div className="flex sm:hidden pt-12 px-8 bg-white lg:flex-shrink-0">
                  <img
                    src="https://freepapi-assets.s3.amazonaws.com/media/logos/None/gemeente-kampen-300x200.png"
                    alt="zzp opdracht bij Gemeente Kampen"
                    className="relative h-16  object-scale-down lazyloaded"
                  />
                </div>
                <div className="flex-1 bg-white p-10 lgcustom">
                  <div className="hidden lg:flex fixed top-4 right-4">
                    <span className="ml-4 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-pink-50 text-pink-800">
                      detachering
                    </span>{" "}
                    <span
                      className="ml-4 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-50 text-green-800"
                      style={{ display: "none" }}
                    >
                      freelance
                    </span>
                  </div>
                  <div className="flex items-center justify-start lg:space-x-8 space-x-0">
                    <div className="w-32 hidden sm:flex">
                      <img
                        src="https://freepapi-assets.s3.amazonaws.com/media/logos/None/gemeente-kampen-300x200.png"
                        alt="zzp opdracht bij Gemeente Kampen"
                        className="relative h-12 w-full object-scale-down lazyloaded"
                      />
                    </div>
                    <div className="space-y-2 lg:space-y-0">
                      <h3 className="text-xl leading-8 font-semibold text-indigo-900  sm:leading-9">
                        Beleidsmedewerker ruimtelijke ordening
                      </h3>
                      <p className=" text-base leading-6 text-gray-600">
                        Gemeente Kampen
                      </p>
                    </div>
                  </div>
                  <div className="mt-8">
                    <div className="flex items-center lg:hidden lg:mb-0 mb-4">
                      <h4 className="flex-shrink-0 pr-4 bg-white text-sm leading-5 tracking-wider font-semibold uppercase text-indigo-600">
                        Over de opdracht
                      </h4>
                      <div className="flex-1 border-t-2 border-gray-200" />{" "}
                      <span className="lg:hidden inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-pink-50 text-pink-800">
                        detachering
                      </span>{" "}
                      {/**/}
                    </div>
                    <div className="flex justify-between items-center item-cards">
                      <div className="hidden xl:flex items-center">
                        <h4 className="flex-shrink-0 pr-4 bg-white text-sm leading-5 tracking-wider font-semibold uppercase text-indigo-600">
                          Over de opdracht
                        </h4>
                        <div className="flex-1 border-t-2 border-gray-200" />
                      </div>
                      <div>
                        <ul className="lg:grid lg:grid-cols-3 lg:gap-x-12 lg:gap-y-5 ul-flex">
                          <li className="flex items-start lg:col-span-1">
                            <div className="flex-shrink-0">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="h-5 w-5 text-gray-800"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M14.121 15.536c-1.171 1.952-3.07 1.952-4.242 0-1.172-1.953-1.172-5.119 0-7.072 1.171-1.952 3.07-1.952 4.242 0M8 10.5h4m-4 3h4m9-1.5a9 9 0 11-18 0 9 9 0 0118 0z"
                                ></path>
                              </svg>
                            </div>
                            <p
                              className="ml-3 text-sm leading-5 text-gray-700"
                              style={{ display: "none" }}
                            >
                              max € 0 p/u
                            </p>
                            <p className="ml-3 text-sm leading-5 text-gray-700">
                              geen max tarief
                            </p>
                          </li>
                          <li className="mt-5 flex items-start lg:col-span-1 lg:mt-0">
                            <div className="flex-shrink-0">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="h-5 w-5 text-gray-800"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                ></path>
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                              </svg>
                            </div>
                            <p className="ml-3 text-sm leading-5 text-gray-700">
                              Overijssel
                            </p>
                          </li>
                          <li className="mt-5 flex items-start lg:col-span-1 lg:mt-0">
                            <div className="flex-shrink-0">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="h-5 w-5 text-gray-800"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                ></path>
                              </svg>
                            </div>
                            <p className="ml-3 text-sm leading-5 text-gray-700">
                              36 uur p/w
                            </p>
                            <p
                              className="ml-3 text-sm leading-5 text-gray-700"
                              style={{ display: "none" }}
                            >
                              Onbekend
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </NavLink>
            </div>
            <div className="main-vacant">
              <div
                className="relative py-10 px-8 bg-indigo-700 rounded-none sm:rounded-2xl  lg:flex lg:items-start mb-4 shadow-lg"
                style={{ display: "none" }}
                data-v-4d4e8e34
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-1 -mt-72 sm:-mt-32 md:mt-0 rounded-2xl"
                >
                  <svg
                    preserveAspectRatio="xMidYMid slice"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 1463 360"
                    className="absolute inset-0 h-full w-full"
                  >
                    <path
                      fill="currentColor"
                      d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
                      className="text-indigo-500 text-opacity-40"
                    />
                    <path
                      fill="currentColor"
                      d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
                      className="text-indigo-800 text-opacity-40"
                    />
                  </svg>
                </div>
                <div className="relative lg:w-0 lg:flex-1">
                  <h2 className="text-3xl font-extrabold tracking-tight text-white">
                    Mis geen opdracht!
                  </h2>
                  <p className="mt-2 max-w-3xl text-base text-indigo-100">
                    Ontvang jouw zoekopdracht als e-mailalert
                  </p>
                </div>
                <div className="relative mt-12 sm:w-full sm:max-w-md lg:mt-0 lg:ml-8 lg:flex-1">
                  <form className="sm:flex">
                    <label htmlFor="email-address" className="sr-only">
                      E-mailadres
                    </label>{" "}
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required="required"
                      placeholder="Je e-mailadres"
                      defaultValue
                      className="w-full border-white px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white rounded-md"
                    />
                    <button
                      type="submit"
                      className="cursor-pointer mt-3 w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-700 focus:ring-white sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
                    >
                      Activeer
                    </button>
                  </form>
                  <p className="mt-3 text-xs text-indigo-200">
                    We vinden privacy belangrijk, lees onze
                    <a href="/privacy" className="font-medium underline">
                      privacy verklaring
                    </a>
                  </p>
                </div>
              </div>{" "}
              <NavLink
                to="/vacancy-detail"
                aria-label="zzp opdracht Wabo coördinator / senior wabo vergunningverlener bij Gemeente Dronten"
                className="mb-4 max-w-lg mx-auto sm:rounded-2xl shadow-lg overflow-hidden lg:max-w-none lg:flex  duration-200 ease-in-out transform border border-gray-200  hover:shadow-md "
                data-v-4d4e8e34
              >
                <div className="flex sm:hidden pt-12 px-8 bg-white lg:flex-shrink-0">
                  <img
                    src="https://freepapi-assets.s3.amazonaws.com/media/logos/None/logo_dronten.png"
                    alt="zzp opdracht bij Gemeente Dronten"
                    className="relative h-16  object-scale-down lazyloaded"
                  />
                </div>
                <div className="flex-1 bg-white p-10 lgcustom">
                  <div className="hidden lg:flex fixed top-4 right-4">
                    <span className="ml-4 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-pink-50 text-pink-800">
                      detachering
                    </span>{" "}
                    <span
                      className="ml-4 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-50 text-green-800"
                      style={{ display: "none" }}
                    >
                      freelance
                    </span>
                  </div>
                  <div className="flex items-center justify-start lg:space-x-8 space-x-0">
                    <div className="w-32 hidden sm:flex">
                      <img
                        src="https://freepapi-assets.s3.amazonaws.com/media/logos/None/logo_dronten.png"
                        alt="zzp opdracht bij Gemeente Dronten"
                        className="relative h-12 w-full object-scale-down lazyloaded"
                      />
                    </div>
                    <div className="space-y-2 lg:space-y-0">
                      <h3 className="text-xl leading-8 font-semibold text-indigo-900  sm:leading-9">
                        Wabo coördinator / senior wabo vergunningverlener
                      </h3>
                      <p className=" text-base leading-6 text-gray-600">
                        Gemeente Dronten
                      </p>
                    </div>
                  </div>
                  <div className="mt-8">
                    <div className="flex items-center lg:hidden lg:mb-0 mb-4">
                      <h4 className="flex-shrink-0 pr-4 bg-white text-sm leading-5 tracking-wider font-semibold uppercase text-indigo-600">
                        Over de opdracht
                      </h4>
                      <div className="flex-1 border-t-2 border-gray-200" />{" "}
                      <span className="lg:hidden inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-pink-50 text-pink-800">
                        detachering
                      </span>{" "}
                      {/**/}
                    </div>
                    <div className="flex justify-between items-center item-cards">
                      <div className="hidden xl:flex items-center">
                        <h4 className="flex-shrink-0 pr-4 bg-white text-sm leading-5 tracking-wider font-semibold uppercase text-indigo-600">
                          Over de opdracht
                        </h4>
                        <div className="flex-1 border-t-2 border-gray-200" />
                      </div>
                      <div>
                        <ul className="lg:grid lg:grid-cols-3 lg:gap-x-12 lg:gap-y-5 ul-flex">
                          <li className="flex items-start lg:col-span-1">
                            <div className="flex-shrink-0">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="h-5 w-5 text-gray-800"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M14.121 15.536c-1.171 1.952-3.07 1.952-4.242 0-1.172-1.953-1.172-5.119 0-7.072 1.171-1.952 3.07-1.952 4.242 0M8 10.5h4m-4 3h4m9-1.5a9 9 0 11-18 0 9 9 0 0118 0z"
                                ></path>
                              </svg>
                            </div>
                            <p
                              className="ml-3 text-sm leading-5 text-gray-700"
                              style={{ display: "none" }}
                            >
                              max € 0 p/u
                            </p>
                            <p className="ml-3 text-sm leading-5 text-gray-700">
                              geen max tarief
                            </p>
                          </li>
                          <li className="mt-5 flex items-start lg:col-span-1 lg:mt-0">
                            <div className="flex-shrink-0">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="h-5 w-5 text-gray-800"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                ></path>
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                              </svg>
                            </div>
                            <p className="ml-3 text-sm leading-5 text-gray-700">
                              Flevoland
                            </p>
                          </li>
                          <li className="mt-5 flex items-start lg:col-span-1 lg:mt-0">
                            <div className="flex-shrink-0">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="h-5 w-5 text-gray-800"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                ></path>
                              </svg>
                            </div>
                            <p className="ml-3 text-sm leading-5 text-gray-700">
                              36 uur p/w
                            </p>
                            <p
                              className="ml-3 text-sm leading-5 text-gray-700"
                              style={{ display: "none" }}
                            >
                              Onbekend
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </NavLink>
            </div>
            <div className="main-vacant">
              <div
                className="relative py-10 px-8 bg-indigo-700 rounded-none sm:rounded-2xl  lg:flex lg:items-start mb-4 shadow-lg"
                style={{ display: "none" }}
                data-v-4d4e8e34
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-1 -mt-72 sm:-mt-32 md:mt-0 rounded-2xl"
                >
                  <svg
                    preserveAspectRatio="xMidYMid slice"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 1463 360"
                    className="absolute inset-0 h-full w-full"
                  >
                    <path
                      fill="currentColor"
                      d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
                      className="text-indigo-500 text-opacity-40"
                    />
                    <path
                      fill="currentColor"
                      d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
                      className="text-indigo-800 text-opacity-40"
                    />
                  </svg>
                </div>
                <div className="relative lg:w-0 lg:flex-1">
                  <h2 className="text-3xl font-extrabold tracking-tight text-white">
                    Mis geen opdracht!
                  </h2>
                  <p className="mt-2 max-w-3xl text-base text-indigo-100">
                    Ontvang jouw zoekopdracht als e-mailalert
                  </p>
                </div>
                <div className="relative mt-12 sm:w-full sm:max-w-md lg:mt-0 lg:ml-8 lg:flex-1">
                  <form className="sm:flex">
                    <label htmlFor="email-address" className="sr-only">
                      E-mailadres
                    </label>{" "}
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required="required"
                      placeholder="Je e-mailadres"
                      defaultValue
                      className="w-full border-white px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white rounded-md"
                    />
                    <button
                      type="submit"
                      className="cursor-pointer mt-3 w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-700 focus:ring-white sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
                    >
                      Activeer
                    </button>
                  </form>
                  <p className="mt-3 text-xs text-indigo-200">
                    We vinden privacy belangrijk, lees onze
                    <a href="/privacy" className="font-medium underline">
                      privacy verklaring
                    </a>
                  </p>
                </div>
              </div>{" "}
              <NavLink
                to="/vacancy-detail"
                aria-label="zzp opdracht Allround medewerker burgerzaken bij Gemeente Soest"
                className="mb-4 max-w-lg mx-auto sm:rounded-2xl shadow-lg overflow-hidden lg:max-w-none lg:flex  duration-200 ease-in-out transform border border-gray-200  hover:shadow-md "
                data-v-4d4e8e34
              >
                <div className="flex sm:hidden pt-12 px-8 bg-white lg:flex-shrink-0">
                  <img
                    src="https://freepapi-assets.s3.amazonaws.com/media/logos/50/logo-gemeente-soest.png"
                    alt="zzp opdracht bij Gemeente Soest"
                    className="relative h-16  object-scale-down lazyloaded"
                  />
                </div>
                <div className="flex-1 bg-white p-10 lgcustom">
                  <div className="hidden lg:flex fixed top-4 right-4">
                    <span
                      className="ml-4 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-pink-50 text-pink-800"
                      style={{ display: "none" }}
                    >
                      detachering
                    </span>{" "}
                    <span className="ml-4 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-50 text-green-800">
                      freelance
                    </span>
                  </div>
                  <div className="flex items-center justify-start lg:space-x-8 space-x-0">
                    <div className="w-32 hidden sm:flex">
                      <img
                        src="https://freepapi-assets.s3.amazonaws.com/media/logos/50/logo-gemeente-soest.png"
                        alt="zzp opdracht bij Gemeente Soest"
                        className="relative h-12 w-full object-scale-down lazyloaded"
                      />
                    </div>
                    <div className="space-y-2 lg:space-y-0">
                      <h3 className="text-xl leading-8 font-semibold text-indigo-900  sm:leading-9">
                        Allround medewerker burgerzaken
                      </h3>
                      <p className=" text-base leading-6 text-gray-600">
                        Gemeente Soest
                      </p>
                    </div>
                  </div>
                  <div className="mt-8">
                    <div className="flex items-center lg:hidden lg:mb-0 mb-4">
                      <h4 className="flex-shrink-0 pr-4 bg-white text-sm leading-5 tracking-wider font-semibold uppercase text-indigo-600">
                        Over de opdracht
                      </h4>
                      <div className="flex-1 border-t-2 border-gray-200" />{" "}
                      {/**/}{" "}
                      <span className="lg:hidden inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-50 text-green-800">
                        freelance
                      </span>
                    </div>
                    <div className="flex justify-between items-center item-cards">
                      <div className="hidden xl:flex items-center">
                        <h4 className="flex-shrink-0 pr-4 bg-white text-sm leading-5 tracking-wider font-semibold uppercase text-indigo-600">
                          Over de opdracht
                        </h4>
                        <div className="flex-1 border-t-2 border-gray-200" />
                      </div>
                      <div>
                        <ul className="lg:grid lg:grid-cols-3 lg:gap-x-12 lg:gap-y-5 ul-flex">
                          <li className="flex items-start lg:col-span-1">
                            <div className="flex-shrink-0">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="h-5 w-5 text-gray-800"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M14.121 15.536c-1.171 1.952-3.07 1.952-4.242 0-1.172-1.953-1.172-5.119 0-7.072 1.171-1.952 3.07-1.952 4.242 0M8 10.5h4m-4 3h4m9-1.5a9 9 0 11-18 0 9 9 0 0118 0z"
                                ></path>
                              </svg>
                            </div>
                            <p
                              className="ml-3 text-sm leading-5 text-gray-700"
                              style={{ display: "none" }}
                            >
                              max € 0 p/u
                            </p>
                            <p className="ml-3 text-sm leading-5 text-gray-700">
                              geen max tarief
                            </p>
                          </li>
                          <li className="mt-5 flex items-start lg:col-span-1 lg:mt-0">
                            <div className="flex-shrink-0">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="h-5 w-5 text-gray-800"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                ></path>
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                              </svg>
                            </div>
                            <p className="ml-3 text-sm leading-5 text-gray-700">
                              Utrecht
                            </p>
                          </li>
                          <li className="mt-5 flex items-start lg:col-span-1 lg:mt-0">
                            <div className="flex-shrink-0">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="h-5 w-5 text-gray-800"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                ></path>
                              </svg>
                            </div>
                            <p className="ml-3 text-sm leading-5 text-gray-700">
                              28 uur p/w
                            </p>
                            <p
                              className="ml-3 text-sm leading-5 text-gray-700"
                              style={{ display: "none" }}
                            >
                              Onbekend
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </NavLink>
            </div>
            <div className="main-vacant">
              <div
                className="relative py-10 px-8 bg-indigo-700 rounded-none sm:rounded-2xl  lg:flex lg:items-start mb-4 shadow-lg"
                style={{ display: "none" }}
                data-v-4d4e8e34
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-1 -mt-72 sm:-mt-32 md:mt-0 rounded-2xl"
                >
                  <svg
                    preserveAspectRatio="xMidYMid slice"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 1463 360"
                    className="absolute inset-0 h-full w-full"
                  >
                    <path
                      fill="currentColor"
                      d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
                      className="text-indigo-500 text-opacity-40"
                    />
                    <path
                      fill="currentColor"
                      d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
                      className="text-indigo-800 text-opacity-40"
                    />
                  </svg>
                </div>
                <div className="relative lg:w-0 lg:flex-1">
                  <h2 className="text-3xl font-extrabold tracking-tight text-white">
                    Mis geen opdracht!
                  </h2>
                  <p className="mt-2 max-w-3xl text-base text-indigo-100">
                    Ontvang jouw zoekopdracht als e-mailalert
                  </p>
                </div>
                <div className="relative mt-12 sm:w-full sm:max-w-md lg:mt-0 lg:ml-8 lg:flex-1">
                  <form className="sm:flex">
                    <label htmlFor="email-address" className="sr-only">
                      E-mailadres
                    </label>{" "}
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required="required"
                      placeholder="Je e-mailadres"
                      defaultValue
                      className="w-full border-white px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white rounded-md"
                    />
                    <button
                      type="submit"
                      className="cursor-pointer mt-3 w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-700 focus:ring-white sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
                    >
                      Activeer
                    </button>
                  </form>
                  <p className="mt-3 text-xs text-indigo-200">
                    We vinden privacy belangrijk, lees onze
                    <a href="/privacy" className="font-medium underline">
                      privacy verklaring
                    </a>
                  </p>
                </div>
              </div>{" "}
              <NavLink
                to="/vacancy-detail"
                aria-label="zzp opdracht Medewerker kcc bij Gemeente Soest"
                className="mb-4 max-w-lg mx-auto sm:rounded-2xl shadow-lg overflow-hidden lg:max-w-none lg:flex  duration-200 ease-in-out transform border border-gray-200  hover:shadow-md "
                data-v-4d4e8e34
              >
                <div className="flex sm:hidden pt-12 px-8 bg-white lg:flex-shrink-0">
                  <img
                    src="https://freepapi-assets.s3.amazonaws.com/media/logos/50/logo-gemeente-soest.png"
                    alt="zzp opdracht bij Gemeente Soest"
                    className="relative h-16  object-scale-down lazyloaded"
                  />
                </div>
                <div className="flex-1 bg-white p-10 lgcustom">
                  <div className="hidden lg:flex fixed top-4 right-4">
                    <span
                      className="ml-4 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-pink-50 text-pink-800"
                      style={{ display: "none" }}
                    >
                      detachering
                    </span>{" "}
                    <span className="ml-4 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-50 text-green-800">
                      freelance
                    </span>
                  </div>
                  <div className="flex items-center justify-start lg:space-x-8 space-x-0">
                    <div className="w-32 hidden sm:flex">
                      <img
                        src="https://freepapi-assets.s3.amazonaws.com/media/logos/50/logo-gemeente-soest.png"
                        alt="zzp opdracht bij Gemeente Soest"
                        className="relative h-12 w-full object-scale-down lazyloaded"
                      />
                    </div>
                    <div className="space-y-2 lg:space-y-0">
                      <h3 className="text-xl leading-8 font-semibold text-indigo-900  sm:leading-9">
                        Medewerker kcc
                      </h3>
                      <p className=" text-base leading-6 text-gray-600">
                        Gemeente Soest
                      </p>
                    </div>
                  </div>
                  <div className="mt-8">
                    <div className="flex items-center lg:hidden lg:mb-0 mb-4">
                      <h4 className="flex-shrink-0 pr-4 bg-white text-sm leading-5 tracking-wider font-semibold uppercase text-indigo-600">
                        Over de opdracht
                      </h4>
                      <div className="flex-1 border-t-2 border-gray-200" />{" "}
                      {/**/}{" "}
                      <span className="lg:hidden inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-50 text-green-800">
                        freelance
                      </span>
                    </div>
                    <div className="flex justify-between items-center item-cards">
                      <div className="hidden xl:flex items-center">
                        <h4 className="flex-shrink-0 pr-4 bg-white text-sm leading-5 tracking-wider font-semibold uppercase text-indigo-600">
                          Over de opdracht
                        </h4>
                        <div className="flex-1 border-t-2 border-gray-200" />
                      </div>
                      <div>
                        <ul className="lg:grid lg:grid-cols-3 lg:gap-x-12 lg:gap-y-5 ul-flex">
                          <li className="flex items-start lg:col-span-1">
                            <div className="flex-shrink-0">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="h-5 w-5 text-gray-800"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M14.121 15.536c-1.171 1.952-3.07 1.952-4.242 0-1.172-1.953-1.172-5.119 0-7.072 1.171-1.952 3.07-1.952 4.242 0M8 10.5h4m-4 3h4m9-1.5a9 9 0 11-18 0 9 9 0 0118 0z"
                                ></path>
                              </svg>
                            </div>
                            <p
                              className="ml-3 text-sm leading-5 text-gray-700"
                              style={{ display: "none" }}
                            >
                              max € 0 p/u
                            </p>
                            <p className="ml-3 text-sm leading-5 text-gray-700">
                              geen max tarief
                            </p>
                          </li>
                          <li className="mt-5 flex items-start lg:col-span-1 lg:mt-0">
                            <div className="flex-shrink-0">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="h-5 w-5 text-gray-800"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                ></path>
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                              </svg>
                            </div>
                            <p className="ml-3 text-sm leading-5 text-gray-700">
                              Utrecht
                            </p>
                          </li>
                          <li className="mt-5 flex items-start lg:col-span-1 lg:mt-0">
                            <div className="flex-shrink-0">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="h-5 w-5 text-gray-800"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                ></path>
                              </svg>
                            </div>
                            <p className="ml-3 text-sm leading-5 text-gray-700">
                              20 uur p/w
                            </p>
                            <p
                              className="ml-3 text-sm leading-5 text-gray-700"
                              style={{ display: "none" }}
                            >
                              Onbekend
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </NavLink>
            </div>
            <div className="main-vacant">
              <div
                className="relative py-10 px-8 bg-indigo-700 rounded-none sm:rounded-2xl  lg:flex lg:items-start mb-4 shadow-lg"
                style={{ display: "none" }}
                data-v-4d4e8e34
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-1 -mt-72 sm:-mt-32 md:mt-0 rounded-2xl"
                >
                  <svg
                    preserveAspectRatio="xMidYMid slice"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 1463 360"
                    className="absolute inset-0 h-full w-full"
                  >
                    <path
                      fill="currentColor"
                      d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
                      className="text-indigo-500 text-opacity-40"
                    />
                    <path
                      fill="currentColor"
                      d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
                      className="text-indigo-800 text-opacity-40"
                    />
                  </svg>
                </div>
                <div className="relative lg:w-0 lg:flex-1">
                  <h2 className="text-3xl font-extrabold tracking-tight text-white">
                    Mis geen opdracht!
                  </h2>
                  <p className="mt-2 max-w-3xl text-base text-indigo-100">
                    Ontvang jouw zoekopdracht als e-mailalert
                  </p>
                </div>
                <div className="relative mt-12 sm:w-full sm:max-w-md lg:mt-0 lg:ml-8 lg:flex-1">
                  <form className="sm:flex">
                    <label htmlFor="email-address" className="sr-only">
                      E-mailadres
                    </label>{" "}
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required="required"
                      placeholder="Je e-mailadres"
                      defaultValue
                      className="w-full border-white px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white rounded-md"
                    />
                    <button
                      type="submit"
                      className="cursor-pointer mt-3 w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-700 focus:ring-white sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
                    >
                      Activeer
                    </button>
                  </form>
                  <p className="mt-3 text-xs text-indigo-200">
                    We vinden privacy belangrijk, lees onze
                    <a href="/privacy" className="font-medium underline">
                      privacy verklaring
                    </a>
                  </p>
                </div>
              </div>{" "}
              <NavLink
                to="/vacancy-detail"
                aria-label="zzp opdracht Ontwikkelaar monitoring circulaire samenleving bij Provincie Utrecht"
                className="mb-4 max-w-lg mx-auto sm:rounded-2xl shadow-lg overflow-hidden lg:max-w-none lg:flex  duration-200 ease-in-out transform border border-gray-200  hover:shadow-md "
                data-v-4d4e8e34
              >
                <div className="flex sm:hidden pt-12 px-8 bg-white lg:flex-shrink-0">
                  <img
                    src="https://freepapi-assets.s3.amazonaws.com/media/logos/320/logo_provincie_utrecht.png"
                    alt="zzp opdracht bij Provincie Utrecht"
                    className="relative h-16  object-scale-down lazyloaded"
                  />
                </div>
                <div className="flex-1 bg-white p-10 lgcustom">
                  <div className="hidden lg:flex fixed top-4 right-4">
                    <span
                      className="ml-4 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-pink-50 text-pink-800"
                      style={{ display: "none" }}
                    >
                      detachering
                    </span>{" "}
                    <span className="ml-4 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-50 text-green-800">
                      freelance
                    </span>
                  </div>
                  <div className="flex items-center justify-start lg:space-x-8 space-x-0">
                    <div className="w-32 hidden sm:flex">
                      <img
                        src="https://freepapi-assets.s3.amazonaws.com/media/logos/320/logo_provincie_utrecht.png"
                        alt="zzp opdracht bij Provincie Utrecht"
                        className="relative h-12 w-full object-scale-down lazyloaded"
                      />
                    </div>
                    <div className="space-y-2 lg:space-y-0">
                      <h3 className="text-xl leading-8 font-semibold text-indigo-900  sm:leading-9">
                        Ontwikkelaar
                      </h3>
                      <p className=" text-base leading-6 text-gray-600">
                        Provincie Utrecht
                      </p>
                    </div>
                  </div>
                  <div className="mt-8">
                    <div className="flex items-center lg:hidden lg:mb-0 mb-4">
                      <h4 className="flex-shrink-0 pr-4 bg-white text-sm leading-5 tracking-wider font-semibold uppercase text-indigo-600">
                        Over de opdracht
                      </h4>
                      <div className="flex-1 border-t-2 border-gray-200" />{" "}
                      {/**/}{" "}
                      <span className="lg:hidden inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-50 text-green-800">
                        freelance
                      </span>
                    </div>
                    <div className="flex justify-between items-center item-cards">
                      <div className="hidden xl:flex items-center">
                        <h4 className="flex-shrink-0 pr-4 bg-white text-sm leading-5 tracking-wider font-semibold uppercase text-indigo-600">
                          Over de opdracht
                        </h4>
                        <div className="flex-1 border-t-2 border-gray-200" />
                      </div>
                      <div>
                        <ul className="lg:grid lg:grid-cols-3 lg:gap-x-12 lg:gap-y-5 ul-flex">
                          <li className="flex items-start lg:col-span-1">
                            <div className="flex-shrink-0">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="h-5 w-5 text-gray-800"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M14.121 15.536c-1.171 1.952-3.07 1.952-4.242 0-1.172-1.953-1.172-5.119 0-7.072 1.171-1.952 3.07-1.952 4.242 0M8 10.5h4m-4 3h4m9-1.5a9 9 0 11-18 0 9 9 0 0118 0z"
                                ></path>
                              </svg>
                            </div>
                            <p
                              className="ml-3 text-sm leading-5 text-gray-700"
                              style={{ display: "none" }}
                            >
                              max € 0 p/u
                            </p>
                            <p className="ml-3 text-sm leading-5 text-gray-700">
                              geen max tarief
                            </p>
                          </li>
                          <li className="mt-5 flex items-start lg:col-span-1 lg:mt-0">
                            <div className="flex-shrink-0">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="h-5 w-5 text-gray-800"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                ></path>
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                              </svg>
                            </div>
                            <p className="ml-3 text-sm leading-5 text-gray-700">
                              Utrecht
                            </p>
                          </li>
                          <li className="mt-5 flex items-start lg:col-span-1 lg:mt-0">
                            <div className="flex-shrink-0">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="h-5 w-5 text-gray-800"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                ></path>
                              </svg>
                            </div>
                            <p className="ml-3 text-sm leading-5 text-gray-700">
                              36 uur p/w
                            </p>
                            <p
                              className="ml-3 text-sm leading-5 text-gray-700"
                              style={{ display: "none" }}
                            >
                              Onbekend
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      <div
        className="container max-w-screen-xl md:px-12 flex flex-wrap mx-auto"
        style={{ display: "" }}
        data-v-4d4e8e34
      >
        <div className="w-1/3" data-v-4d4e8e34 />
        <div className="w-2/3 " data-v-4d4e8e34>
          <nav
            className="border-t border-gray-200 px-4 flex items-center justify-between sm:px-0"
            data-v-4d4e8e34
          >
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
            </div>
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
              <div>
                <a
                  href="#"
                  className="border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  style={{ display: "" }}
                >
                  3
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
                  4
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
                  5
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
                  style={{ display: "none" }}
                >
                  6
                </a>{" "}
                <span
                  className="border-transparent text-gray-500 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
                  style={{ display: "" }}
                >
                  ...
                </span>
              </div>
              <div>
                <a
                  href="#"
                  className="border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  style={{ display: "none" }}
                >
                  7
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
                  style={{ display: "none" }}
                >
                  8
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
                  style={{ display: "none" }}
                >
                  9
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
                  style={{ display: "none" }}
                >
                  10
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
                  style={{ display: "none" }}
                >
                  11
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
                  style={{ display: "none" }}
                >
                  12
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
                  style={{ display: "none" }}
                >
                  13
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
                  style={{ display: "none" }}
                >
                  14
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
                  style={{ display: "none" }}
                >
                  15
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
                  style={{ display: "none" }}
                >
                  16
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
                  style={{ display: "none" }}
                >
                  17
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
                  style={{ display: "none" }}
                >
                  18
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
                  style={{ display: "none" }}
                >
                  19
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
                  style={{ display: "none" }}
                >
                  20
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
                  style={{ display: "none" }}
                >
                  21
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
                  style={{ display: "none" }}
                >
                  22
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
                  style={{ display: "none" }}
                >
                  23
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
                  style={{ display: "none" }}
                >
                  24
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
                  style={{ display: "none" }}
                >
                  25
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
                  style={{ display: "none" }}
                >
                  26
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
                  style={{ display: "none" }}
                >
                  27
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
                  style={{ display: "none" }}
                >
                  28
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
                  style={{ display: "none" }}
                >
                  29
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
                  style={{ display: "none" }}
                >
                  30
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
                  style={{ display: "none" }}
                >
                  31
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
                  style={{ display: "none" }}
                >
                  32
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
                  style={{ display: "none" }}
                >
                  33
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
                  style={{ display: "none" }}
                >
                  34
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
                  style={{ display: "none" }}
                >
                  35
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
                  style={{ display: "none" }}
                >
                  36
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
                  style={{ display: "none" }}
                >
                  37
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
                  style={{ display: "none" }}
                >
                  38
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
                  style={{ display: "none" }}
                >
                  39
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
                  style={{ display: "none" }}
                >
                  40
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
                  style={{ display: "none" }}
                >
                  41
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
                  style={{ display: "none" }}
                >
                  42
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
                  style={{ display: "none" }}
                >
                  43
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
                  style={{ display: "none" }}
                >
                  44
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
                  style={{ display: "none" }}
                >
                  45
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
                  style={{ display: "none" }}
                >
                  46
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
                  style={{ display: "none" }}
                >
                  47
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
                  style={{ display: "none" }}
                >
                  48
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
                  style={{ display: "none" }}
                >
                  49
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
                  style={{ display: "none" }}
                >
                  50
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
                  style={{ display: "none" }}
                >
                  51
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
                  style={{ display: "none" }}
                >
                  52
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
                  style={{ display: "none" }}
                >
                  53
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
                  style={{ display: "none" }}
                >
                  54
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
                  style={{ display: "none" }}
                >
                  55
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
                  style={{ display: "none" }}
                >
                  56
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
                  style={{ display: "none" }}
                >
                  57
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
                  style={{ display: "none" }}
                >
                  58
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
                  59
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
                  60
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
                  61
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
                  62
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
                  63
                </a>{" "}
                <span
                  className="border-transparent text-gray-500 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
                  style={{ display: "none" }}
                >
                  ...
                </span>
              </div>
            </div>
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
    </>
  );
};

export default Body;
