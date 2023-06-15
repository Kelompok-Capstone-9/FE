import React from "react";
import supportadmin from "../../../assets/img/Admin vector.svg";
import FeedbackForm from "../../../components/FeedbackForm/FeedbackForm";

const SupportSection2 = () => {
  return (
    <>
      <div
        className="row m-0"
        style={{ backgroundColor: "var(--Neutral-White-100)" }}
      >
        <div className="row d-flex justify-content-between p-0 mb-4">
          <div className="col-12 col-md-6 d-flex justify-content-end">
            {/* <img src={supportadmin} alt="" /> */}
          </div>

          <div
            className="col-12 col-md-6 p-0 d-flex jumbotron-left"
            style={{ paddingRight: "75px" }}
          >
            <img src={supportadmin} alt="" />
          </div>
        </div>

        <div className="row d-flex container justify-content-between">
            <FeedbackForm/>
        </div>
      </div>
    </>
  );
};

export default SupportSection2;
