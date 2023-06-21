import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Section3LandingPage.css";

import CardLandingPage from "../../../components/Card/CardLandingPage";
import { NavLink } from "react-router-dom";

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
            <NavLink to={"http://husky-end.surge.sh/membership"}>
              <CardLandingPage
                id={"card-landingpage-1"}
                imageUrl={
                  "https://firebasestorage.googleapis.com/v0/b/classy-3b1b1.appspot.com/o/woman-1730325%201.svg?alt=media&token=90a0a25b-70f2-4d88-81b6-41cd94d588da"
                }
                title={"Membership"}
                alt={"card Membership"}
              />
            </NavLink>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 padding-between2">
            <NavLink to={"http://husky-end.surge.sh/offlineClass"}>
              <CardLandingPage
                id={"card-landingpage-2"}
                imageUrl={
                  "https://firebasestorage.googleapis.com/v0/b/classy-3b1b1.appspot.com/o/fitness-1948837%201.svg?alt=media&token=db828400-f162-4d6f-b95e-757bfbf3144a"
                }
                title={"Offline Class"}
                alt={"card Offline Class"}
              />
            </NavLink>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 padding-between3">
            <NavLink to={"http://husky-end.surge.sh/onlineClass"}>
              <CardLandingPage
                id={"card-landingpage-3"}
                imageUrl={
                  "https://firebasestorage.googleapis.com/v0/b/classy-3b1b1.appspot.com/o/full-shot-man-doing-yoga-mat%201.svg?alt=media&token=ca8f60bd-3252-4237-bf4c-58b8db6ce357"
                }
                title={"Online Class"}
                alt={"Card Online Class"}
              />
            </NavLink>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 padding-between4">
            <NavLink to={"http://husky-end.surge.sh/articles"}>
              <CardLandingPage
                id={"card-landingpage-4"}
                imageUrl={
                  "https://firebasestorage.googleapis.com/v0/b/classy-3b1b1.appspot.com/o/wellness-health-lifestyle-workout-graphic-word%201.svg?alt=media&token=d0c752f2-44d8-4a83-954c-014a8a8df693"
                }
                title={"Top News"}
                alt={"Card Top News"}
              />
            </NavLink>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 padding-between5">
            <NavLink to={"http://husky-end.surge.sh/booking"}>
              <CardLandingPage
                id={"card-landingpage-5"}
                imageUrl={
                  "https://firebasestorage.googleapis.com/v0/b/classy-3b1b1.appspot.com/o/close-up-treadmill-console-with-settings%201.svg?alt=media&token=667611c3-beaf-47b1-ab74-efc0c83344cd"
                }
                title={"Facilities"}
                alt={"card Facilities"}
              />
            </NavLink>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 padding-between6">
            <NavLink to={"http://husky-end.surge.sh/training"}>
              <CardLandingPage
                id={"card-landingpage-6"}
                imageUrl={
                  "https://firebasestorage.googleapis.com/v0/b/classy-3b1b1.appspot.com/o/fitness-woman-doing-yoga-with-mobile-app%201.svg?alt=media&token=e88a58d0-1ed6-4c8d-9e79-f33ee531ff77"
                }
                title={"Work Out Video"}
                alt={"Card Work Out Video"}
              />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3LandingPage;
