import React from "react";
import HeaderLanding from "../../components/Header/HeadearLanding";
import LandingPageJumbotron from "./Jumbotron/LandingPageJumbotron";
import DownloadApp from "./DownloadApp/DownloadApp";
import FooterLanding from "../../components/FooterLanding/FooterLanding";
import CardHeader from "../../components/Header/CardHeader";
import MiniCardLanding from "../../components/MiniCardLanding/MiniCardLanding";
import bg from "../../assets/icons/Category.svg";
import TestimoniCarousel from "./TestimoniCarousel/TestimoniCarousel";
import Section3LandingPage from "./Section3LandingPage/Section3LandingPage";
import { Link, animateScroll as scroll } from "react-scroll";
const MainLanding = () => {
  return (
    <div style={{ backgroundColor: "var(--Neutral-White-100)" }}>
      <HeaderLanding
        logoButton={
          <>
            <Link
              to="/"
              className="btn d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
              onClick={() => scroll.scrollToTop()}>
              <span
                className="fs-4 fw-bolder"
                style={{ color: "var(--primary-600)" }}>
                GoFit
              </span>
            </Link>
          </>
        }
      />
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
    </div>
  );
};


export default MainLanding;

