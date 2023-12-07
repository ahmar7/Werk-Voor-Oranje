import React from "react";
import SideBar from "./SideBar";

const Body = () => {
  return (
    <div className="container max-w-screen-xl flex flex-wrap mt-0 lg:mt-8 mb-20 mx-auto  md:px-12">
      <SideBar />
      <div className="relative  py-16 px-4 sm:px-6 lg:px-16 min-w-0 max-w-5xl flex-1  border-t border-b border-r rounded-r-md border-gray-200 bg-white">
        <div className="relative w-full px-2 lg:px-0 ">
          <div className="flex sm:hidden pt-12 px-0 pb-8 lg:pb-0 lg:px-8 bg-white lg:flex-shrink-0">
            <img
              src="https://freepapi-assets.s3.amazonaws.com/media/logos/25/gemeente_waalwijk.png"
              alt="Gemeente Waalwijk"
              className="relative h-16  object-scale-down lazyloaded"
            />
          </div>{" "}
          <div className="flex-1">
            <div className="flex justify-between">
              <div>
                <h1 className="text-2xl leading-8 font-extrabold text-indigo-900 sm:text-2xl sm:leading-9">
                  Administratief medewerker
                </h1>{" "}
                <p className="mt-2 text-base leading-6 text-gray-600">
                  Gemeente Waalwijk
                </p>
              </div>{" "}
              <div className="hidden sm:flex">
                <img
                  src="https://freepapi-assets.s3.amazonaws.com/media/logos/25/gemeente_waalwijk.png"
                  alt="Gemeente Waalwijk"
                  className="relative h-16 w-full object-scale-down lazyloaded"
                />
              </div>
            </div>{" "}
            <div className="flex justify-between">
              <div>
                <ul className="mt-8 lg:grid lg:grid-cols-3 lg:gap-x-12 lg:gap-y-5">
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
                        />
                      </svg>
                    </div>{" "}
                    <p className="ml-3 text-sm leading-5 text-gray-700">
                      max € 70 per uur
                    </p>{" "}
                    {/**/}
                  </li>{" "}
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
                        />{" "}
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>{" "}
                    <p className="ml-3 text-sm leading-5 text-gray-700">
                      Noord-Brabant
                    </p>
                  </li>{" "}
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
                        />
                      </svg>
                    </div>{" "}
                    <p className="ml-3 text-sm leading-5 text-gray-700">
                      24 uur per week
                    </p>{" "}
                    {/**/}
                  </li>{" "}
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
                          d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                        />
                      </svg>
                    </div>{" "}
                    <a
                      href="#"
                      title="Alle freelance opdrachten binnen Administratief Secretarieel"
                      className="ml-3 text-sm leading-5 text-gray-700 truncate"
                    >
                      Administratief Secretarieel
                    </a>
                  </li>{" "}
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
                          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                        />{" "}
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>{" "}
                    <p className="ml-3 text-sm leading-5 text-gray-700">
                      01 februari 2024
                    </p>
                  </li>{" "}
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
                          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />{" "}
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z"
                        />
                      </svg>
                    </div>{" "}
                    <p className="ml-3 text-sm leading-5 text-gray-700">
                      31 januari 2025
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>{" "}
        <section className="relative my-12">
          <div className="flex items-center">
            <h2 className="flex-shrink-0 pr-4 bg-white text-base leading-5 tracking-wider font-semibold uppercase text-indigo-600">
              De opdrachtomschrijving
            </h2>{" "}
            <div className="flex-1 border-t-2 border-gray-200" /> {/**/}{" "}
            <span className="hidden lg:inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-50 text-green-800">
              freelance
            </span>
          </div>{" "}
          <div className="mt-8 prose-base text-gray-500">
            <span>
              <h3>Opdrachtomschrijving</h3>
              <p>
                Team Beheer Openbare Ruimte en Vastgoed kenmerkt zich als
                enthousiast en gezellig team waar collectief en nauw met elkaar
                wordt samengewerkt om de openbare ruimte verder te ontwikkelen,
                verduurzamen en op orde te houden. Het team bestaat uit ca. 20
                medewerkers die zich inzetten voor openbaar groen, kabels,
                leidingen en riolering, inrichting van de wegen, openbare
                verlichting, gemeentelijk vastgoed, speeltuinen, parkeren en
                GEO-informatie. Wij bieden een interessante, veelzijdige en
                afwisselende functie in een dynamische gemeente.
                <br />
                <br />
                <br />
                In deze veelzijdige nieuwe tijdelijke rol als administratief
                medewerker ben je de spin in het web binnen ons solide technisch
                georiënteerd team TORV. Wij zoeken voor deze rol een doener met
                lef die goed kan schakelen. Geen dag is hetzelfde door het
                gevarieerde takenpakket bij ons bruisende team!
                <strong>
                  <br />
                </strong>
              </p>
              <ul>
                <li>
                  <strong>Projectondersteuning en&nbsp;</strong>
                  <strong>Communicatie</strong>
                  <ul>
                    <li>
                      Je biedt administratieve ondersteuning bij projecten,
                      waaronder het bijhouden van projectmappen en communicatie.
                    </li>
                    <li>
                      Je verzamelt essentiële informatie op verzoek van de
                      (senior) medewerkers en houdt voortgangs- en
                      capaciteitsplanningen bij.
                    </li>
                    <li>
                      Urenverantwoordingen en facturering vallen onder jouw
                      aandacht om de financiële voortgang te waarborgen. Je
                      codeert en administreert de facturen.
                    </li>
                    <li>
                      Je verzorgt doeltreffende correspondentie voor de
                      projectleiding, zoals bewonersbrieven en opleverstukken.
                    </li>
                    <li>
                      Het bewaken van bankgaranties en het signaleren van
                      mogelijkheden en knelpunten zijn onderdeel van je
                      proactieve aanpak.
                    </li>
                    <li>
                      Je onderhoudt contact met leveranciers, aannemers,
                      etc.&nbsp;
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Administratieve&nbsp;</strong>
                  <strong>Efficiëntie</strong>
                  <ul>
                    <li>
                      Je registreert en archiveert belangrijke stukken voor een
                      gestroomlijnde documentatie.
                    </li>
                    <li>
                      Het verstrekken van gegevens en overzichten uit
                      administraties is een van je kernverantwoordelijkheden.
                    </li>
                    <li>
                      Je zorgt voor een vlotte afhandeling van diverse
                      administratieve taken ter ondersteuning van het team.
                      Houdt daarbij InProcess (zaaksysteem) op orde.
                    </li>
                    <li>
                      Behandelt en verdeeld de Fixi meldingen (meldingen van
                      burgers/ondernemers)
                    </li>
                    <li>
                      Ondersteuning bij het beheer van abonnementen en
                      contracten valt binnen jouw takenpakket om een soepele
                      zaakgerichte werking te garanderen.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Secretariële&nbsp;</strong>
                  <strong>Ondersteuning</strong>
                  <ul>
                    <li>
                      Het organiseren van afspraken en praktische,
                      organisatorische taken behoren tot jouw taakgebied.
                    </li>
                    <li>
                      Standaard correspondenties worden door jou met precisie
                      verzorgd.
                    </li>
                  </ul>
                </li>
              </ul>
              <ul>
                <li>
                  <strong>Vergaderingen&nbsp;</strong>
                  <strong>en&nbsp;</strong>
                  <strong>Notulering</strong>
                  <ul>
                    <li>
                      Als notulist zorg je voor nauwkeurige verslaglegging van
                      vergaderingen.
                    </li>
                  </ul>
                </li>
              </ul>
              <p>
                <br />
                <br />
              </p>
              <h3>Kandidaatomschrijving</h3>
              <p>Gewenste competenties;</p>
              <ul>
                <li>
                  Je hebt goede communicatieve vaardigheden zowel mondeling als
                  schriftelijk
                </li>
                <li>Je werkt accuraat</li>
              </ul>
              <p>&nbsp;</p>
            </span>
          </div>
        </section>{" "}
        <section className="mb-8">
          <div className="space-y-8">
            <div className="py-4 px-8 text-gray-700 bg-indigo-100 border-l-2 border-indigo-800 mb-4">
              <p>
                Deze inhuuropdracht verloopt via een aanbesteding. De
                opdrachtgever heeft eisen en wensen opgegeven. Aan de eisen
                <span className="underline">moet</span> je voldoen om kans te
                maken. Op de wensen kun je punten scoren.
              </p>
            </div>{" "}
            {/**/}{" "}
            <h4 className="flex-shrink-0 pr-4 bg-white text-base leading-5 tracking-wider font-semibold text-indigo-600">
              De Eisen
            </h4>
          </div>{" "}
          <ul>
            <li>
              <div className="block   border-b border-gray-200">
                <div className="px-4 py-4 sm:px-0">
                  <div className="flex items-center justify-between">
                    <div className="text-base leading-5  text-gray-500">
                      Werkervaring 1 De kandidaat heeft recente aantoonbare
                      meerjarige ervaring als administratief medewerker. Arceer
                      het antwoord met de kleur groen.
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="block   border-b border-gray-200">
                <div className="px-4 py-4 sm:px-0">
                  <div className="flex items-center justify-between">
                    <div className="text-base leading-5  text-gray-500">
                      Werkervaring 2 De kandidaat heeft relevante ervaring met
                      facturering. Arceer het antwoord met de kleur geel.
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="block   border-b border-gray-200">
                <div className="px-4 py-4 sm:px-0">
                  <div className="flex items-center justify-between">
                    <div className="text-base leading-5  text-gray-500">
                      Werkervaring 3 De kandidaat heeft enige ervaring met
                      projectmatig werken. Arceer het antwoord met de kleur
                      blauw.
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </section>{" "}
        <section>
          <div className="flex items-center">
            <h4 className="flex-shrink-0 pr-4 bg-white text-base leading-5 tracking-wider font-semibold  text-indigo-600">
              De Wensen
            </h4>
          </div>{" "}
          <ul>
            <li>
              <div className="block  border-b border-gray-200">
                <div className="px-4 py-4 sm:px-0">
                  <div className="flex items-center justify-between">
                    <div className="text-base leading-5  text-gray-500">
                      Werkervaring 1 Toon met je cv aan dat je meer dan 5 jaar
                      ervaring met administratief werk.
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="block  border-b border-gray-200">
                <div className="px-4 py-4 sm:px-0">
                  <div className="flex items-center justify-between">
                    <div className="text-base leading-5  text-gray-500">
                      Werkervaring 2 Je hebt ervaring met het afhandelen en
                      coderen van facturen.
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="block  border-b border-gray-200">
                <div className="px-4 py-4 sm:px-0">
                  <div className="flex items-center justify-between">
                    <div className="text-base leading-5  text-gray-500">
                      Werkervaring 3 Je hebt ervaring met (beheer- en
                      onderhouds-) contracten in een technische omgeving.
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="block  border-b border-gray-200">
                <div className="px-4 py-4 sm:px-0">
                  <div className="flex items-center justify-between">
                    <div className="text-base leading-5  text-gray-500">
                      Interview Bij deze opdracht worden na de eerste
                      selectieronde met een aantal partijen interviews
                      afgenomen. Deze wegen mee in de uiteindelijke beoordeling.
                      Deze interviews worden beoordeeld volgens de hieronder
                      aangegeven criteria. Bij deze opdracht worden na de eerste
                      selectieronde met een aantal partijen interviews
                      afgenomen. Deze wegen mee in de uiteindelijke beoordeling.
                      Deze interviews worden beoordeeld volgens de hieronder
                      aangegeven criteria. Tijdens het interview zal worden
                      getoetst op werkervaring (zie onderstaande onderwerpen),
                      kennis en affiniteit met de uit te voeren opdracht.
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="block  border-b border-gray-200">
                <div className="px-4 py-4 sm:px-0">
                  <div className="flex items-center justify-between">
                    <div className="text-base leading-5  text-gray-500">
                      Werkervaring 4 Wanneer je ervaring hebt als administratief
                      medewerker (bij voorkeur binnen een beheerorganisatie
                      zoals een gemeente c.q. corporatie is dat een pré. Arceer
                      het antwoord.
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </section>{" "}
        <section className="relative my-8 ">
          <div className="mt-12 mb-4">
            <h2 className="font-semibold text-indigo-600">
              Interesse in deze opdracht?
            </h2>{" "}
            <p className="mt-2 text-2xl font-bold tracking-tight text-gray-800 ">
              Zo werkt onze dienstverlening
            </p>
          </div>{" "}
          <nav aria-label="Progress">
            <ol role="list" className="overflow-hidden">
              <li className="relative pb-10">
                <div
                  aria-hidden="true"
                  className="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-indigo-600"
                />{" "}
                <div className="relative flex items-start group">
                  <span className="h-9 flex items-center">
                    <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-indigo-600 text-white rounded-full group-hover:bg-indigo-800">
                      1
                    </span>
                  </span>{" "}
                  <div className="ml-4 mt-1 min-w-0 flex flex-col">
                    <span className="text-base font-semibold tracking-wide uppercase text-indigo-600">
                      Binnen 1 werkdag reactie
                    </span>{" "}
                    <div className="mt-4 text-base leading-6 text-gray-500">
                      <ul className="list-disc pl-4 space-y-2">
                        <li>
                          We beoordelen je CV om te zien of er een match is.
                        </li>{" "}
                        <li>
                          We controleren of je voldoet aan de eisen en wensen.
                        </li>{" "}
                        <li>
                          We onderzoeken op basis van data of je gewenste tarief
                          concurrerend is.
                        </li>
                      </ul>{" "}
                      <p className="mt-4">
                        Omdat het proces verloopt via een aanbesteding is het
                        belangrijk dat je een goede kans maakt om de opdracht te
                        winnen. Bij een match starten we het offertetraject, bij
                        twijfel laten we dit binnen 1 werkdag weten.
                      </p>
                    </div>
                  </div>
                </div>
              </li>{" "}
              <li className="relative pb-10">
                <div
                  aria-hidden="true"
                  className="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-gray-300"
                />{" "}
                <div className="relative flex items-start group">
                  <span className="h-9 flex items-center">
                    <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-indigo-600 text-white rounded-full group-hover:bg-indigo-800">
                      2
                    </span>
                  </span>{" "}
                  <div className="ml-4 mt-1 min-w-0 flex flex-col">
                    <span className="text-base font-semibold tracking-wide uppercase text-indigo-600">
                      Introductie bij de opdrachtgever
                    </span>{" "}
                    <div className="mt-4 text-base leading-6 text-gray-500">
                      <p className="mt-0">
                        De procedure verloopt via een aanbesteding. De eerste
                        introductie doen wij daarom op papier.
                      </p>{" "}
                      <ul className="list-disc pl-4 mt-4 space-y-2">
                        <li>
                          We werken samen een offerte uit waarin we toelichten
                          waarom jouw profiel aansluit op de gestelde eisen en
                          wensen.
                        </li>{" "}
                        <li>
                          We verzamelen de benodigde stukken indien gevraagd
                          zoals referenties, diploma's, motivatiebrief, VOG
                          etc...
                        </li>{" "}
                        <li>
                          Op basis van data bepalen we een kansrijk uurtarief
                          voor de offerte. Jij hebt zelf natuurlijk het laatste
                          woord in het biedingstarief.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>{" "}
              {/**/}{" "}
              <li className="relative pb-10">
                <div
                  aria-hidden="true"
                  className="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-gray-300"
                />{" "}
                <div className="relative flex items-start group">
                  <span className="h-9 flex items-center">
                    <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-indigo-600 text-white rounded-full group-hover:bg-indigo-800">
                      3
                    </span>
                  </span>{" "}
                  <span className="ml-4 mt-1 min-w-0 flex flex-col">
                    <span className="text-base font-semibold tracking-wide uppercase text-indigo-600">
                      Aan de slag
                    </span>{" "}
                    <div className="mt-4 text-base leading-6 text-gray-500">
                      <p className="mt-0">
                        Wij houden van eerlijk en transparant zaken doen.
                        <br />
                        Als je aan slag gaat via Werk Voor Oranje hanteren we de
                        volgende voorwaarden:
                      </p>{" "}
                      <ul className="list-disc pl-4 mt-4 space-y-2">
                        <li>
                          We vragen 10% marge over je uurtarief voor de duur van
                          de opdracht.
                        </li>{" "}
                        <li>
                          We betalen je factuur binnen 16 dagen, je hoeft dus
                          niet op je geld te wachten!
                        </li>{" "}
                        <li>
                          Als jij je opdracht goed doet en daardoor bij de
                          dezelfde opdrachtgever een nieuwe opdracht mag doen
                          dan ben je daar volledig vrij in! We hanteren geen
                          concurrentie-/ relatiebeding.
                        </li>
                      </ul>
                    </div>
                  </span>
                </div>
              </li>{" "}
              <li className="relative ">
                <div
                  aria-hidden="true"
                  className="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-gray-300"
                />{" "}
                <div className="relative flex items-start group">
                  <span className="h-10 flex items-center">
                    <span className="relative z-10 w-10 h-10 flex items-center justify-center bg-indigo-600 text-white rounded-full group-hover:bg-indigo-800">
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
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                  </span>
                </div>
              </li>
            </ol>
          </nav>
        </section>{" "}
        <div className="mt-4 lg:ml-16 lg:-mt-20" style={{ display: "" }}>
          <form
            encType="multipart/form-data"
            className="
    box
    pt-2
    pb-4
    px-6
    sm:px-6
    lg:pb-16 lg:px-0 lg:row-start-1 lg:col-start-1
  "
            data-v-da5d488c
          >
            <section aria-labelledby="contact-info-heading" data-v-da5d488c>
              <h2
                id="contact-info-heading"
                className="text-2xl font-medium text-indigo-700 mb-4"
                data-v-da5d488c
              >
                Reageer direct
              </h2>{" "}
              <div
                className="
        py-4
        px-8
        text-gray-700
        bg-indigo-100
        border-l-2 border-indigo-800
        mb-4
      "
                data-v-da5d488c
              >
                <p
                  className="text-sm font-medium text-gray-500 truncate"
                  data-v-da5d488c
                >
                  De opdracht sluit
                </p>{" "}
                <p
                  className="text-base font-semibold text-gray-900"
                  data-v-da5d488c
                >
                  14 december 2023 om 13:00
                </p>{" "}
                <p
                  className="text-sm font-medium text-gray-500"
                  data-v-da5d488c
                >
                  Je reactie ontvangen we graag{" "}
                  <b data-v-da5d488c>minimaal 1 werkdag</b> voor sluiting van de
                  opdracht
                </p>
              </div>{" "}
              {/**/} {/**/}{" "}
              <div className="mb-4" data-v-da5d488c>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-bold text-gray-700"
                  data-v-da5d488c
                >
                  Voor- en achternaam
                </label>{" "}
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Volledige naam"
                  defaultValue
                  className="
          w-full
          px-3
          py-3
          text-sm
          leading-tight
          text-gray-700
          border
          rounded
          shadow
          appearance-none
          focus:outline-none focus:shadow-outline
        "
                  data-v-da5d488c
                />
              </div>{" "}
              <div className="mb-4" data-v-da5d488c>
                <label
                  htmlFor="emailadres"
                  className="block mb-2 text-sm font-bold text-gray-700"
                  data-v-da5d488c
                >
                  E-mailadres
                </label>{" "}
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="E-mailadres"
                  defaultValue
                  className="
          w-full
          px-3
          py-3
          text-sm
          leading-tight
          text-gray-700
          border
          rounded
          shadow
          appearance-none
          focus:outline-none focus:shadow-outline
        "
                  data-v-da5d488c
                />
              </div>{" "}
              <div className="mb-4" data-v-da5d488c>
                <label
                  htmlFor="phonenumber"
                  className="block mb-2 text-sm font-bold text-gray-700"
                  data-v-da5d488c
                >
                  Telefoonnummer
                </label>{" "}
                <input
                  id="phonenumber"
                  type="text"
                  name="phonenumber"
                  placeholder="Telefoonnummer"
                  defaultValue
                  className="
          w-full
          px-3
          py-3
          text-sm
          leading-tight
          text-gray-700
          border
          rounded
          shadow
          appearance-none
          focus:outline-none focus:shadow-outline
        "
                  data-v-da5d488c
                />
              </div>{" "}
              <div className="mb-4" data-v-da5d488c>
                <label
                  htmlFor="file"
                  className="block mb-2 text-sm font-bold text-gray-700"
                  data-v-da5d488c
                >
                  Actueel CV (type: .doc / .docx / .pdf)
                </label>{" "}
                <input
                  id="file"
                  type="file"
                  name="file"
                  className="
          w-full
          px-3
          py-2
          text-sm
          leading-tight
          text-gray-700
          border
          
          rounded
          shadow
          appearance-none
          focus:outline-none focus:shadow-outline
        "
                  data-v-da5d488c
                />{" "}
                <label
                  htmlFor="file"
                  className="block my-2 text-sm text-gray-600"
                  data-v-da5d488c
                >
                  Eventuele motivatie volgt in een latere fase
                </label>
              </div>{" "}
              <div className="mb-4" data-v-da5d488c>
                <label
                  htmlFor="rate"
                  className="block mb-2 text-sm font-bold text-gray-700"
                  data-v-da5d488c
                >
                  Bied mij aan bij de opdrachtgever voor onderstaand uurtarief
                  <span data-v-da5d488c>(max € 70)</span>
                </label>{" "}
                <input
                  id="rate"
                  type="number"
                  name="rate"
                  placeholder="Geheel getal"
                  defaultValue
                  className="
          w-full
          px-3
          py-3
          text-sm
          leading-tight
          text-gray-700
          border
          rounded
          shadow
          appearance-none
          focus:outline-none focus:shadow-outline
        "
                  data-v-da5d488c
                />{" "}
                <label
                  htmlFor="rate"
                  className="block my-2 text-sm text-gray-600"
                  data-v-da5d488c
                >
                  LET OP: Het door jou opgegeven uurtarief is all in, inclusief
                  10% fee Werk Voor Oranje en exclusief BTW
                </label>{" "}
                {/**/}
              </div>{" "}
              <div className="mb-4  bg-blue-50 p-4" data-v-da5d488c>
                <div className="flex" data-v-da5d488c>
                  <div className="flex-shrink-0" data-v-da5d488c>
                    <input
                      id="check"
                      name="check"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      data-v-da5d488c
                    />
                  </div>{" "}
                  <div className="ml-3" data-v-da5d488c>
                    <p
                      className="text-sm text-blue-700 font-semibold"
                      data-v-da5d488c
                    >
                      Akkoord geen bemiddelaar / bureau
                    </p>{" "}
                    <p className="text-sm text-blue-700" data-v-da5d488c>
                      Om de inhuurketen kort en transparant te houden kiezen wij
                      ervoor om alleen direct met de zelfstandige te schakelen
                      en niet met bemiddelende partijen.
                    </p>
                  </div>
                </div>
              </div>{" "}
              <div className="mt-6" data-v-da5d488c>
                <button
                  type="button"
                  className="
          group
          relative
          w-full
          flex
          justify-center
          py-4
          px-4
          border border-transparent
          leading-5
          font-bold
          rounded-full
          text-white
          bg-indigo-600
          hover:bg-indigo-500
          focus:outline-none
          focus:border-indigo-700
          focus:shadow-outline-indigo
          active:bg-indigo-700
          transition
          duration-150
          ease-in-out
        "
                  data-v-da5d488c
                >
                  Plaats reactie
                  {/**/}
                </button>{" "}
                {/**/}
              </div>
            </section>
          </form>
        </div>{" "}
        <div className="mt-6 lg:ml-16 lg:-mt-20" style={{ display: "none" }}>
          <div className="rounded-md bg-red-50 p-4 mt-2">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-5 w-5 text-red-400"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>{" "}
              <div className="ml-3">
                <h3 className="text-sm font-medium text-red-800">
                  Deze opdracht is gesloten, reageren is helaas niet meer
                  mogelijk
                </h3>
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="hidden md:block fixed bottom-0 right-0 inset-x-96 pb-2 sm:pb-5 z-50">
          <div className="max-w-2xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="p-2 rounded-lg bg-green-200 shadow-lg sm:p-3">
              <div className="flex items-center justify-between flex-wrap">
                <div className="w-0 flex-1 flex items-center">
                  <p className="ml-3 font-medium text-green-900 truncate">
                    <span className="md:hidden">
                      Heb je interesse in deze opdracht?
                    </span>{" "}
                    <span className="hidden md:inline">
                      Heb je interesse in deze opdracht?
                    </span>
                  </p>
                </div>{" "}
                <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-3 sm:mt-0 sm:w-auto flex items-center justify-between">
                  <div className="mr-6 flex items-center justify-between space-x-4">
                    {/**/}{" "}
                    <a
                      href="#"
                      aria-label="bewaren"
                      className=" text-gray-400 hover:text-gray-600 focus:outline-none"
                    >
                      <svg
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 mr-2"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12 4.915c1.09-1.28 2.76-2.09 4.5-2.09 3.08 0 5.5 2.42 5.5 5.5 0 3.777-3.394 6.855-8.537 11.518l-.013.012-1.45 1.32-1.45-1.31-.04-.036C5.384 15.17 2 12.095 2 8.325c0-3.08 2.42-5.5 5.5-5.5 1.74 0 3.41.81 4.5 2.09zm0 13.56l.1-.1c4.76-4.31 7.9-7.16 7.9-10.05 0-2-1.5-3.5-3.5-3.5-1.54 0-3.04.99-3.56 2.36h-1.87c-.53-1.37-2.03-2.36-3.57-2.36-2 0-3.5 1.5-3.5 3.5 0 2.89 3.14 5.74 7.9 10.05l.1.1z"
                          fill="currentColor"
                        />
                      </svg>
                    </a>{" "}
                    <button
                      aria-label="hulp nodig?"
                      className=" text-gray-400 hover:text-gray-600 focus:outline-none"
                    >
                      <svg
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 mr-2"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M16.04 16.89c.52-.47 1.2-.77 1.96-.77 1.61 0 2.92 1.31 2.92 2.92 0 1.61-1.31 2.92-2.92 2.92-1.61 0-2.92-1.31-2.92-2.92 0-.22.03-.44.08-.65l-7.12-4.16c-.54.5-1.25.81-2.04.81-1.66 0-3-1.34-3-3s1.34-3 3-3c.79 0 1.5.31 2.04.81l7.05-4.11c-.05-.23-.09-.46-.09-.7 0-1.66 1.34-3 3-3s3 1.34 3 3-1.34 3-3 3c-.79 0-1.5-.31-2.04-.81l-7.05 4.11c.05.23.09.46.09.7 0 .24-.04.47-.09.7l7.13 4.15zM19 5.04c0-.55-.45-1-1-1s-1 .45-1 1 .45 1 1 1 1-.45 1-1zm-13 8c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm11 6.02c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1z"
                          fill="currentColor"
                        />
                      </svg>
                    </button>
                  </div>{" "}
                  <div className="rounded-md shadow-sm">
                    <a
                      href="#"
                      className="flex items-center justify-center px-6 py-3 border border-transparent text-base leading-5 font-medium rounded-full text-white bg-green-800  hover:bg-green-900 hover:text-gray-100 focus:outline-none focus:shadow-outline transition ease-in-out duration-150"
                    >
                      Reageer direct
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
