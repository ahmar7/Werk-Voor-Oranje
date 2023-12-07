import React from "react";
import Header from "../Layout/Header/Header";
import BottomBanner from "../Components/Reusable/BottomBanner";
import Footer from "../Layout/Footer/Footer";
import Body from "../Components/VacantDetail/Body";
import Top from "../Components/Reusable/GoTop";

const VacantDetail = () => {
  return (
    <div>
      <Top />
      <Header />
      <Body />
      <div className="bottom-banner">
        <BottomBanner />
        <Footer />
      </div>
    </div>
  );
};

export default VacantDetail;
