import React from "react";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="hidden lg:block w-96 bg-transparent h-full border-t border-b border-r border-gray-300  ">
      <div className="block text-base text-gray-500 p-4">
        <NavLink
          to="/"
          className="flex items-center justify-end space-x-2  nuxt-link-active"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>{" "}
          <p>filters aanpassen</p>{" "}
          <p className="font-semibold">(549 opdrachten)</p>
        </NavLink>
      </div>{" "}
      <div className="hidden lg:block w-full mx-auto">
        <div className="p-2  bg-indigo-600 ">
          <div className="flex items-center justify-between">
            <div className="flex p-2 rounded-lg bg-indigo-800 mr-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6  text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </div>{" "}
            <div className="flex-shrink-0">
              <form className="sm:flex">
                <label htmlFor="email-address" className="sr-only">
                  E-mailadres
                </label>{" "}
                <input
                  id="emailalert"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required="required"
                  placeholder="Je e-mailadres"
                  defaultValue
                  className="mr-1 text-sm w-full px-4 py-2 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-600 sm:max-w-xs border-gray-300 rounded-md"
                />{" "}
                <div className="mt-3 rounded-md shadow sm:mt-0  sm:flex-shrink-0">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center px-3 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-100"
                  >
                    Activeer alert
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>{" "}
      <nav aria-label="Directory" className="flex-1 min-h-0 overflow-y-auto">
        <div className="bg-gray-50  overflow-hidden ">
          <ul className="divide-y divide-gray-200">
            <li>
              <a
                href="/opdracht/projectleider-herijken-crisisorganisatie-ghor-hollands-midden"
                className="block hover:bg-gray-100 text-blue-900"
              >
                <div className="px-4 py-4 flex items-center sm:px-6">
                  <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                    <div>
                      <div className="flex text-lg">
                        <p className="font-medium break-words">
                          Projectleider herijken crisisorganisatie ghor hollands
                          midden
                        </p>
                      </div>{" "}
                      <div className=" text-sm text-gray-500">Hecht</div>
                    </div>
                  </div>{" "}
                  <div className="ml-5 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-5 w-5 text-gray-400"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a
                href="/opdracht/manager-team-maatschappelijke-ontwikkeling"
                className="block hover:bg-gray-100 text-blue-900"
              >
                <div className="px-4 py-4 flex items-center sm:px-6">
                  <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                    <div>
                      <div className="flex text-lg">
                        <p className="font-medium break-words">
                          Manager team maatschappelijke ontwikkeling
                        </p>
                      </div>{" "}
                      <div className=" text-sm text-gray-500">
                        Gemeente Waalwijk
                      </div>
                    </div>
                  </div>{" "}
                  <div className="ml-5 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-5 w-5 text-gray-400"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a
                href="/opdracht/securitypentest-analist"
                className="block hover:bg-gray-100 text-blue-900"
              >
                <div className="px-4 py-4 flex items-center sm:px-6">
                  <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                    <div>
                      <div className="flex text-lg">
                        <p className="font-medium break-words">
                          Security/pentest analist
                        </p>
                      </div>{" "}
                      <div className=" text-sm text-gray-500">
                        Kamer van Koophandel
                      </div>
                    </div>
                  </div>{" "}
                  <div className="ml-5 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-5 w-5 text-gray-400"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a
                href="/opdracht/projectleider-ict-aanbestedingstraject"
                className="block hover:bg-gray-100 text-blue-900"
              >
                <div className="px-4 py-4 flex items-center sm:px-6">
                  <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                    <div>
                      <div className="flex text-lg">
                        <p className="font-medium break-words">
                          Projectleider ict aanbestedingstraject
                        </p>
                      </div>{" "}
                      <div className=" text-sm text-gray-500">
                        Gemeente Brummen
                      </div>
                    </div>
                  </div>{" "}
                  <div className="ml-5 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-5 w-5 text-gray-400"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a
                href="/opdracht/communicatieadviseur-participatie-1"
                className="block hover:bg-gray-100 text-blue-900"
              >
                <div className="px-4 py-4 flex items-center sm:px-6">
                  <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                    <div>
                      <div className="flex text-lg">
                        <p className="font-medium break-words">
                          Communicatieadviseur participatie
                        </p>
                      </div>{" "}
                      <div className=" text-sm text-gray-500">
                        Gemeente Arnhem
                      </div>
                    </div>
                  </div>{" "}
                  <div className="ml-5 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-5 w-5 text-gray-400"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a
                href="/opdracht/communicatieadviseur-duurzaamheid-5"
                className="block hover:bg-gray-100 text-blue-900"
              >
                <div className="px-4 py-4 flex items-center sm:px-6">
                  <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                    <div>
                      <div className="flex text-lg">
                        <p className="font-medium break-words">
                          Communicatieadviseur duurzaamheid
                        </p>
                      </div>{" "}
                      <div className=" text-sm text-gray-500">
                        Gemeente Arnhem
                      </div>
                    </div>
                  </div>{" "}
                  <div className="ml-5 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-5 w-5 text-gray-400"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a
                href="/opdracht/projectadviseur-topografie"
                className="block hover:bg-gray-100 text-blue-900"
              >
                <div className="px-4 py-4 flex items-center sm:px-6">
                  <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                    <div>
                      <div className="flex text-lg">
                        <p className="font-medium break-words">
                          Projectadviseur topografie
                        </p>
                      </div>{" "}
                      <div className=" text-sm text-gray-500">Het Kadaster</div>
                    </div>
                  </div>{" "}
                  <div className="ml-5 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-5 w-5 text-gray-400"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a
                href="/opdracht/medewerker-juridische-ondersteuning-omgevingswet"
                className="block hover:bg-gray-100 text-blue-900"
              >
                <div className="px-4 py-4 flex items-center sm:px-6">
                  <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                    <div>
                      <div className="flex text-lg">
                        <p className="font-medium break-words">
                          Medewerker juridische ondersteuning omgevingswet
                        </p>
                      </div>{" "}
                      <div className=" text-sm text-gray-500">
                        Gemeente Roosendaal
                      </div>
                    </div>
                  </div>{" "}
                  <div className="ml-5 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-5 w-5 text-gray-400"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a
                href="/opdracht/projectleider-aanbesteding-catering"
                className="block hover:bg-gray-100 text-blue-900"
              >
                <div className="px-4 py-4 flex items-center sm:px-6">
                  <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                    <div>
                      <div className="flex text-lg">
                        <p className="font-medium break-words">
                          Projectleider aanbesteding catering
                        </p>
                      </div>{" "}
                      <div className=" text-sm text-gray-500">
                        Gemeente Rotterdam
                      </div>
                    </div>
                  </div>{" "}
                  <div className="ml-5 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-5 w-5 text-gray-400"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a
                href="/opdracht/teamleider-milieu-1"
                className="block hover:bg-gray-100 text-blue-900"
              >
                <div className="px-4 py-4 flex items-center sm:px-6">
                  <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                    <div>
                      <div className="flex text-lg">
                        <p className="font-medium break-words">
                          Teamleider milieu
                        </p>
                      </div>{" "}
                      <div className=" text-sm text-gray-500">ODWH</div>
                    </div>
                  </div>{" "}
                  <div className="ml-5 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-5 w-5 text-gray-400"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </nav>{" "}
      <div className="m-4 mt-0">
        <nav className="border-t border-gray-200 px-4 flex items-center justify-between sm:px-0">
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

export default SideBar;
