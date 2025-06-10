import React from "react";
import HeroSection from "../../components/heroSection";
import PopularDestinations from "../../components/PopularDestinations";
import TourPackages from "../../components/TourPackages";

const Home = () => {
  return (
    <>
      <HeroSection />
      <PopularDestinations />
      <TourPackages />
      {/* Add Intro, Destinations, Contact later */}
    </>
  );
};

export default Home;
