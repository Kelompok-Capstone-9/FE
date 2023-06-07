import React from "react";
import animatedsupport from "../../../assets/gif/Animation.svg";

const SupportSection1 = () => {
  return (
    <>
      <div
        className="row m-0"
        style={{ backgroundColor: "var(--Neutral-White-100)" }}
      >
        <div className="row d-flex justify-content-between p-0 mb-4">
          <div className="col-12 col-md-6 d-flex justify-content-center">
            <div className="col-lg-8 col-11 row mt-5 jumbotron-left">
              <div>
                <h1>
                Number 1 Fitness & Health Service
                </h1>
                <p>
                We are open to all your criticisms and suggestions in order to become the number 1 service. 
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 p-0 jumbotron-right">
            <img src={animatedsupport} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SupportSection1;
