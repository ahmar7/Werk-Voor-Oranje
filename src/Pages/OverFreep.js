import React from "react";
import Header from "../Layout/Header/Header";
import Banner from "../Components/OverFreep/Banner";
import Faq from "../Components/OverFreep/Faq";
import OurService from "../Components/Reusable/OurService";
import Mission from "../Components/Reusable/Mission";
import Footer from "../Layout/Footer/Footer";
import BottomBanner from "../Components/Reusable/BottomBanner";
import Top from "../Components/Reusable/GoTop";

const OverFreep = () => {
  return (
    <div>
      <Top />
      <div id="app" className="bg-gray-50">
        <div className=" ">
          <Header />
        </div>
        <Banner />
        <Faq />
        <OurService />
        <Mission />
        <div className="bottom-banner">
          <BottomBanner />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default OverFreep;
