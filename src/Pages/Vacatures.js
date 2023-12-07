import React from "react";
import Header from "../Layout/Header/Header";
import Banner from "../Components/Vacatures/Banner.js";
import Vacancies from "../Components/Vacatures/Vacancies.js";

import Mission from "../Components/Reusable/Mission";
import Footer from "../Layout/Footer/Footer";
import BottomBanner from "../Components/Reusable/BottomBanner";
import Top from "../Components/Reusable/GoTop";

const Vacatures = () => {
  return (
    <div>
      <Top />
      <div id="app" className="bg-gray-50">
        <div className="bg-indigo-900 bg-colored">
          <Header />
        </div>
        <Banner />
        <Vacancies />

        <Mission />
        <div className="bottom-banner">
          <BottomBanner />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Vacatures;
