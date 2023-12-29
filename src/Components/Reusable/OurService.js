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
              <div className="max-w-screen-xl mx-auto steps">
                {/* step 1 */}
                {firstStep && (
                  <div className="bg-indigo-700 rounded-b-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
                    <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
                      <div className="lg:self-center">
                        <h2 className="text-3xl leading-9 font-extrabold text-white sm:text-4xl sm:leading-10">
                          <span className="block">Binnen 24 uur reactie</span>
                        </h2>{" "}
                        <div className="mt-4 text-base leading-6 text-indigo-200">
                          <ul className="list-disc pl-4 space-y-2">
                            <li>
                              Binnen 24 uur mag je een reactie van ons
                              verwachten om te beoordelen of jouw profiel
                              voldoet aan de eisen van de betreffende opdracht.
                              Als er een match is, nemen we contact met je op om
                              de vervolgstappen te bespreken. Aangezien het om
                              een aanbesteding gaat, streven we ernaar om jouw
                              kansen te optimaliseren door gezamenlijk het
                              traject te doorlopen.
                            </li>{" "}
                            <li>
                              Als wij van mening zijn dat je niet volledig
                              aansluit bij de opdracht, gaan we alsnog het
                              gesprek met je aan. We kijken samen naar eventuele
                              aandachtspunten en gaan actief op zoek naar
                              opdrachten die beter aansluiten bij jouw
                              vaardigheden en ervaring. Ons doel is om jouw
                              professionele groei te bevorderen, zelfs als de
                              huidige opdracht niet de perfecte match blijkt te
                              zijn.
                            </li>{" "}
                          </ul>{" "}
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
                          <span className="block">Procedure aanbesteding</span>
                        </h2>{" "}
                        <div className="mt-4 text-base leading-6 text-indigo-200">
                          <p className="mt-4">
                            Nu is het jouw beurt om te schitteren.
                          </p>{" "}
                          <ul className="list-disc pl-4 mt-4 space-y-2">
                            <li>
                              Als enige kandidaat die we voordragen, vragen we
                              je om beschikbaar te blijven voor de opdracht. We
                              willen de opdrachtgever niet teleurstellen, en
                              jouw inzet en beschikbaarheid zijn hierbij
                              cruciaal. We streven naar transparantie gedurende
                              het hele proces.
                            </li>{" "}
                            <li>
                              Omdat de procedure verloopt via een aanbesteding,
                              beginnen we met een papieren introductie. Samen
                              met jou werken we een gedegen offerte uit waarin
                              we duidelijk toelichten waarom jouw profiel
                              perfect aansluit op de gestelde eisen en wensen.
                            </li>{" "}
                            <li>
                              Op basis van data bepalen we samen een kansrijk
                              uurtarief voor de offerte. Uiteraard heb jij
                              hierin het laatste woord, want jouw tevredenheid
                              en vertrouwen zijn van het grootste belang.
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
                          <span className="block">Van start gaan</span>
                        </h2>{" "}
                        <div className="mt-4 text-base leading-6 text-indigo-200">
                          <p className="mt-4">
                            Tijd om aan de slag te gaan! Met het afronden van de
                            aanmeldingsfase is de eerste stap gezet. Gedurende
                            het gehele traject van de opdracht blijven wij in
                            contact om ervoor te zorgen dat alles naar wens
                            verloopt. Aarzel niet om contact met ons op te nemen
                            als je vragen hebt of advies nodig hebt.
                          </p>{" "}
                          <p className="mt-4">
                            Na afloop van de opdracht ben je vrij om te
                            verlengen. Als verlenging geen optie is, staan wij
                            klaar om je te ondersteunen bij het vinden van de
                            meest geschikte vervolgopdracht die perfect aansluit
                            bij jouw vaardigheden en ambities. Bij Werk voor
                            Oranje gaat het niet alleen om het afronden van
                            opdrachten, maar om het bouwen van een duurzame
                            relatie en het faciliteren van jouw succes op de
                            lange termijn.
                          </p>{" "}
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
