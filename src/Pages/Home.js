import React from "react";
import Header from "../Layout/Header/Header";
import Body from "../Components/Home/Body";
import Footer from "../Layout/Footer/Footer";
import Top from "../Components/Reusable/GoTop";

const Home = () => {
  return (
    <div>
      <Top />
      <div id="app" class="  antialiased">
        <Header />
        <Body />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
