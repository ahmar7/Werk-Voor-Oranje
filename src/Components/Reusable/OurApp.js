import React from "react";
import SnaLogo from "../../Assets/img/sna-logo-round.svg";
import Logo1 from "../../Assets/img/logo1.png";
import Logo2 from "../../Assets/img/logo2.svg";
import Logo3 from "../../Assets/img/logo3.png";
import Logo4 from "../../Assets/img/logo4.svg";
import Logo5 from "../../Assets/img/logo5.png";
const OurApp = () => {
  return (
    <>
      <div className="bg-white" data-v-1d5ee227>
        <div className="max-w-7xl mx-auto py-12 px-6 sm:px-6 lg:py-16 md:px-12">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-800 sm:text-4xl">
                Werk Voor Oranje heeft het SNA-keurmerk
              </h2>{" "}
              <p className="mt-3 max-w-3xl text-lg text-gray-500">
                Het SNA-keurmerk is het keurmerk voor de uitzendsector en
                aannemers van werk en is ontwikkeld om de risico’s van inleners
                van arbeid en opdrachtgevers van werk te beperken. Detacheerders
                en payrollondernemingen vallen ook onder het keurmerk omdat ook
                zij arbeid ter beschikking stellen. De dienstverlening en de
                processen van Werk Voor Oranje worden twee keer per jaar
                gecontroleerd (audit). Onze actuele certificering kun je
                hieronder downloaden.
              </p>{" "}
              <div className="mt-8 sm:flex">
                <a
                  href="https://www.normeringarbeid.nl/snakeurmerk/gecertificeerde-ondernemingen/cec155e1-209a-4165-2369-20029de1e1a1/verklaring/nl"
                  target="_blank"
                  title="sna certificaat "
                  className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-full text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
                >
                  download
                </a>
              </div>
            </div>{" "}
            <div className="mt-8 ">
              <div className=" flex justify-center ">
                <img src={SnaLogo} alt="Sna" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50" data-v-1d5ee227>
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-20 sm:px-6 md:px-12">
          <h2 className="text-xl font-bold text-gray-800">
            Werk Voor Oranje werken o.a voor ...
          </h2>{" "}
          <div className="flow-root mt-8 lg:mt-10">
            <div className="-mt-4 -ml-8 flex flex-wrap justify-between lg:-ml-4">
              <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">
                <img
                  src={Logo1}
                  alt="gemeente amsterdam"
                  className="h-12 grayscale opacity-75"
                />
              </div>{" "}
              <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">
                <img
                  src={Logo2}
                  alt="Rijkswaterstaat"
                  className="h-14 grayscale opacity-75"
                />
              </div>{" "}
              <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">
                <img
                  src={Logo3}
                  alt="NS"
                  className="h-14 grayscale opacity-75"
                />
              </div>{" "}
              <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">
                <img
                  src={Logo4}
                  alt="Noord Brabant"
                  className="h-10 grayscale opacity-75"
                />
              </div>{" "}
              <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">
                <img
                  src={Logo5}
                  alt="gemeente Zoetermeer"
                  className="h-12 grayscale opacity-75"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurApp;
