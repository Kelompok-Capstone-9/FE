import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Section3LandingPage.css";
import cardIMG1 from "../../../assets/img/woman-1730325 1.svg";
import cardIMG2 from "../../../assets/img/fitness-1948837 1.svg";
import cardIMG3 from "../../../assets/img/full-shot-man-doing-yoga-mat 1.svg";
import cardIMG4 from "../../../assets/img/wellness-health-lifestyle-workout-graphic-word 1.svg";
import cardIMG5 from "../../../assets/img/close-up-treadmill-console-with-settings 1.svg";
import cardIMG6 from "../../../assets/img/fitness-woman-doing-yoga-with-mobile-app 1.svg";

import CardLandingPage from "../../../components/Card/CardLandingPage";

const Section3LandingPage = () => {
  return (
    <div className="section3">
      <div className="text-center">
        <h1 className="section-title">Top Programs</h1>
        <p className="section-description">
          The top program we give you to achieve your goals with a professional
          coach.
        </p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12 padding-between1">
            <CardLandingPage
              id={"card-landingpage-1"}
              imageUrl={cardIMG1}
              title={"Membership"}
              alt={"card Membership"}
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 padding-between2">
            <CardLandingPage
              id={"card-landingpage-2"}
              imageUrl={cardIMG2}
              title={"Offline Class"}
              alt={"card Offline Class"}
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 padding-between3">
            <CardLandingPage
              id={"card-landingpage-3"}
              imageUrl={cardIMG3}
              title={"Online Class"}
              alt={"Card Online Class"}
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 padding-between4">
            <CardLandingPage
              id={"card-landingpage-4"}
              imageUrl={cardIMG4}
              title={"Top News"}
              alt={"Card Top News"}
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 padding-between5">
            <CardLandingPage
              id={"card-landingpage-5"}
              imageUrl={cardIMG5}
              title={"Facilities"}
              alt={"card Facilities"}
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 padding-between6">
            <CardLandingPage
              id={"card-landingpage-6"}
              imageUrl={cardIMG6}
              title={"Work Out Video"}
              alt={"Card Work Out Video"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3LandingPage;
