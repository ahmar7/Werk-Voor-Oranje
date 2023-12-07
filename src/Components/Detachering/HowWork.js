import React from "react";
import HowSvg from "../../Assets/img/14.svg";
const HowWork = () => {
  return (
    <div
      className="mx-auto flex justify-center relative py-16 bg-white md:px-12"
      data-v-6764eb96
    >
      <div className="text-center max-w-7xl" data-v-6764eb96>
        <div
          className="container md:flex px-4 md:px-0 items-center"
          data-v-6764eb96
        >
          <div
            className="text-center md:text-left w-full md:w-1/2 text-blue-900"
            data-v-6764eb96
          >
            <h2 className="text-2xl font-bold" data-v-6764eb96>
              Hoe werkt Werk Voor Oranje Detachering?
            </h2>{" "}
            <div
              className="leading-relaxed text-lg mt-4 text-gray-600 space-y-2"
              data-v-6764eb96
            >
              <p data-v-6764eb96>
                Jij kan bij Werk Voor Oranje voor de duur van de opdracht op de
                loonlijst komen. Hiervoor ga je met Werk Voor Oranje een
                overeenkomst aan met betrekking tot de opdracht, zodat je
                vervolgens jouw detacheringsopdracht kan uitvoeren bij een
                overheidsorganisatie.
              </p>{" "}
              <p data-v-6764eb96>
                Daarnaast vullen we beiden een{" "}
                <a
                  href="https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/themaoverstijgend/programmas_en_formulieren/verklaring_loonheffingen_opting_in"
                  target="_blank"
                  className="underline"
                  data-v-6764eb96
                >
                  loonheffingsverklaring
                </a>{" "}
                in voor de Belastingdienst, zodat we op een juiste manier
                loonheffing en ZvW premie afdragen. Op deze manier zorgen we
                ervoor dat jij netto het grootste bedrag overhoudt wanneer je de
                opdracht uitvoert.
              </p>{" "}
              <p data-v-6764eb96>
                Maandelijks zullen we een bedrag (uren x het tarief) factureren
                aan de opdrachtgever en vervolgens na afdracht van onze fee
                (15%) verlonen als brutoloon. Op deze manier kun je dus toch
                prachtige opdrachten vervullen bij de mooiste
                overheidsorganisaties.
              </p>
            </div>
          </div>{" "}
          <div className="w-full md:w-1/2 " data-v-6764eb96>
            <img
              alt="Werk Voor Oranje zorgt voor transparante bemiddeling"
              className=" lazyloaded"
              data-v-6764eb96
              src={HowSvg}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWork;
