import React from "react";
import Header from "../Layout/Header/Header";
import Banner from "../Components/Nieuws/Banner.js";
import Footer from "../Layout/Footer/Footer";
import Top from "../Components/Reusable/GoTop";
import Blogs from "../Components/Nieuws/Blogs.js";
import BottomBanner from "../Components/Reusable/BottomBanner.js";

const Nieuws = () => {
  return (
    <div>
      <Top />
      <div id="app" class="  antialiased">
        <Header />
        {/* <Banner /> */}
        {/* <Blogs /> */}
        <div className="bottom-banner">
          <BottomBanner />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Nieuws;
