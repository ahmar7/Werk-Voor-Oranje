import React from "react";
import Header from "../Layout/Header/Header";
import Banner from "../Components/Reusable/Banner.js";
import Vacancies from "../Components/Vacatures/Vacancies.js";

import Mission from "../Components/Reusable/Mission";
import Footer from "../Layout/Footer/Footer";
import BottomBanner from "../Components/Reusable/BottomBanner";
import Top from "../Components/Reusable/GoTop";

const Vacatures = () => {
  let bannerTitle = " Werk Voor Oranje";
  let bannerDesc = "groei jij mee?";
  return (
    <div>
      <Top />
      <div id="app" className="bg-gray-50">
        <div>
          <Header />
        </div>
        <Banner bannerDesc={bannerDesc} bannerTitle={bannerTitle} />
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
