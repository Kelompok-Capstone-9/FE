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
                "https://firebasestorage.googleapis.com/v0/b/example-marketplace-d0f64.appspot.com/o/files%2Fwoman-1730325%201.svg?alt=media&token=eda7fac0-21fc-498e-a559-cde3288b53de"
              }
              title={"Membership"}
              alt={"card Membership"}
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 padding-between2">
            <CardLandingPage
              id={"card-landingpage-2"}
              imageUrl={
                "https://firebasestorage.googleapis.com/v0/b/example-marketplace-d0f64.appspot.com/o/files%2Ffitness-1948837%201.svg?alt=media&token=bf11a2df-e551-43e2-ac0c-04fab87fd035"
              }
              title={"Offline Class"}
              alt={"card Offline Class"}
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 padding-between3">
            <CardLandingPage
              id={"card-landingpage-3"}
              imageUrl={
                "https://firebasestorage.googleapis.com/v0/b/example-marketplace-d0f64.appspot.com/o/files%2Ffull-shot-man-doing-yoga-mat%201.svg?alt=media&token=853cd397-7445-4805-b4bc-5970bff5835b"
              }
              title={"Online Class"}
              alt={"Card Online Class"}
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 padding-between4">
            <CardLandingPage
              id={"card-landingpage-4"}
              imageUrl={
                "https://firebasestorage.googleapis.com/v0/b/example-marketplace-d0f64.appspot.com/o/files%2Fwellness-health-lifestyle-workout-graphic-word%201.svg?alt=media&token=24b7dd74-6e72-4c08-b885-885680f967fc"
              }
              title={"Top News"}
              alt={"Card Top News"}
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 padding-between5">
            <CardLandingPage
              id={"card-landingpage-5"}
              imageUrl={
                "https://firebasestorage.googleapis.com/v0/b/example-marketplace-d0f64.appspot.com/o/files%2Fclose-up-treadmill-console-with-settings%201.svg?alt=media&token=9ddcbff2-0813-43c0-912e-9da7cc111b04"
              }
              title={"Facilities"}
              alt={"card Facilities"}
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 padding-between6">
            <CardLandingPage
              id={"card-landingpage-6"}
              imageUrl={""}
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
