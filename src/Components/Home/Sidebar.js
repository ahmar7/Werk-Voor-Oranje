import React from "react";

const Sidebar = () => {
  return (
    <div
      className="bg-transparent h-full  border-t border-b border-r border-gray-300 rounded-br-xl rounded-tr-xl "
      data-v-4d4e8e34
    >
      <div
        className="hidden lg:block text-base text-gray-500 p-4"
        data-v-4d4e8e34
      >
        <div
          className="flex items-center justify-end space-x-1 px-2 "
          data-v-4d4e8e34
        >
          <p className="font-semibold" data-v-4d4e8e34>
            630
          </p>
          <p data-v-4d4e8e34>interim opdrachten gevonden</p>
        </div>
      </div>
      <div className="hidden lg:block w-full mx-auto" data-v-4d4e8e34>
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
                ></path>
              </svg>
            </div>
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
                  className="mr-1 text-sm w-full px-4 py-2 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-600 sm:max-w-xs border-gray-300 rounded-md"
                />
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
      </div>
      <section className="w-full xl:w-1/4 h-full" data-v-4d4e8e34>
        <div className="hidden" />
        <form className="lg:h-full lg:flex lg:flex-col lg:justify-between hidden">
          <div className="lg:hidden bg-white  flex justify-between px-4 py-3 fixed w-80 shadow">
            <div className="text-lg text-indigo-900">Filter</div>
            <div className="text-indigo-900">
              <svg
                width={24}
                height={24}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
          <div className="px-4 lg:pl-0 py-4 text-gray-500 opacity-100  bg-white md:bg-transparent w-80 mt-8 lg:mt-0 lg:ml-8 ml-0">
            <h2 className="sr-only">Filter interim opdrachten</h2>
            <div className="my-4 lg:mb-0 ">
              <input
                type="search"
                placeholder="Zoeken ..."
                aria-label="zoek opdrachten"
                className="hidden lg:block w-full border border-gray-300 bg-white focus:outline-none focus:bg-white focus:border-gray-300  rounded-xl py-3 px-4"
              />
            </div>
            <div className="lg:mt-6 mb-4 border-0 block">
              <span className="block text-sm font-semibold ">Segment</span>
              <div className="sm:flex sm:-mx-2 sm:flex-wrap">
                <div className="w-full">
                  <div className="mt-3 flex items-center sm:px-2">
                    <input
                      id="ICT Informatievoorziening"
                      type="checkbox"
                      name="ICT Informatievoorziening"
                      defaultValue="ICT Informatievoorziening"
                      className="form-checkbox h-5 w-5 flex-shrink-0 bg-white border border-gray-300"
                    />
                    <label
                      htmlFor="ICT Informatievoorziening"
                      className="ml-2 text-sm truncate"
                    >
                      ICT Informatievoorziening (103)
                    </label>
                  </div>
                </div>
                <div className="w-full">
                  <div className="mt-3 flex items-center sm:px-2">
                    <input
                      id="Algemeen-projectmanagement"
                      type="checkbox"
                      name="Algemeen-projectmanagement"
                      defaultValue="Algemeen-projectmanagement"
                      className="form-checkbox h-5 w-5 flex-shrink-0 bg-white border border-gray-300"
                    />
                    <label
                      htmlFor="Algemeen-projectmanagement"
                      className="ml-2 text-sm truncate"
                    >
                      Algemeen-projectmanagement (94)
                    </label>
                  </div>
                </div>
                <div className="w-full">
                  <div className="mt-3 flex items-center sm:px-2">
                    <input
                      id="Beleid- en adviesdiensten"
                      type="checkbox"
                      name="Beleid- en adviesdiensten"
                      defaultValue="Beleid- en adviesdiensten"
                      className="form-checkbox h-5 w-5 flex-shrink-0 bg-white border border-gray-300"
                    />
                    <label
                      htmlFor="Beleid- en adviesdiensten"
                      className="ml-2 text-sm truncate"
                    >
                      Beleid- en adviesdiensten (65)
                    </label>
                  </div>
                </div>
                <div className="w-full">
                  <div className="mt-3 flex items-center sm:px-2">
                    <input
                      id="Bouwkunde Civiele techniek"
                      type="checkbox"
                      name="Bouwkunde Civiele techniek"
                      defaultValue="Bouwkunde Civiele techniek"
                      className="form-checkbox h-5 w-5 flex-shrink-0 bg-white border border-gray-300"
                    />
                    <label
                      htmlFor="Bouwkunde Civiele techniek"
                      className="ml-2 text-sm truncate"
                    >
                      Bouwkunde Civiele techniek (41)
                    </label>
                  </div>
                </div>
                <div className="w-full">
                  <div className="mt-3 flex items-center sm:px-2">
                    <input
                      id="Ruimtelijke ontwikkeling"
                      type="checkbox"
                      name="Ruimtelijke ontwikkeling"
                      defaultValue="Ruimtelijke ontwikkeling"
                      className="form-checkbox h-5 w-5 flex-shrink-0 bg-white border border-gray-300"
                    />
                    <label
                      htmlFor="Ruimtelijke ontwikkeling"
                      className="ml-2 text-sm truncate"
                    >
                      Ruimtelijke ontwikkeling (40)
                    </label>
                  </div>
                </div>
                <div className="w-full">
                  <div className="mt-3 flex items-center sm:px-2">
                    <input
                      id="Personeel en Organisatie"
                      type="checkbox"
                      name="Personeel en Organisatie"
                      defaultValue="Personeel en Organisatie"
                      className="form-checkbox h-5 w-5 flex-shrink-0 bg-white border border-gray-300"
                    />
                    <label
                      htmlFor="Personeel en Organisatie"
                      className="ml-2 text-sm truncate"
                    >
                      Personeel en Organisatie (33)
                    </label>
                  </div>
                </div>
                <div className="w-full">
                  <div className="mt-3 flex items-center sm:px-2">
                    <input
                      id="Juridisch"
                      type="checkbox"
                      name="Juridisch"
                      defaultValue="Juridisch"
                      className="form-checkbox h-5 w-5 flex-shrink-0 bg-white border border-gray-300"
                    />
                    <label
                      htmlFor="Juridisch"
                      className="ml-2 text-sm truncate"
                    >
                      Juridisch (32)
                    </label>
                  </div>
                </div>
                <div className="w-full">
                  <div className="mt-3 flex items-center sm:px-2">
                    <input
                      id="Financieel Economisch"
                      type="checkbox"
                      name="Financieel Economisch"
                      defaultValue="Financieel Economisch"
                      className="form-checkbox h-5 w-5 flex-shrink-0 bg-white border border-gray-300"
                    />
                    <label
                      htmlFor="Financieel Economisch"
                      className="ml-2 text-sm truncate"
                    >
                      Financieel Economisch (28)
                    </label>
                  </div>
                </div>
                <div className="w-full">
                  <div className="mt-3 flex items-center sm:px-2">
                    <input
                      id="Openbare orde en veiligheid"
                      type="checkbox"
                      name="Openbare orde en veiligheid"
                      defaultValue="Openbare orde en veiligheid"
                      className="form-checkbox h-5 w-5 flex-shrink-0 bg-white border border-gray-300"
                    />
                    <label
                      htmlFor="Openbare orde en veiligheid"
                      className="ml-2 text-sm truncate"
                    >
                      Openbare orde en veiligheid (24)
                    </label>
                  </div>
                </div>
                <div className="w-full">
                  <div className="mt-3 flex items-center sm:px-2">
                    <input
                      id="Administratief Secretarieel"
                      type="checkbox"
                      name="Administratief Secretarieel"
                      defaultValue="Administratief Secretarieel"
                      className="form-checkbox h-5 w-5 flex-shrink-0 bg-white border border-gray-300"
                    />
                    <label
                      htmlFor="Administratief Secretarieel"
                      className="ml-2 text-sm truncate"
                    >
                      Administratief Secretarieel (23)
                    </label>
                  </div>
                </div>
                <div className="w-full">
                  <div className="mt-3 flex items-center sm:px-2">
                    <input
                      id="Voorlichting en Communicatie"
                      type="checkbox"
                      name="Voorlichting en Communicatie"
                      defaultValue="Voorlichting en Communicatie"
                      className="form-checkbox h-5 w-5 flex-shrink-0 bg-white border border-gray-300"
                    />
                    <label
                      htmlFor="Voorlichting en Communicatie"
                      className="ml-2 text-sm truncate"
                    >
                      Voorlichting en Communicatie (22)
                    </label>
                  </div>
                </div>
                <div className="w-full" style={{ display: "none" }}>
                  <div className="mt-3 flex items-center sm:px-2">
                    <input
                      id="Omgevingsdiensten"
                      type="checkbox"
                      name="Omgevingsdiensten"
                      defaultValue="Omgevingsdiensten"
                      className="form-checkbox h-5 w-5 flex-shrink-0 bg-white border border-gray-300"
                    />
                    <label
                      htmlFor="Omgevingsdiensten"
                      className="ml-2 text-sm truncate"
                    >
                      Omgevingsdiensten (19)
                    </label>
                  </div>
                </div>
                <div className="w-full" style={{ display: "none" }}>
                  <div className="mt-3 flex items-center sm:px-2">
                    <input
                      id="Participatie en Werk"
                      type="checkbox"
                      name="Participatie en Werk"
                      defaultValue="Participatie en Werk"
                      className="form-checkbox h-5 w-5 flex-shrink-0 bg-white border border-gray-300"
                    />
                    <label
                      htmlFor="Participatie en Werk"
                      className="ml-2 text-sm truncate"
                    >
                      Participatie en Werk (19)
                    </label>
                  </div>
                </div>
                <div className="w-full" style={{ display: "none" }}>
                  <div className="mt-3 flex items-center sm:px-2">
                    <input
                      id="Inkoop"
                      type="checkbox"
                      name="Inkoop"
                      defaultValue="Inkoop"
                      className="form-checkbox h-5 w-5 flex-shrink-0 bg-white border border-gray-300"
                    />
                    <label htmlFor="Inkoop" className="ml-2 text-sm truncate">
                      Inkoop (17)
                    </label>
                  </div>
                </div>
                <div className="w-full" style={{ display: "none" }}>
                  <div className="mt-3 flex items-center sm:px-2">
                    <input
                      id="Burgerzaken en Receptiebalies"
                      type="checkbox"
                      name="Burgerzaken en Receptiebalies"
                      defaultValue="Burgerzaken en Receptiebalies"
                      className="form-checkbox h-5 w-5 flex-shrink-0 bg-white border border-gray-300"
                    />
                    <label
                      htmlFor="Burgerzaken en Receptiebalies"
                      className="ml-2 text-sm truncate"
                    >
                      Burgerzaken en Receptiebalies (13)
                    </label>
                  </div>
                </div>
                <div className="w-full" style={{ display: "none" }}>
                  <div className="mt-3 flex items-center sm:px-2">
                    <input
                      id="Zorg en Welzijn"
                      type="checkbox"
                      name="Zorg en Welzijn"
                      defaultValue="Zorg en Welzijn"
                      className="form-checkbox h-5 w-5 flex-shrink-0 bg-white border border-gray-300"
                    />
                    <label
                      htmlFor="Zorg en Welzijn"
                      className="ml-2 text-sm truncate"
                    >
                      Zorg en Welzijn (12)
                    </label>
                  </div>
                </div>
                <div className="w-full" style={{ display: "none" }}>
                  <div className="mt-3 flex items-center sm:px-2">
                    <input
                      id="Verkeer vervoer nautisch"
                      type="checkbox"
                      name="Verkeer vervoer nautisch"
                      defaultValue="Verkeer vervoer nautisch"
                      className="form-checkbox h-5 w-5 flex-shrink-0 bg-white border border-gray-300"
                    />
                    <label
                      htmlFor="Verkeer vervoer nautisch"
                      className="ml-2 text-sm truncate"
                    >
                      Verkeer vervoer nautisch (11)
                    </label>
                  </div>
                </div>
                <div className="w-full" style={{ display: "none" }}>
                  <div className="mt-3 flex items-center sm:px-2">
                    <input
                      id="Directie"
                      type="checkbox"
                      name="Directie"
                      defaultValue="Directie"
                      className="form-checkbox h-5 w-5 flex-shrink-0 bg-white border border-gray-300"
                    />
                    <label htmlFor="Directie" className="ml-2 text-sm truncate">
                      Directie (9)
                    </label>
                  </div>
                </div>
                <div className="w-full" style={{ display: "none" }}>
                  <div className="mt-3 flex items-center sm:px-2">
                    <input
                      id="Facilitaire dienstverlening"
                      type="checkbox"
                      name="Facilitaire dienstverlening"
                      defaultValue="Facilitaire dienstverlening"
                      className="form-checkbox h-5 w-5 flex-shrink-0 bg-white border border-gray-300"
                    />
                    <label
                      htmlFor="Facilitaire dienstverlening"
                      className="ml-2 text-sm truncate"
                    >
                      Facilitaire dienstverlening (8)
                    </label>
                  </div>
                </div>
                <div className="w-full" style={{ display: "none" }}>
                  <div className="mt-3 flex items-center sm:px-2">
                    <input
                      id="Buitendienst"
                      type="checkbox"
                      name="Buitendienst"
                      defaultValue="Buitendienst"
                      className="form-checkbox h-5 w-5 flex-shrink-0 bg-white border border-gray-300"
                    />
                    <label
                      htmlFor="Buitendienst"
                      className="ml-2 text-sm truncate"
                    >
                      Buitendienst (6)
                    </label>
                  </div>
                </div>
              </div>
              <div className="pl-8 pt-2 underline text-xs">toon meer</div>
            </div>
            <div className="lg:mt-6 mb-4 border-0 block">
              <span className="block text-sm font-semibold ">Provincie</span>
              <div className="sm:flex sm:-mx-2 sm:flex-wrap">
                <div className="w-full">
                  <div className="mt-3 flex items-center sm:px-2">
                    <input
                      id="Noord-Holland"
                      type="checkbox"
                      name="Noord-Holland"
                      defaultValue="Noord-Holland"
                      className="form-checkbox h-5 w-5 flex-shrink-0 bg-white border border-gray-300"
                    />
                    <label
                      htmlFor="Noord-Holland"
                      className="ml-2 text-sm truncate"
                    >
                      Noord-Holland (125)
                    </label>
                  </div>
                </div>
                <div className="w-full">
                  <div className="mt-3 flex items-center sm:px-2">
                    <input
                      id="Utrecht"
                      type="checkbox"
                      name="Utrecht"
                      defaultValue="Utrecht"
                      className="form-checkbox h-5 w-5 flex-shrink-0 bg-white border border-gray-300"
                    />
                    <label htmlFor="Utrecht" className="ml-2 text-sm truncate">
                      Utrecht (105)
                    </label>
                  </div>
                </div>
                <div className="w-full">
                  <div className="mt-3 flex items-center sm:px-2">
                    <input
                      id="Zuid-Holland"
                      type="checkbox"
                      name="Zuid-Holland"
                      defaultValue="Zuid-Holland"
                      className="form-checkbox h-5 w-5 flex-shrink-0 bg-white border border-gray-300"
                    />
                    <label
                      htmlFor="Zuid-Holland"
                      className="ml-2 text-sm truncate"
                    >
                      Zuid-Holland (105)
                    </label>
                  </div>
                </div>
                <div className="w-full">
                  <div className="mt-3 flex items-center sm:px-2">
                    <input
                      id="Noord-Brabant"
                      type="checkbox"
                      name="Noord-Brabant"
                      defaultValue="Noord-Brabant"
                      className="form-checkbox h-5 w-5 flex-shrink-0 bg-white border border-gray-300"
                    />
                    <label
                      htmlFor="Noord-Brabant"
                      className="ml-2 text-sm truncate"
                    >
                      Noord-Brabant (92)
                    </label>
                  </div>
                </div>
                <div className="w-full">
                  <div className="mt-3 flex items-center sm:px-2">
                    <input
                      id="Gelderland"
                      type="checkbox"
                      name="Gelderland"
                      defaultValue="Gelderland"
                      className="form-checkbox h-5 w-5 flex-shrink-0 bg-white border border-gray-300"
                    />
                    <label
                      htmlFor="Gelderland"
                      className="ml-2 text-sm truncate"
                    >
                      Gelderland (72)
                    </label>
                  </div>
                </div>
                <div className="w-full">
                  <div className="mt-3 flex items-center sm:px-2">
                    <input
                      id="Overijssel"
                      type="checkbox"
                      name="Overijssel"
                      defaultValue="Overijssel"
                      className="form-checkbox h-5 w-5 flex-shrink-0 bg-white border border-gray-300"
                    />
                    <label
                      htmlFor="Overijssel"
                      className="ml-2 text-sm truncate"
                    >
                      Overijssel (50)
                    </label>
                  </div>
                </div>
                <div className="w-full">
                  <div className="mt-3 flex items-center sm:px-2">
                    <input
                      id="Zeeland"
                      type="checkbox"
                      name="Zeeland"
                      defaultValue="Zeeland"
                      className="form-checkbox h-5 w-5 flex-shrink-0 bg-white border border-gray-300"
                    />
                    <label htmlFor="Zeeland" className="ml-2 text-sm truncate">
                      Zeeland (29)
                    </label>
                  </div>
                </div>
                <div className="w-full">
                  <div className="mt-3 flex items-center sm:px-2">
                    <input
                      id="Friesland"
                      type="checkbox"
                      name="Friesland"
                      defaultValue="Friesland"
                      className="form-checkbox h-5 w-5 flex-shrink-0 bg-white border border-gray-300"
                    />
                    <label
                      htmlFor="Friesland"
                      className="ml-2 text-sm truncate"
                    >
                      Friesland (22)
                    </label>
                  </div>
                </div>
                <div className="w-full">
                  <div className="mt-3 flex items-center sm:px-2">
                    <input
                      id="Groningen"
                      type="checkbox"
                      name="Groningen"
                      defaultValue="Groningen"
                      className="form-checkbox h-5 w-5 flex-shrink-0 bg-white border border-gray-300"
                    />
                    <label
                      htmlFor="Groningen"
                      className="ml-2 text-sm truncate"
                    >
                      Groningen (15)
                    </label>
                  </div>
                </div>
                <div className="w-full">
                  <div className="mt-3 flex items-center sm:px-2">
                    <input
                      id="Flevoland"
                      type="checkbox"
                      name="Flevoland"
                      defaultValue="Flevoland"
                      className="form-checkbox h-5 w-5 flex-shrink-0 bg-white border border-gray-300"
                    />
                    <label
                      htmlFor="Flevoland"
                      className="ml-2 text-sm truncate"
                    >
                      Flevoland (9)
                    </label>
                  </div>
                </div>
                <div className="w-full">
                  <div className="mt-3 flex items-center sm:px-2">
                    <input
                      id="Drenthe"
                      type="checkbox"
                      name="Drenthe"
                      defaultValue="Drenthe"
                      className="form-checkbox h-5 w-5 flex-shrink-0 bg-white border border-gray-300"
                    />
                    <label htmlFor="Drenthe" className="ml-2 text-sm truncate">
                      Drenthe (6)
                    </label>
                  </div>
                </div>
              </div>
              <div className="pl-8 pt-2 underline text-xs">toon meer</div>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Sidebar;
