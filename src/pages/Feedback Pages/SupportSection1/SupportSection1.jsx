import React from "react";
import "./SupportSection1.css";

const SupportSection1 = () => {
  return (
    <>
      <div
        className="row m-0"
        style={{ backgroundColor: "var(--Neutral-White-100)" }}>
        <div className="row d-flex justify-content-between p-0 mb-4 ">
          <div className="col-12 col-md-6 d-flex justify-content-center">
            <div className="col-lg-8 col-11 row mt-5 jumbotron-left">
              <div>
                <h1>Number 1 Fitness & Health Service</h1>
                <p>
                  We are open to all your criticisms and suggestions in order to
                  become the number 1 service.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 p-0 jumbotron-right jumbo-hover d-none d-lg-block">
            <img
              src={
                "https://firebasestorage.googleapis.com/v0/b/graphql-marketplace.appspot.com/o/Animation.svg?alt=media&token=0e923c2c-3d6b-4f4d-819b-21d740af00f7"
              }
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SupportSection1;
