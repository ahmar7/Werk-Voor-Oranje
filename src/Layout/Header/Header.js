import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import Logo from "../../Assets/img/WerkVoorOranjeLogo.webp";

import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
const Header = () => {
  const [ActiveMenu, setActiveMenu] = useState(false);
  let toggleMenu = () => {
    console.log("as");
    if (ActiveMenu === false) {
      setActiveMenu(true);
    } else {
      setActiveMenu(false);
    }
  };
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  return (
    <>
      <div className="relative bg-link " data-v-4d4e8e34>
        <div className="max-w-screen-xl mx-auto px-4 md:px-12">
          <div className="flex justify-between items-center py-4 md:justify-between md:space-x-10">
            <div className="lg:w-0 lg:flex-1">
              <NavLink
                to="/"
                className="flex logoMy nuxt-link-exact-active color-link nuxt-link-active text-indigo-900"
                aria-current="page"
              >
                <img src={Logo} alt="" />
              </NavLink>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <div className="inline-flex items-center">
                <button
                  onClick={toggleMenu}
                  type="button"
                  aria-label="open menu"
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <nav className="hidden md:flex ">
              <div className="relative space-x-10">
                <NavLink
                  to="/"
                  title="Overzicht van alle openstaande interim opdrachten bij de overheid"
                  className="text-lg mr-4 leading-6 font-medium  focus:outline-none transition ease-in-out duration-150 nuxt-link-exact-active nuxt-link-active light-link color-link"
                  aria-current="page"
                >
                  Alle opdrachten
                </NavLink>{" "}
                <NavLink
                  to="/zzpbemiddeling"
                  title="Werk Voor Oranje helpt interim professionals binnen de overheid"
                  className="text-lg leading-6 font-medium focus:outline-none transition ease-in-out duration-150 light-link color-link"
                >
                  ZZP Bemiddeling
                </NavLink>{" "}
                <NavLink
                  to="/detachering"
                  title="Werk Voor Oranje Detachering binnen de overheid"
                  className="text-lg leading-6 font-medium focus:outline-none transition ease-in-out duration-150 light-link color-link"
                >
                  Detachering
                </NavLink>
              </div>
            </nav>
            <div className="hidden mdnone md:flex items-center lowmargin justify-end space-x-8 flex ">
              <div
                className="hidden xl:block"
                style={{ display: "" }}
                onClick={onOpenModal}
              >
                <span className="inline-flex rounded-md shadow-sm">
                  <a
                    href="javascript:void(0)"
                    className="whitespace-no-wrap inline-flex items-center justify-center px-4 py-3 border border-transparent text-base leading-6 font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
                  >
                    Stel e-mail alert in
                  </a>
                </span>
              </div>
              <div className="hidden md:block" style={{ display: "none" }}>
                <div className="ml-4 flex items-center md:ml-6">
                  <a
                    href="/bewaard"
                    title="overzicht van bewaarde opdrachten"
                    aria-label="Bewaarde opdrachten"
                    className="p-1 border-2 border-transparent text-gray-400 rounded-full hover:text-indigo-500  focus:outline-none focus:text-white focus:bg-gray-700"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      ></path>
                    </svg>
                  </a>{" "}
                  <a
                    href="/alerts"
                    title="Overzicht van mail alerts"
                    aria-label="email alerts"
                    className="p-1 border-2 border-transparent text-gray-400 rounded-full hover:text-indigo-500  focus:outline-none focus:text-white focus:bg-gray-700"
                  >
                    <svg
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                      ></path>
                    </svg>
                  </a>
                  <div className="ml-3 relative">
                    <div>
                      <a
                        href="/account"
                        title="Bewerk je gegevens"
                        id="user-menu"
                        aria-label="mijn account"
                        className="max-w-xs flex items-center text-sm rounded-full hover:text-indigo-500 focus:outline-none focus:shadow-solid"
                      >
                        <img
                          width={40}
                          height={40}
                          src="/_nuxt/img/profile.46c1fe5.jpg"
                          alt="profiel"
                          className="h-8 w-8 rounded-full"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {ActiveMenu && (
          <div className="absolute ml- top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-50  scale-95 duration-100 ease-out">
            <div className="rounded-lg shadow-lg">
              <div className="rounded-lg shadow-xs bg-white divide-y-2 divide-gray-100">
                <div className="pt-5 pb-6 px-5 space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <NavLink
                        to="/"
                        className="flex naar text-indigo-900 nuxt-link-exact-active nuxt-link-active"
                        aria-current="page"
                      >
                        <img src={Logo} alt="" />
                      </NavLink>
                    </div>
                    <div className="-mr-2">
                      <button
                        onClick={toggleMenu}
                        type="button"
                        aria-label="open het menu"
                        className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="h-6 w-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div>
                    <nav className="grid grid-cols-1 gap-7">
                      <NavLink
                        to="/"
                        title="overzicht van alle beschikbare interim opdrachten bij de overheid"
                        className="-m-3 p-3 flex items-center space-x-4 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150 nuxt-link-exact-active nuxt-link-active"
                        aria-current="page"
                      >
                        <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white">
                          <div>
                            {" "}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              className="h-6 w-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                              ></path>
                            </svg>{" "}
                          </div>
                        </div>
                        <div className="text-base leading-6 font-medium text-gray-900">
                          Alle opdrachten
                        </div>
                      </NavLink>{" "}
                      <NavLink
                        to="/zzpbemiddeling"
                        title="Werk Voor Oranje helpt interim professionals binnen de overheid"
                        className="-m-3 p-3 flex items-center space-x-4 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150"
                      >
                        <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white">
                          <div>
                            {" "}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              className="h-6 w-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              ></path>
                            </svg>{" "}
                          </div>
                        </div>
                        <div className="text-base leading-6 font-medium text-gray-900">
                          ZZP Bemiddeling
                        </div>
                      </NavLink>{" "}
                      <NavLink
                        to="/detachering"
                        title="Werk Voor Oranje detachering binnen de overheid"
                        className="-m-3 p-3 flex items-center space-x-4 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150"
                      >
                        <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white">
                          <div>
                            {" "}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="w-6 h-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                              ></path>
                            </svg>
                          </div>
                        </div>
                        <div className="text-base leading-6 font-medium text-gray-900">
                          Detachering
                        </div>
                      </NavLink>{" "}
                    </nav>
                  </div>
                </div>
                <div className="px-5 space-y-6">
                  <div className="space-y-6 py-8" style={{ display: "" }}>
                    <span className="w-full flex rounded-md shadow-sm">
                      <a
                        onClick={onOpenModal}
                        href="#"
                        className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
                      >
                        Stel e-mail alert in
                      </a>
                    </span>
                  </div>
                  <div className="pb-8" style={{ display: "none" }}>
                    <a
                      href="/account"
                      title="naar je account"
                      className="px-4 flex items-center"
                    >
                      <div className="flex-shrink-0">
                        <img
                          width={40}
                          height={40}
                          src="/_nuxt/img/profile.46c1fe5.jpg"
                          alt="Mijn acount"
                          className="lazyload h-10 w-10 rounded-full"
                        />
                      </div>
                      <div className="ml-3">
                        <div className="text-base font-medium leading-6 text-gray-800">
                          Mijn account
                        </div>
                      </div>
                    </a>
                    <div className="mt-3 px-2 space-y-1">
                      <a
                        href="/bewaard"
                        title="bewaarde opdrachten"
                        className="block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:bg-gray-50 focus:text-gray-900 transition duration-150 ease-in-out"
                      >
                        Bewaarde opdrachten
                      </a>{" "}
                      <a
                        href="/alerts"
                        title="email alerts"
                        className="block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:bg-gray-50 focus:text-gray-900 transition duration-150 ease-in-out"
                      >
                        Mijn alerts
                      </a>{" "}
                      <a
                        href="#"
                        title="Uitloggen"
                        className="block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:bg-gray-50 focus:text-gray-900 transition duration-150 ease-in-out"
                      >
                        Uitloggen
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="w-full mb-b bg-gray-100 shadow lg:hidden" data-v-4d4e8e34>
        <div className="container mx-auto bg-gray-100 ">
          <div className="relative">
            <div className="max-w-screen-xl mx-auto px-2 md:px-12">
              <div className="flex justify-between items-center py-3 md:space-x-10">
                <div className="w-4/6 md:w-2/3">
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
                    <label htmlFor="search" className="hidden">
                      Zoeken
                    </label>{" "}
                    <input
                      id="search"
                      aria-label="zoek opdrachten"
                      type="search"
                      placeholder="Zoeken"
                      className="form-input block w-full pl-16 text-lg leading-5 p-4 rounded-full border focus:border-indigo-500 focus:outline-none"
                    />
                  </div>
                </div>
                <div className="w-1/6 md:w-1/3 px-2 flex lg:hidden mr-2">
                  <button
                    aria-label="filter opdrachten"
                    type="button"
                    className="inline-flex items-center px-4 md:px-12 md:py-4 py-3 border border-transparent text-base leading-6 font-medium rounded-lg md:rounded-full text-indigo-700 bg-gray-200 md:text-white md:bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="-ml-1 mr-o md:mr-3 h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                      ></path>
                    </svg>{" "}
                    <span className="hidden md:block truncate">
                      Filter opdrachten
                    </span>
                  </button>
                </div>
                <div className="w-1/6 lg:w-2/6 md:w-1/3 ">
                  {" "}
                  <a
                    href="/account/registreren"
                    aria-label="ontvang direct nieuwe interim opdrachten in de je mailbox"
                    className="md:float-right inline-flex items-center px-4  md:px-12 md:py-4 py-3 border border-transparent text-base leading-6 font-medium rounded-lg md:rounded-full text-indigo-700 bg-green-300 hover:bg-green-200 focus:outline-none focus:border-indigo-300 focus:shadow-outline-indigo active:bg-indigo-200 transition ease-in-out duration-150"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="-ml-1 mr-0 md:mr-3 h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                      ></path>
                    </svg>{" "}
                    <span className="hidden md:block truncate">
                      Alert aanmaken
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Modal open={open} onClose={onCloseModal} center>
          <div className="popup-email">
            <h1>Stel e-mail alert in</h1>
            <div className="mainp">
              <input type="email" placeholder="example@email.com" />
              <button>Aanmelden</button>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default Header;
