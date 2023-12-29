import React from "react";
import Header from "../Layout/Header/Header";
import Banner from "../Components/Reusable/Banner";
import Faq from "../Components/ZZP Bemiddeling/Faq";
import OurService from "../Components/Reusable/OurService";
import Mission from "../Components/Reusable/Mission";
import Footer from "../Layout/Footer/Footer";
import BottomBanner from "../Components/Reusable/BottomBanner";
import Top from "../Components/Reusable/GoTop";

const OverFreep = () => {
  let bannerTitle = "Transparante ZZP Bemiddeling";
  let bannerDesc =
    "  Met een schat aan data en jarenlange ervaring helpen we je bij het winnen van de opdracht";
  return (
    <div>
      <Top />
      <div id="app" className="bg-gray-50">
        <div className=" ">
          <Header />
        </div>
        <Banner bannerTitle={bannerTitle} bannerDesc={bannerDesc} />
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
