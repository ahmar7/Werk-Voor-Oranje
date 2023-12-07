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
                {/* <svg
                  viewBox="0 0 193 79"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  className="h-10 md:h-12 w-auto"
                >
                  <g
                    id="Page-1"
                    stroke="none"
                    strokeWidth={1}
                    fill="none"
                    fillRule="evenodd"
                  >
                    <g id="Group" fill="currentColor">
                      <path
                        d="M7.78795812,31.929984 L0,31.929984 L1.32716696,22.3984219 L9.11413613,22.3984219 L10.0655032,15.5680516 C11.2374055,7.14892119 14.3555556,0 27.1772542,0 C29.5368819,0 31.8747528,0.158776152 34,0.714991979 L32.0458406,10.8027699 C30.7740547,10.3254428 29.7178592,10.0078905 28.301687,10.0078905 C24.5258871,10.0078905 22.472833,11.1992109 21.7647469,16.2830436 L20.9132635,22.3984219 L29.6446771,22.3984219 L28.3184991,31.929984 L19.5870855,31.929984 L15.5413031,61 L3.74217568,61 L7.78795812,31.929984 Z"
                        id="Fill-265"
                      />
                      <path
                        d="M36.314422,22.9393083 L47.9850217,22.9393083 L47.1320536,29.0477657 L47.2885615,29.0477657 C50.4226325,24.4270386 54.0291618,22 59.1645779,22 C60.4870698,22 61.9543315,22.0777834 63,22.3908861 L61.5024149,33.1200707 C59.933423,32.6504166 58.3438895,32.3373138 56.6320841,32.3373138 C47.7619979,32.3373138 45.951397,37.5054784 44.8910558,45.1026508 L42.6705997,61 L31,61 L36.314422,22.9393083 Z"
                        id="Fill-266"
                      />
                      <path
                        d="M90.423817,37.6864292 C91.0596646,33.7648219 88.436544,30.4703562 84.1560337,30.4703562 C78.9237453,30.4703562 75.5691009,33.999507 74.7279482,37.6864292 L90.423817,37.6864292 Z M98.1068097,54.4703562 C93.621991,59.2557624 86.9705066,62 80.7874366,62 C68.8956907,62 60.4981168,54.1567854 62.2252703,42.000493 C63.9514272,29.8432146 74.5784543,22 86.4692035,22 C97.5666382,22 103.428795,29.8432146 101.701641,42.000493 L101.178412,45.6864292 L73.5917941,45.6864292 C73.9077247,50.1572784 76.9045802,53.0583015 81.5020177,53.0583015 C85.3858707,53.0583015 88.2810703,51.0979909 90.6410816,48.4316529 L98.1068097,54.4703562 Z"
                        id="Fill-267"
                      />
                      <path
                        d="M134.423811,37.6864292 C135.060656,33.7648219 132.436537,30.4703562 128.156024,30.4703562 C122.923733,30.4703562 119.569087,33.999507 118.727934,37.6864292 L134.423811,37.6864292 Z M142.106808,54.4703562 C137.622983,59.2557624 130.970499,62 124.787425,62 C112.89667,62 104.498095,54.1567854 106.225249,42.000493 C107.951407,29.8432146 118.57844,22 130.469195,22 C141.566636,22 147.428795,29.8432146 145.701641,42.000493 L145.178412,45.6864292 L117.591779,45.6864292 C117.908707,50.1572784 120.904567,53.0583015 125.502007,53.0583015 C129.386859,53.0583015 132.281063,51.0979909 134.641076,48.4316529 L142.106808,54.4703562 Z"
                        id="Fill-268"
                      />
                      <path
                        d="M170.122464,51.6771149 C176.017946,51.6771149 180.107035,47.7514244 180.91339,42.0203308 C181.719745,36.2882501 178.735441,32.3635466 172.839959,32.3635466 C166.945465,32.3635466 162.855388,36.2882501 162.050021,42.0203308 C161.242678,47.7514244 164.22797,51.6771149 170.122464,51.6771149 L170.122464,51.6771149 Z M153.887653,22.9416919 L164.733918,22.9416919 L164.027369,27.966023 L164.18449,27.966023 C166.37825,25.218928 171.390299,22 176.734377,22 C188.052991,22 194.371415,30.1652784 192.747835,41.7054464 C191.255683,52.3058966 183.284034,62.0416486 172.436782,62.0416486 C167.564066,62.0416486 163.193345,60.7061044 161.040101,57.0163304 L160.88298,57.0163304 L157.789976,79 L146,79 L153.887653,22.9416919 Z"
                        id="Fill-269"
                      />
                    </g>
                  </g>
                </svg> */}
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
                <a
                  href="#"
                  title="Overzicht inhurende organisaties binnen de overheid"
                  className="text-lg leading-6 font-medium focus:outline-none transition ease-in-out duration-150 light-link color-link"
                >
                  Inhurende organisaties
                </a>{" "}
                <NavLink
                  to="/over-freep"
                  title="Werk Voor Oranje helpt interim professionals binnen de overheid"
                  className="text-lg leading-6 font-medium focus:outline-none transition ease-in-out duration-150 light-link color-link"
                >
                  Over feep
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
                    title="Word gratis lid van Werk Voor Oranje"
                    className="whitespace-no-wrap inline-flex items-center justify-center px-4 py-3 border border-transparent text-base leading-6 font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
                  >
                    Word lid
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
          <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-50  scale-95 duration-100 ease-out">
            <div className="rounded-lg shadow-lg">
              <div className="rounded-lg shadow-xs bg-white divide-y-2 divide-gray-100">
                <div className="pt-5 pb-6 px-5 space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <NavLink
                        to="/"
                        title="terug naar de freep begingpagina"
                        className="flex text-indigo-900 nuxt-link-exact-active nuxt-link-active"
                        aria-current="page"
                      >
                        <svg
                          viewBox="0 0 193 79"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          className="h-10 md:h-12 w-auto"
                        >
                          <g
                            id="Page-1"
                            stroke="none"
                            strokeWidth={1}
                            fill="none"
                            fillRule="evenodd"
                          >
                            <g id="Group" fill="currentColor">
                              <path
                                d="M7.78795812,31.929984 L0,31.929984 L1.32716696,22.3984219 L9.11413613,22.3984219 L10.0655032,15.5680516 C11.2374055,7.14892119 14.3555556,0 27.1772542,0 C29.5368819,0 31.8747528,0.158776152 34,0.714991979 L32.0458406,10.8027699 C30.7740547,10.3254428 29.7178592,10.0078905 28.301687,10.0078905 C24.5258871,10.0078905 22.472833,11.1992109 21.7647469,16.2830436 L20.9132635,22.3984219 L29.6446771,22.3984219 L28.3184991,31.929984 L19.5870855,31.929984 L15.5413031,61 L3.74217568,61 L7.78795812,31.929984 Z"
                                id="Fill-265"
                              />
                              <path
                                d="M36.314422,22.9393083 L47.9850217,22.9393083 L47.1320536,29.0477657 L47.2885615,29.0477657 C50.4226325,24.4270386 54.0291618,22 59.1645779,22 C60.4870698,22 61.9543315,22.0777834 63,22.3908861 L61.5024149,33.1200707 C59.933423,32.6504166 58.3438895,32.3373138 56.6320841,32.3373138 C47.7619979,32.3373138 45.951397,37.5054784 44.8910558,45.1026508 L42.6705997,61 L31,61 L36.314422,22.9393083 Z"
                                id="Fill-266"
                              />
                              <path
                                d="M90.423817,37.6864292 C91.0596646,33.7648219 88.436544,30.4703562 84.1560337,30.4703562 C78.9237453,30.4703562 75.5691009,33.999507 74.7279482,37.6864292 L90.423817,37.6864292 Z M98.1068097,54.4703562 C93.621991,59.2557624 86.9705066,62 80.7874366,62 C68.8956907,62 60.4981168,54.1567854 62.2252703,42.000493 C63.9514272,29.8432146 74.5784543,22 86.4692035,22 C97.5666382,22 103.428795,29.8432146 101.701641,42.000493 L101.178412,45.6864292 L73.5917941,45.6864292 C73.9077247,50.1572784 76.9045802,53.0583015 81.5020177,53.0583015 C85.3858707,53.0583015 88.2810703,51.0979909 90.6410816,48.4316529 L98.1068097,54.4703562 Z"
                                id="Fill-267"
                              />
                              <path
                                d="M134.423811,37.6864292 C135.060656,33.7648219 132.436537,30.4703562 128.156024,30.4703562 C122.923733,30.4703562 119.569087,33.999507 118.727934,37.6864292 L134.423811,37.6864292 Z M142.106808,54.4703562 C137.622983,59.2557624 130.970499,62 124.787425,62 C112.89667,62 104.498095,54.1567854 106.225249,42.000493 C107.951407,29.8432146 118.57844,22 130.469195,22 C141.566636,22 147.428795,29.8432146 145.701641,42.000493 L145.178412,45.6864292 L117.591779,45.6864292 C117.908707,50.1572784 120.904567,53.0583015 125.502007,53.0583015 C129.386859,53.0583015 132.281063,51.0979909 134.641076,48.4316529 L142.106808,54.4703562 Z"
                                id="Fill-268"
                              />
                              <path
                                d="M170.122464,51.6771149 C176.017946,51.6771149 180.107035,47.7514244 180.91339,42.0203308 C181.719745,36.2882501 178.735441,32.3635466 172.839959,32.3635466 C166.945465,32.3635466 162.855388,36.2882501 162.050021,42.0203308 C161.242678,47.7514244 164.22797,51.6771149 170.122464,51.6771149 L170.122464,51.6771149 Z M153.887653,22.9416919 L164.733918,22.9416919 L164.027369,27.966023 L164.18449,27.966023 C166.37825,25.218928 171.390299,22 176.734377,22 C188.052991,22 194.371415,30.1652784 192.747835,41.7054464 C191.255683,52.3058966 183.284034,62.0416486 172.436782,62.0416486 C167.564066,62.0416486 163.193345,60.7061044 161.040101,57.0163304 L160.88298,57.0163304 L157.789976,79 L146,79 L153.887653,22.9416919 Z"
                                id="Fill-269"
                              />
                            </g>
                          </g>
                        </svg>
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
                            {/**/} {/**/} {/**/} {/**/} {/**/} {/**/}{" "}
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
                            {/**/} {/**/} {/**/} {/**/}
                          </div>
                        </div>
                        <div className="text-base leading-6 font-medium text-gray-900">
                          Alle opdrachten
                        </div>
                      </NavLink>{" "}
                      <NavLink
                        to="/over-freep"
                        title="Werk Voor Oranje helpt interim professionals binnen de overheid"
                        className="-m-3 p-3 flex items-center space-x-4 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150"
                      >
                        <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white">
                          <div>
                            {/**/} {/**/} {/**/} {/**/} {/**/} {/**/} {/**/}{" "}
                            {/**/}
                            {/**/}{" "}
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
                            {/**/}
                          </div>
                        </div>
                        <div className="text-base leading-6 font-medium text-gray-900">
                          Over feep
                        </div>
                      </NavLink>{" "}
                      <NavLink
                        to="/detachering"
                        title="Werk Voor Oranje detachering binnen de overheid"
                        className="-m-3 p-3 flex items-center space-x-4 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150"
                      >
                        <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white">
                          <div>
                            {/**/} {/**/} {/**/} {/**/} {/**/} {/**/} {/**/}{" "}
                            {/**/}
                            {/**/} {/**/}{" "}
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
                      <a
                        href="/interim-opdrachten-statistiek"
                        className="-m-3 p-3 flex items-center space-x-4 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150"
                      >
                        <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white">
                          <div>
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
                                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                              ></path>
                            </svg>{" "}
                            {/**/} {/**/} {/**/} {/**/} {/**/} {/**/} {/**/}
                            {/**/} {/**/} {/**/}
                          </div>
                        </div>
                        <div className="text-base leading-6 font-medium text-gray-900">
                          Interim opdrachten statistiek
                        </div>
                      </a>
                      <a
                        href="#"
                        className="-m-3 p-3 flex items-center space-x-4 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150"
                      >
                        <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white">
                          <div>
                            {/**/}{" "}
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
                                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                              ></path>
                            </svg>{" "}
                            {/**/} {/**/} {/**/} {/**/} {/**/} {/**/} {/**/}
                            {/**/} {/**/}
                          </div>
                        </div>
                        <div className="text-base leading-6 font-medium text-gray-900">
                          Inhurende organisaties
                        </div>
                      </a>
                    </nav>
                  </div>
                </div>
                <div className="px-5 space-y-6">
                  <div className="space-y-6 py-8" style={{ display: "" }}>
                    <span className="w-full flex rounded-md shadow-sm">
                      <a
                        href="/account/registreren"
                        title="word gratis lid van Werk Voor Oranje"
                        className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
                      >
                        Word lid
                      </a>
                    </span>
                    <p className="text-center text-base leading-6 font-medium text-gray-500">
                      Ben je al lid?
                      <a
                        href="/account/inloggen"
                        title="inloggen op je Werk Voor Oranje account"
                        className="text-indigo-600 hover:text-indigo-500 transition ease-in-out duration-150"
                      >
                        Inloggen
                      </a>
                    </p>
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
                      defaultValue
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
                  {/**/}{" "}
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
            <h1>Subscribe to our newsletter</h1>
            <input type="email" placeholder="example@email.com" />
            <button>Subscribe</button>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default Header;
