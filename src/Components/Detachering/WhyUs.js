import React from "react";
import Whysvg from "../../Assets/img/22.svg";
const WhyUs = () => {
  return (
    <div
      className="mx-auto flex justify-center relative py-8 bg-gray-100 md:px-12"
      data-v-6764eb96
    >
      <div className="text-center max-w-7xl" data-v-6764eb96>
        <div
          className="container md:flex px-4 md:px-0 items-center"
          data-v-6764eb96
        >
          <div className="w-full md:w-1/2" data-v-6764eb96>
            <img
              alt="Werk Voor Oranje bemiddelt zzp'ers?"
              className=" lazyloaded"
              data-v-6764eb96
              src={Whysvg}
            />
          </div>{" "}
          <div
            className="text-center md:text-left w-full md:w-1/2 text-blue-900"
            data-v-6764eb96
          >
            <h2 className="text-2xl font-bold" data-v-6764eb96>
              Waarom Werk Voor Oranje Detachering?
            </h2>{" "}
            <div
              className="leading-relaxed text-lg mt-4 text-gray-600 space-y-2"
              data-v-6764eb96
            >
              <p data-v-6764eb96>
                Werk Voor Oranje is opgericht om zelfstandig professionals te
                helpen bij het vinden van een opdracht. We bemiddelen zzp'ers
                binnen de overheid op freelance basis. Toch hebben we recent
                besloten om ook detachering aan te bieden.
              </p>
              <p data-v-6764eb96 />
              <p data-v-6764eb96>
                In het kader van{" "}
                <a
                  href="https://www.belastingdienst.nl/wps/wcm/connect/nl/modelovereenkomsten/modelovereenkomsten"
                  target="_blank"
                  className="underline"
                  data-v-6764eb96
                >
                  de Wet DBA
                </a>
                , vinden sommige overheidsorganisaties het belangrijk dat een
                opdracht wordt uitgevoerd in loondienstverband. Om
                aansprakelijkheid voor loonheffing te voorkomen vragen zij om
                kandidaten die (tijdelijk) in loondienst zijn.
              </p>{" "}
              <p data-v-6764eb96>
                Met Werk Voor Oranje Detachering geven we opdrachtgevers
                zekerheid en jou de vrijheid en (bijna) alle inkomsten die je
                hebt als ondernemer. Hieronder lees je meer over de voorwaarden
                en de veel gestelde vragen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
