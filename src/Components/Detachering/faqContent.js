import { useState } from "react";
import Faq from "./Faq";
import AccordionItem from "./faqUi";

const Accordion = () => {
  const [clicked, setClicked] = useState("0");

  const handleToggle = (index) => {
    if (clicked === index) {
      return setClicked("0");
    }
    setClicked(index);
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
  ];
  return (
    <ul className="accordion">
      {faqs.map((faq, index) => (
        <AccordionItem
          key={index}
          onToggle={() => handleToggle(index)}
          faq={faq}
          active={clicked === index}
        />
      ))}
    </ul>
  );
};
export default Accordion;
