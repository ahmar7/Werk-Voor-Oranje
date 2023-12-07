import React, { useState } from "react";
import "./faq.css";
import Accordion from "./faqContent";
const Faq = () => {
  return (
    <div className="bg-gray-100" data-v-6764eb96>
      <div className="max-w-7xl mx-auto py-16 px-4 divide-y-2 divide-gray-200 sm:py-24 px-6 lg:px-0">
        <div>
          <h2 className="text-2xl font-bold text-indigo-600">
            Veel gestelde vragen
          </h2>{" "}
          <p className="mt-4 text-base text-gray-900">
            Hieronder tref je de antwoorden op de meest gestelde vragen. Heb je
            aanvullende vragen? Neem gerust contact op!
          </p>
        </div>{" "}
        <div className="mt-6 pt-10">
          <Accordion />
        </div>
      </div>
    </div>
  );
};

export default Faq;

//  <div>
//               <dt className="text-lg leading-6 font-medium text-gray-900">
//                 Voor de detachering maakt Werk Voor Oranje gebruik van de Opting-in
//                 regeling, wat is dat precies?
//               </dt>{" "}
//               <dd className="mt-2 text-base text-gray-500">
//                 <span>
//                   Opting-in is hetzelfde als een pseudowerknemerschap of
//                   dienstbetrekking op verzoek. Een pseudo-werknemer heeft een
//                   fictieve dienstbetrekking. Wanneer je er samen voor kiest om
//                   de onderlinge arbeidsverhouding voor de loonbelasting/premie
//                   volksverzekeringen wél te beschouwen als dienstbetrekking,
//                   is er sprake van Opting-in. In dit geval houdt Werk Voor Oranje
//                   loonheffing en ZvW premie in. De pseudo-werknemer en de
//                   werkgever melden, door middel van een gezamenlijke
//                   verklaring Loonheffingen Opting-in aan de Belastingdienst,
//                   dat zij de arbeidsverhouding voor heffing van de
//                   loonbelasting/premie volksverzekeringen aanmerken als een
//                   dienstbetrekking.{" "}
//                 </span>
//               </dd>
//             </div>
//             <div>
//               <dt className="text-lg leading-6 font-medium text-gray-900">
//                 Wat houdt detachering in?
//               </dt>{" "}
//               <dd className="mt-2 text-base text-gray-500">
//                 <span>
//                   Detachering betekent dat je bij Werk Voor Oranje als interim
//                   professional op de loonlijst komt voor de duur van de
//                   opdracht en vervolgens bij de opdrachtgever tijdelijk aan de
//                   slag gaan.
//                 </span>
//               </dd>
//             </div>
//             <div>
//               <dt className="text-lg leading-6 font-medium text-gray-900">
//                 Hoe bereken ik mijn brutoloon o.b.v. het tarief?
//               </dt>{" "}
//               <dd className="mt-2 text-base text-gray-500">
//                 <span>
//                   Heel eenvoudig. Het aantal uren dat je gemaakt hebt in een
//                   maand keer het uurtarief (min. 15%) is je brutoloon. Het
//                   brutoloon is incl. vakantiegeld.
//                 </span>
//               </dd>
//             </div>
//             <div>
//               <dt className="text-lg leading-6 font-medium text-gray-900">
//                 Hoe bereken ik mijn netto uitbetaling?
//               </dt>{" "}
//               <dd className="mt-2 text-base text-gray-500">
//                 <span>
//                   De netto uitbetaling is het brutoloon minus de loonheffing
//                   en de ZvW premie. Het berekenen van je nettobedrag kun je{" "}
//                   <a
//                     href="https://www.berekenhet.nl/ondernemen/nettoloon-dga.html"
//                     target="_blank"
//                     className="underline"
//                   >
//                     hier direct doen
//                   </a>
//                   . Vul je bruto-inkomen per maand in en laat de overige
//                   settings staan.
//                 </span>
//               </dd>
//             </div>
//             <div>
//               <dt className="text-lg leading-6 font-medium text-gray-900">
//                 Wat wordt er van mij verwacht bij een detachering?
//               </dt>{" "}
//               <dd className="mt-2 text-base text-gray-500">
//                 <span>
//                   Samen met Werk Voor Oranje vul je een{" "}
//                   <a
//                     href="https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/themaoverstijgend/programmas_en_formulieren/verklaring_loonheffingen_opting_in"
//                     target="_blank"
//                     className="underline"
//                   >
//                     verklaring loonheffing
//                   </a>{" "}
//                   van de belastingdienst in. Daarin verklaren we beide dat we
//                   akkoord gaan met de Opting-in constructie.
//                 </span>
//               </dd>
//             </div>
//             <div>
//               <dt className="text-lg leading-6 font-medium text-gray-900">
//                 De fee voor detachering is 15% en voor een zzp’er is dit 10%,
//                 waarom zit hier verschil in?
//               </dt>{" "}
//               <dd className="mt-2 text-base text-gray-500">
//                 <span>
//                   De administratieve verwerking van de loonheffing, de
//                   premieafdracht en de afstemming met de belastingdienst
//                   brengen extra kosten met zich mee. Daarom hanteren we een
//                   hogere fee.
//                 </span>
//               </dd>
//             </div>
//             <div>
//               <dt className="text-lg leading-6 font-medium text-gray-900">
//                 Krijg ik ook korting op de fee?
//               </dt>{" "}
//               <dd className="mt-2 text-base text-gray-500">
//                 <span>
//                   Als wij je succesvol bemiddelen vragen we het eerste jaar
//                   15% marge over het uurtarief. Na 1 jaar verlagen we deze
//                   marge naar 12,5%, het jaar daarop en alle volgende jaren
//                   hanteren we 10%.{" "}
//                 </span>
//               </dd>
//             </div>
//             <div>
//               <dt className="text-lg leading-6 font-medium text-gray-900">
//                 Wat is de betalingstermijn?
//               </dt>{" "}
//               <dd className="mt-2 text-base text-gray-500">
//                 <span>
//                   We betalen je nettoloon binnen 21 na ontvangst van je
//                   geaccordeerde uren.
//                 </span>
//               </dd>
//             </div>
//             <div>
//               <dt className="text-lg leading-6 font-medium text-gray-900">
//                 Heeft een detachering consequenties voor de
//                 MKB-winstvrijstelling voor mij als zzp’er?
//               </dt>{" "}
//               <dd className="mt-2 text-base text-gray-500">
//                 <span>
//                   Dit is afhankelijk van het antwoord op vraag 3. Indien je
//                   geen recht hebt op ondernemersaftrek vervalt ook de
//                   MKB-winstvrijstelling.
//                 </span>
//               </dd>
//             </div>
//             <div>
//               <dt className="text-lg leading-6 font-medium text-gray-900">
//                 Heeft een detachering consequenties voor de ondernemersaftrek
//                 voor mij als zzp’er?
//               </dt>{" "}
//               <dd className="mt-2 text-base text-gray-500">
//                 <span>
//                   Dit is afhankelijk van jouw persoonlijke situatie. De uren
//                   die je maakt voor de detacheringsopdracht tellen niet mee
//                   voor de zelfstandigenaftrek. Je moet in ieder geval minimaal
//                   1.225 uur per kalenderjaar werken in je eigen bedrijf om
//                   ondernemersaftrek te genieten. Bepaal dus eerst of het
//                   behalen van de nodige uren gaat lukken. Als dit niet het
//                   geval is bepaal dan de fiscale gevolgen van het verliezen
//                   van ondernemersaftrek.
//                 </span>
//               </dd>
//             </div>
//             <div>
//               <dt className="text-lg leading-6 font-medium text-gray-900">
//                 Welke belasting en premies ga ik betalen als ik de opdracht
//                 middels detachering uitvoer?
//               </dt>{" "}
//               <dd className="mt-2 text-base text-gray-500">
//                 <span>
//                   We kiezen voor het uitvoeren van deze opdracht voor een
//                   Opting-in constructie. Bij deze constructie betaal jij als
//                   kandidaat alleen de loonheffing en de verplichte
//                   ZvW-afdracht. De sociale verzekeringspremies hoef je in deze
//                   constructie niet af te dragen. Zo optimaliseren we voor jou
//                   de netto uitbetaling.
//                 </span>
//               </dd>
//             </div>
//             <div>
//               <dt className="text-lg leading-6 font-medium text-gray-900">
//                 Ben ik gebonden aan een concurrentiebeding na de duur van de
//                 opdracht?
//               </dt>{" "}
//               <dd className="mt-2 text-base text-gray-500">
//                 <span>
//                   Als jij je opdracht goed doet en daardoor bij de dezelfde
//                   opdrachtgever een nieuwe opdracht mag doen dan ben je daar
//                   volledig vrij in! We hanteren geen concurrentie-/
//                   relatiebeding.
//                 </span>
//               </dd>
//             </div>
