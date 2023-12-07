import React from "react";
import Header from "../Layout/Header/Header";
import BottomBanner from "../Components/Reusable/BottomBanner";
import Footer from "../Layout/Footer/Footer";
import Top from "../Components/Reusable/GoTop";
import NieuwsHeader from "../Components/Reusable/NieuwsHeader.js";
import Banner from "../Components/NieuwsDetail/Banner.js";
import Detail from "../Components/NieuwsDetail/Detail.js";

const NieuwsDetail = () => {
  let blogName =
    "Jasper Wegman zorgt ervoor dat hij mensen meeneemt in zijn visie";
  return (
    <div id="app" class="bg-gray-100 antialiased">
      <Top />
      <Header />
      <NieuwsHeader blogName={blogName} />
      <Banner />
      <Detail />
      <div className="bottom-banner">
        <BottomBanner />
        <Footer />
      </div>
    </div>
  );
};

export default NieuwsDetail;
