import React from "react";
import Header from "../components/Header";
import LastesFilms from "../components/LastesFilms";
import Wearehome from "../components/Wearehome";
import ComingSoon from "../components/ComingSoon";
import Cheese from "../components/Cheese";
import Northworld from "../components/Northworld";
import Staff from "../components/Staff";
import Breaking from "../components/Breaking";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <LastesFilms />
        <Wearehome />
        <ComingSoon/>
        <Cheese/>
        <Northworld/>
        <Staff/>
        <Breaking/>
        <Footer />

    </>
  );
};

export default Home;
