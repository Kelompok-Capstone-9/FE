import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Section3LandingPage.css";

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
              imageUrl={
                "https://firebasestorage.googleapis.com/v0/b/gofit-922c3.appspot.com/o/woman-1730325%201.svg?alt=media&token=8b5c1184-c282-4720-9ad9-6c374842fe86"
              }
              title={"Membership"}
              alt={"card Membership"}
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 padding-between2">
            <CardLandingPage
              id={"card-landingpage-2"}
              imageUrl={
                "https://firebasestorage.googleapis.com/v0/b/gofit-922c3.appspot.com/o/fitness-1948837%201.svg?alt=media&token=b185b108-f0e0-4106-9d54-5dbbb8134617"
              }
              title={"Offline Class"}
              alt={"card Offline Class"}
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 padding-between3">
            <CardLandingPage
              id={"card-landingpage-3"}
              imageUrl={
                "https://firebasestorage.googleapis.com/v0/b/gofit-922c3.appspot.com/o/full-shot-man-doing-yoga-mat%201.svg?alt=media&token=d7e16b6c-2aea-43e0-882d-28592bcdf1f6"
              }
              title={"Online Class"}
              alt={"Card Online Class"}
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 padding-between4">
            <CardLandingPage
              id={"card-landingpage-4"}
              imageUrl={
                "https://firebasestorage.googleapis.com/v0/b/gofit-922c3.appspot.com/o/wellness-health-lifestyle-workout-graphic-word%201.svg?alt=media&token=a69441e9-7b76-4521-bd54-b4b1be0c2523"
              }
              title={"Top News"}
              alt={"Card Top News"}
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 padding-between5">
            <CardLandingPage
              id={"card-landingpage-5"}
              imageUrl={
                "https://firebasestorage.googleapis.com/v0/b/gofit-922c3.appspot.com/o/close-up-treadmill-console-with-settings%201.svg?alt=media&token=1a5e9731-1947-4a4a-936f-3f1c4f4caeb7"
              }
              title={"Facilities"}
              alt={"card Facilities"}
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 padding-between6">
            <CardLandingPage
              id={"card-landingpage-6"}
              imageUrl={
                "https://firebasestorage.googleapis.com/v0/b/gofit-922c3.appspot.com/o/fitness-woman-doing-yoga-with-mobile-app%201.svg?alt=media&token=57f73f87-fc95-4347-8f1a-4ec73e729e90"
              }
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
