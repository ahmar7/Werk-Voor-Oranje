import React from "react";
import Header from "../Layout/Header/Header";
import Banner from "../Components/Detachering/Banner";
import OurService from "../Components/Reusable/OurService";
import Mission from "../Components/Reusable/Mission";
import Footer from "../Layout/Footer/Footer";
import BottomBanner from "../Components/Reusable/BottomBanner";
import WhyUs from "../Components/Detachering/WhyUs";
import HowWork from "../Components/Detachering/HowWork";
import Faq from "../Components/Detachering/Faq";
import Top from "../Components/Reusable/GoTop";

const Detachering = () => {
  return (
    <div>
      <Top />
      <div id="app" className="bg-gray-50">
        <div>
          <Header />
        </div>
        <Banner />
        <WhyUs />
        <HowWork />
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

export default Detachering;
