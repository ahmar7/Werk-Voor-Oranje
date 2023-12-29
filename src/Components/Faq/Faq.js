import React, { useState } from "react";

import Accordion from "./faqContent";
import { Link } from "react-router-dom";
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
