import React from "react";
import LandingPageJumbotron from "./Jumbotron/LandingPageJumbotron";
import DownloadApp from "./DownloadApp/DownloadApp";
import FooterLanding from "../../components/FooterLanding/FooterLanding";
import MiniCardLanding from "../../components/MiniCardLanding/MiniCardLanding";
import TestimoniCarousel from "./TestimoniCarousel/TestimoniCarousel";
import Section3LandingPage from "./Section3LandingPage/Section3LandingPage";
const MainLanding = () => {
  return (
    <>
      <LandingPageJumbotron />
      <Section3LandingPage />
      <div className="mb-5 mt-5">
        <TestimoniCarousel />
      </div>
      <div className="mb-5 mt-5 container">
        <MiniCardLanding />
      </div>
      <DownloadApp />
      <div style={{ marginTop: "20vh" }}>
        <FooterLanding />
      </div>
    </>
  );
};

export default MainLanding;
