import React, { useState } from "react";
import Eye from "../../Assets/img/17.svg";
const OurService = () => {
  const [firstStep, setfirstStep] = useState(true);
  const [secondStep, setsecondStep] = useState(false);
  const [thirdStep, setthirdStep] = useState(false);
  let openSecond = () => {
    setfirstStep(false);
    setsecondStep(true);
    setthirdStep(false);
  };
  let openFirst = () => {
    setfirstStep(true);
    setsecondStep(false);
    setthirdStep(false);
  };
  let openThird = () => {
    setfirstStep(false);
    setsecondStep(false);
    setthirdStep(true);
  };
  return (
    <div className="relative overflow-hidden bg-gray-100 pb-12" data-v-1d5ee227>
      <div className="max-w-7xl mx-auto mt-8 md:mt-12 px-2 md:px-0">
        <section>
          <div className="relative px-4 sm:px-6 lg:px-8">
            <div className="text-lg max-w-prose mb-6">
              <p className="text-base leading-6 text-indigo-800 font-semibold tracking-wide uppercase">
                {" "}
                Zo werkt onze dienstverlening
              </p>
            </div>{" "}
            <nav>
              <ul className="border border-gray-300 rounded-t-lg divide-y divide-gray-300 md:flex md:divide-y-0 bg-white">
                <li onClick={openFirst} className="relative md:flex-1 md:flex">
                  <a
                    className={
                      firstStep
                        ? "px-6 py-4 flex items-center text-sm leading-5 font-medium space-x-4 cursor-pointer text-indigo-600 group-hover:text-indigo-600"
                        : "px-6 py-4 flex items-center text-sm leading-5 font-medium space-x-4 cursor-pointer text-gray-500 group-hover:text-indigo-600"
                    }
                  >
                    <div
                      className={
                        firstStep
                          ? "flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 rounded-full transition ease-in-out duration-150 border-indigo-600"
                          : "flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 rounded-full transition ease-in-out duration-150 border-gray-500"
                      }
                    >
                      <p>01</p>
                    </div>{" "}
                    <p className="text-sm leading-5 font-medium">
                      Reageer op een opdracht
                    </p>
                  </a>{" "}
                  <div className="hidden md:block absolute top-0 right-0 h-full w-5">
                    <svg
                      viewBox="0 0 22 80"
                      fill="none"
                      preserveAspectRatio="none"
                      className="h-full w-full text-gray-400"
                    >
                      <path
                        d="M0 -2L20 40L0 82"
                        vectorEffect="non-scaling-stroke"
                        stroke="currentcolor"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </li>{" "}
                <li onClick={openSecond} className="relative md:flex-1 md:flex">
                  <a
                    className={
                      secondStep
                        ? "group flex items-center cursor-pointer text-indigo-600  group-hover:text-indigo-600"
                        : "group flex items-center cursor-pointer text-gray-500 group-hover:text-indigo-600"
                    }
                  >
                    <div className="px-6 py-4 flex items-center text-sm leading-5 font-medium space-x-4">
                      <div
                        className={
                          secondStep
                            ? "flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 rounded-full transition ease-in-out duration-150 border-indigo-600"
                            : "flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 rounded-full transition ease-in-out duration-150 border-gray-500"
                        }
                      >
                        <span className="transition ease-in-out duration-150">
                          02
                        </span>
                      </div>{" "}
                      <p className="text-sm leading-5 font-medium transition ease-in-out duration-150">
                        Introductie opdrachtgever
                      </p>
                    </div>
                  </a>{" "}
                  <div className="hidden md:block absolute top-0 right-0 h-full w-5">
                    <svg
                      viewBox="0 0 22 80"
                      fill="none"
                      preserveAspectRatio="none"
                      className="h-full w-full text-gray-400"
                    >
                      <path
                        d="M0 -2L20 40L0 82"
                        vectorEffect="non-scaling-stroke"
                        stroke="currentcolor"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </li>{" "}
                <li onClick={openThird} className="relative md:flex-1 md:flex">
                  <a
                    className={
                      thirdStep
                        ? "group flex items-center cursor-pointer text-indigo-600   group-hover:text-indigo-600"
                        : "group flex items-center cursor-pointer text-gray-500 group-hover:text-indigo-600"
                    }
                  >
                    <div className="px-6 py-4 flex items-center text-sm leading-5 font-medium space-x-4">
                      <div
                        className={
                          thirdStep
                            ? "flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 rounded-full transition ease-in-out duration-150 border-indigo-600"
                            : "flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 rounded-full transition ease-in-out duration-150 border-gray-500"
                        }
                      >
                        <span className="transition ease-in-out duration-150">
                          03
                        </span>
                      </div>{" "}
                      <p className="text-sm leading-5 font-medium  transition ease-in-out duration-150">
                        Aan de slag
                      </p>
                    </div>
                  </a>
                </li>
              </ul>
            </nav>{" "}
            <div className="bg-white">
              <div className="max-w-screen-xl mx-auto">
                {/* step 1 */}
                {firstStep && (
                  <div className="bg-indigo-700 rounded-b-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
                    <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
                      <div className="lg:self-center">
                        <h2 className="text-3xl leading-9 font-extrabold text-white sm:text-4xl sm:leading-10">
                          <span className="block">
                            Binnen 1 werkdag reactie
                          </span>
                        </h2>{" "}
                        <div className="mt-4 text-base leading-6 text-indigo-200">
                          <ul className="list-disc pl-4 space-y-2">
                            <li>
                              We beoordelen je CV om te zien of er een match is.
                            </li>{" "}
                            <li>
                              We controleren of je voldoet aan de eisen en
                              wensen.
                            </li>{" "}
                            <li>
                              We onderzoeken op basis van data of je gewenste
                              tarief concurrerend is.
                            </li>
                          </ul>{" "}
                          <p className="mt-4">
                            Omdat het proces verloopt via een aanbesteding is
                            het belangrijk dat je een goede kans maakt om de
                            opdracht te winnen. Bij een match starten we het
                            offertetraject, bij twijfel laten we dit binnen 1
                            werkdag weten.
                          </p>
                        </div>
                      </div>
                    </div>{" "}
                    <div className="relative">
                      <img
                        src={Eye}
                        alt="snel reactie"
                        className="absolute w-full object-cover ls-is-cached lazyloaded"
                      />
                    </div>
                  </div>
                )}
                {/* step 1 */}
                {/* step 2 */}

                {secondStep && (
                  <div className="bg-indigo-700 rounded-b-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
                    <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
                      <div className="lg:self-center">
                        <h2 className="text-3xl leading-9 font-extrabold text-white sm:text-4xl sm:leading-10">
                          <span className="block">Introductie</span>
                        </h2>{" "}
                        <div className="mt-4 text-base leading-6 text-indigo-200">
                          <p className="mt-4">
                            De procedure verloopt via een aanbesteding. De
                            eerste introductie doen wij daarom op papier.
                          </p>{" "}
                          <ul className="list-disc pl-4 mt-4 space-y-2">
                            <li>
                              We werken samen een offerte uit waarin we
                              toelichten waarom jouw profiel aansluit op de
                              gestelde eisen en wensen.
                            </li>{" "}
                            <li>
                              We verzamelen de benodigde stukken indien gevraagd
                              zoals referenties, diploma's, motivatiebrief, VOG
                              etc...
                            </li>{" "}
                            <li>
                              Op basis van data bepalen we een kansrijk
                              uurtarief voor de offerte. Jij hebt zelf
                              natuurlijk het laatste woord in het
                              biedingstarief.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>{" "}
                    <div className="relative ">
                      <img
                        src={Eye}
                        alt="Introductie bij de opdrachtgever"
                        className="absolute w-full object-cover ls-is-cached lazyloaded"
                      />
                    </div>
                  </div>
                )}
                {/* step 2 */}
                {/* step 3*/}
                {thirdStep && (
                  <div className="bg-indigo-700 rounded-b-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-5 lg:gap-4">
                    <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20 col-span-3">
                      <div className="lg:self-center">
                        <h2 className="text-3xl leading-9 font-extrabold text-white sm:text-4xl sm:leading-10">
                          <span className="block">Aan de slag</span>
                        </h2>{" "}
                        <div className="mt-4 text-base leading-6 text-indigo-200">
                          <p className="mt-4">
                            Wij houden van eerlijk en transparant zaken doen.
                            Als je aan slag gaat via Werk Voor Oranje hanteren
                            we de volgende voorwaarden:
                          </p>{" "}
                          <ul className="list-disc pl-4 mt-4 space-y-2">
                            <li>
                              We vragen 10% marge over je uurtarief voor de duur
                              van de opdracht.
                            </li>{" "}
                            <li>
                              We betalen je factuur binnen 16 dagen, je hoeft
                              dus niet op je geld te wachten!
                            </li>{" "}
                            <li>
                              Als jij je opdracht goed doet en daardoor bij de
                              dezelfde opdrachtgever een nieuwe opdracht mag
                              doen dan ben je daar volledig vrij in! We hanteren
                              geen concurrentie-/ relatiebeding.
                            </li>
                          </ul>
                        </div>{" "}
                        {/**/}
                      </div>
                    </div>{" "}
                    <div className="relative col-span-2">
                      <img
                        src={Eye}
                        alt="aan de slag bij Werk Voor Oranje"
                        className="absolute w-full object-cover mt-4 lazyloaded"
                      />
                    </div>
                  </div>
                )}

                {/* step 3*/}
              </div>
            </div>{" "}
            {/**/}
          </div>
        </section>
      </div>
    </div>
  );
};

export default OurService;
