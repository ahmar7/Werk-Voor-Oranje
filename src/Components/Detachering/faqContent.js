import { useState } from "react";
import Faq from "./Faq";
import AccordionItem from "./faqUi";
import { Link } from "react-router-dom";

const Accordion = () => {
  const [clicked1, setClicked1] = useState(false);
  const [clicked2, setClicked2] = useState(false);
  const [clicked3, setClicked3] = useState(false);
  const [clicked4, setClicked4] = useState(false);
  const [clicked5, setClicked5] = useState(false);
  const [clicked6, setClicked6] = useState(false);

  const handleToggle1 = () => {
    clicked1 ? setClicked1(false) : setClicked1(true);
  };
  const handleToggle2 = () => {
    clicked2 ? setClicked2(false) : setClicked2(true);
  };
  const handleToggle3 = () => {
    clicked3 ? setClicked3(false) : setClicked3(true);
  };
  const handleToggle4 = () => {
    clicked4 ? setClicked4(false) : setClicked4(true);
  };
  const handleToggle5 = () => {
    clicked5 ? setClicked5(false) : setClicked5(true);
  };
  const handleToggle6 = () => {
    clicked6 ? setClicked6(false) : setClicked6(true);
  };
  let faqs = [
    {
      question:
        " Waarom eist de opdrachtgever een detacheringsconstructie voor deze opdracht?",
      answer:
        " De opdrachtgever heeft beoordeeld dat de opdracht in principe een functie is die in een loondienstverband dient te worden uitgevoerd. De opdrachtgever vraagt aan de markt om deze capaciteit te leveren maar houdt vast dat de werkzaamheden in loondienstverband moet worden uitgevoerd. Als de opdrachtgever een zzp’er inhuurt loopt deze de kans door de belastingdienst alsnog aangeslagen te worden voor Loonheffing en premie Zorgverzekeringswet (Zvw). Dit risico wil de organisatie niet lopen en kiest dus voor een uitvraag waarbij loondienstverband vereist is.",
    },
    {
      question:
        " Waarom eist de opdrachtgever een detacheringsconstructie voor deze opdracht?",
      answer:
        " De opdrachtgever heeft beoordeeld dat de opdracht in principe een functie is die in een loondienstverband dient te worden uitgevoerd. De opdrachtgever vraagt aan de markt om deze capaciteit te leveren maar houdt vast dat de werkzaamheden in loondienstverband moet worden uitgevoerd. Als de opdrachtgever een zzp’er inhuurt loopt deze de kans door de belastingdienst alsnog aangeslagen te worden voor Loonheffing en premie Zorgverzekeringswet (Zvw). Dit risico wil de organisatie niet lopen en kiest dus voor een uitvraag waarbij loondienstverband vereist is.",
    },
    {
      question:
        " Waarom eist de opdrachtgever een detacheringsconstructie voor deze opdracht?",
      answer:
        " De opdrachtgever heeft beoordeeld dat de opdracht in principe een functie is die in een loondienstverband dient te worden uitgevoerd. De opdrachtgever vraagt aan de markt om deze capaciteit te leveren maar houdt vast dat de werkzaamheden in loondienstverband moet worden uitgevoerd. Als de opdrachtgever een zzp’er inhuurt loopt deze de kans door de belastingdienst alsnog aangeslagen te worden voor Loonheffing en premie Zorgverzekeringswet (Zvw). Dit risico wil de organisatie niet lopen en kiest dus voor een uitvraag waarbij loondienstverband vereist is.",
    },
    {
      question:
        " Waarom eist de opdrachtgever een detacheringsconstructie voor deze opdracht?",
      answer:
        " De opdrachtgever heeft beoordeeld dat de opdracht in principe een functie is die in een loondienstverband dient te worden uitgevoerd. De opdrachtgever vraagt aan de markt om deze capaciteit te leveren maar houdt vast dat de werkzaamheden in loondienstverband moet worden uitgevoerd. Als de opdrachtgever een zzp’er inhuurt loopt deze de kans door de belastingdienst alsnog aangeslagen te worden voor Loonheffing en premie Zorgverzekeringswet (Zvw). Dit risico wil de organisatie niet lopen en kiest dus voor een uitvraag waarbij loondienstverband vereist is.",
    },
    {
      question:
        " Waarom eist de opdrachtgever een detacheringsconstructie voor deze opdracht?",
      answer:
        " De opdrachtgever heeft beoordeeld dat de opdracht in principe een functie is die in een loondienstverband dient te worden uitgevoerd. De opdrachtgever vraagt aan de markt om deze capaciteit te leveren maar houdt vast dat de werkzaamheden in loondienstverband moet worden uitgevoerd. Als de opdrachtgever een zzp’er inhuurt loopt deze de kans door de belastingdienst alsnog aangeslagen te worden voor Loonheffing en premie Zorgverzekeringswet (Zvw). Dit risico wil de organisatie niet lopen en kiest dus voor een uitvraag waarbij loondienstverband vereist is.",
    },
    {
      question:
        " Waarom eist de opdrachtgever een detacheringsconstructie voor deze opdracht?",
      answer:
        " De opdrachtgever heeft beoordeeld dat de opdracht in principe een functie is die in een loondienstverband dient te worden uitgevoerd. De opdrachtgever vraagt aan de markt om deze capaciteit te leveren maar houdt vast dat de werkzaamheden in loondienstverband moet worden uitgevoerd. Als de opdrachtgever een zzp’er inhuurt loopt deze de kans door de belastingdienst alsnog aangeslagen te worden voor Loonheffing en premie Zorgverzekeringswet (Zvw). Dit risico wil de organisatie niet lopen en kiest dus voor een uitvraag waarbij loondienstverband vereist is.",
    },
  ];
  return (
    <ul className="sasdas">
      <ul className="sasdas">
        <div className="flex-cos">
          <div className="faq-active faq-main" onClick={handleToggle1}>
            <dt className="text-lg faq-title leading-6 font-medium text-gray-900">
              <span>
                {" "}
                Waarom eist de opdrachtgever een detacheringsconstructie voor
                deze opdracht?
              </span>{" "}
              {clicked1 ? (
                <span className="sign">-</span>
              ) : (
                <span className="sign">+</span>
              )}
            </dt>{" "}
            {clicked1 && (
              <dd className="mt-2 text-base faq-desc text-gray-500">
                <span>
                  {" "}
                  De opdrachtgever heeft beoordeeld dat de opdracht in principe
                  een functie is die in een loondienstverband dient te worden
                  uitgevoerd. De opdrachtgever vraagt aan de markt om deze
                  capaciteit te leveren maar houdt vast dat de werkzaamheden in
                  loondienstverband moet worden uitgevoerd. Als de opdrachtgever
                  een zzp’er inhuurt loopt deze de kans door de belastingdienst
                  alsnog aangeslagen te worden voor Loonheffing en premie
                  Zorgverzekeringswet (Zvw). Dit risico wil de organisatie niet
                  lopen en kiest dus voor een uitvraag waarbij loondienstverband
                  vereist is.
                </span>
              </dd>
            )}
          </div>
          <div className="faq-active faq-main" onClick={handleToggle2}>
            <dt className="text-lg faq-title leading-6 font-medium text-gray-900">
              <span>
                {" "}
                Waarom eist de opdrachtgever een detacheringsconstructie voor
                deze opdracht?
              </span>{" "}
              {clicked2 ? (
                <span className="sign">-</span>
              ) : (
                <span className="sign">+</span>
              )}
            </dt>{" "}
            {clicked2 && (
              <dd className="mt-2 text-base faq-desc text-gray-500">
                <span>
                  {" "}
                  De opdrachtgever heeft beoordeeld dat de opdracht in principe
                  een functie is die in een loondienstverband dient te worden
                  uitgevoerd. De opdrachtgever vraagt aan de markt om deze
                  capaciteit te leveren maar houdt vast dat de werkzaamheden in
                  loondienstverband moet worden uitgevoerd. Als de opdrachtgever
                  een zzp’er inhuurt loopt deze de kans door de belastingdienst
                  alsnog aangeslagen te worden voor Loonheffing en premie
                  Zorgverzekeringswet (Zvw). Dit risico wil de organisatie niet
                  lopen en kiest dus voor een uitvraag waarbij loondienstverband
                  vereist is.
                </span>
              </dd>
            )}
          </div>
          <div className="faq-active faq-main" onClick={handleToggle3}>
            <dt className="text-lg faq-title leading-6 font-medium text-gray-900">
              <span>
                {" "}
                Waarom eist de opdrachtgever een detacheringsconstructie voor
                deze opdracht?
              </span>{" "}
              {clicked3 ? (
                <span className="sign">-</span>
              ) : (
                <span className="sign">+</span>
              )}
            </dt>{" "}
            {clicked3 && (
              <dd className="mt-2 text-base faq-desc text-gray-500">
                <span>
                  {" "}
                  De opdrachtgever heeft beoordeeld dat de opdracht in principe
                  een functie is die in een loondienstverband dient te worden
                  uitgevoerd. De opdrachtgever vraagt aan de markt om deze
                  capaciteit te leveren maar houdt vast dat de werkzaamheden in
                  loondienstverband moet worden uitgevoerd. Als de opdrachtgever
                  een zzp’er inhuurt loopt deze de kans door de belastingdienst
                  alsnog aangeslagen te worden voor Loonheffing en premie
                  Zorgverzekeringswet (Zvw). Dit risico wil de organisatie niet
                  lopen en kiest dus voor een uitvraag waarbij loondienstverband
                  vereist is.
                </span>
              </dd>
            )}
          </div>
        </div>
        <div className="flex-cos">
          <div className="faq-active faq-main" onClick={handleToggle4}>
            <dt className="text-lg faq-title leading-6 font-medium text-gray-900">
              <span>
                {" "}
                Waarom eist de opdrachtgever een detacheringsconstructie voor
                deze opdracht?
              </span>{" "}
              {clicked4 ? (
                <span className="sign">-</span>
              ) : (
                <span className="sign">+</span>
              )}
            </dt>{" "}
            {clicked4 && (
              <dd className="mt-2 text-base faq-desc text-gray-500">
                <span>
                  {" "}
                  De opdrachtgever heeft beoordeeld dat de opdracht in principe
                  een functie is die in een loondienstverband dient te worden
                  uitgevoerd. De opdrachtgever vraagt aan de markt om deze
                  capaciteit te leveren maar houdt vast dat de werkzaamheden in
                  loondienstverband moet worden uitgevoerd. Als de opdrachtgever
                  een zzp’er inhuurt loopt deze de kans door de belastingdienst
                  alsnog aangeslagen te worden voor Loonheffing en premie
                  Zorgverzekeringswet (Zvw). Dit risico wil de organisatie niet
                  lopen en kiest dus voor een uitvraag waarbij loondienstverband
                  vereist is.
                </span>
              </dd>
            )}
          </div>
          <div className="faq-active faq-main" onClick={handleToggle5}>
            <dt className="text-lg faq-title leading-6 font-medium text-gray-900">
              <span>
                {" "}
                Waarom eist de opdrachtgever een detacheringsconstructie voor
                deze opdracht?
              </span>{" "}
              {clicked5 ? (
                <span className="sign">-</span>
              ) : (
                <span className="sign">+</span>
              )}
            </dt>{" "}
            {clicked5 && (
              <dd className="mt-2 text-base faq-desc text-gray-500">
                <span>
                  {" "}
                  De opdrachtgever heeft beoordeeld dat de opdracht in principe
                  een functie is die in een loondienstverband dient te worden
                  uitgevoerd. De opdrachtgever vraagt aan de markt om deze
                  capaciteit te leveren maar houdt vast dat de werkzaamheden in
                  loondienstverband moet worden uitgevoerd. Als de opdrachtgever
                  een zzp’er inhuurt loopt deze de kans door de belastingdienst
                  alsnog aangeslagen te worden voor Loonheffing en premie
                  Zorgverzekeringswet (Zvw). Dit risico wil de organisatie niet
                  lopen en kiest dus voor een uitvraag waarbij loondienstverband
                  vereist is.
                </span>
              </dd>
            )}
          </div>
          <div className="faq-active faq-main" onClick={handleToggle6}>
            <dt className="text-lg faq-title leading-6 font-medium text-gray-900">
              <span>
                {" "}
                Waarom eist de opdrachtgever een detacheringsconstructie voor
                deze opdracht?
              </span>{" "}
              {clicked6 ? (
                <span className="sign">-</span>
              ) : (
                <span className="sign">+</span>
              )}
            </dt>{" "}
            {clicked6 && (
              <dd className="mt-2 text-base faq-desc text-gray-500">
                <span>
                  {" "}
                  De opdrachtgever heeft beoordeeld dat de opdracht in principe
                  een functie is die in een loondienstverband dient te worden
                  uitgevoerd. De opdrachtgever vraagt aan de markt om deze
                  capaciteit te leveren maar houdt vast dat de werkzaamheden in
                  loondienstverband moet worden uitgevoerd. Als de opdrachtgever
                  een zzp’er inhuurt loopt deze de kans door de belastingdienst
                  alsnog aangeslagen te worden voor Loonheffing en premie
                  Zorgverzekeringswet (Zvw). Dit risico wil de organisatie niet
                  lopen en kiest dus voor een uitvraag waarbij loondienstverband
                  vereist is.
                </span>
              </dd>
            )}
          </div>
        </div>
      </ul>

      <Link className="moref" to="/faqs">
        Show more
        <svg
          width="6"
          height="8"
          viewBox="0 0 6 8"
          fill="black"
          xmlns="http://www.w3.org/2000/svg"
          class="sc-kRRyDe kwrgNl"
        >
          <path d="M1.68023 0L0.740234 0.94L3.79357 4L0.740234 7.06L1.68023 8L5.68023 4L1.68023 0Z"></path>
        </svg>
      </Link>
    </ul>
  );
};
export default Accordion;
