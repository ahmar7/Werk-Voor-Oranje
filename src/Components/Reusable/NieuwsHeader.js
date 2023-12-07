import React from "react";
import { NavLink } from "react-router-dom";

const NieuwsHeader = (props) => {
  return (
    <div className="max-w-7xl container flex flex-no-wrap mx-auto  justify-between py-4 px-4 md:px-12">
      <div className="relative">
        <div className="relative max-w-screen-xl mx-auto py-4 ">
          <nav aria-label="Breadcrumb" className="flex">
            <ol className="flex items-center space-x-4">
              <li>
                <div>
                  <NavLink
                    to="/"
                    className="text-gray-500 hover:text-gray-700 nuxt-link-active"
                    aria-label="terug naar de beginpagina"
                  >
                    <svg
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="flex-shrink-0 h-5 w-5 transition duration-150 ease-in-out"
                    >
                      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                    </svg>
                  </NavLink>{" "}
                  <span className="sr-only">Home</span>
                </div>
              </li>{" "}
              <li>
                <div className="flex items-center space-x-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    className="flex-shrink-0 h-5 w-5 text-gray-300"
                  >
                    <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                  </svg>{" "}
                  <NavLink
                    to="/nieuws"
                    className="text-base leading-5 font-medium text-gray-500 hover:text-gray-700 transition duration-150 ease-in-out nuxt-link-active"
                    aria-label="terug naar het overzicht"
                  >
                    Nieuws
                  </NavLink>
                </div>
              </li>{" "}
              <li>
                <div className="hidden md:flex items-center space-x-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    className="flex-shrink-0 h-5 w-5 text-gray-300"
                  >
                    <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                  </svg>{" "}
                  <span
                    aria-current="page"
                    className="text-base leading-5 font-medium text-gray-500 hover:text-gray-700 transition duration-150 ease-in-out truncate"
                  >
                    {props.blogName}
                  </span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </div>{" "}
      <div className="hidden lg:flex items-center justify-between" />
    </div>
  );
};

export default NieuwsHeader;
