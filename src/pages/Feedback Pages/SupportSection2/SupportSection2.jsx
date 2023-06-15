import React from "react";
import supportadmin from "../../../assets/img/Admin vector.svg";
import FeedbackForm from "../../../components/FeedbackForm/FeedbackForm";

const SupportSection2 = () => {
  return (
    <>
      <div
        className="row m-0"
        style={{ backgroundColor: "var(--Neutral-White-100)" }}>
        <div className="d-none d-lg-flex col col-lg-10  align-items-center justify-content-end ">
          <img src={supportadmin} alt="" />
        </div>
        <div className="d-flex d-lg-none col col-lg-12  justify-content-end">
          <img src={supportadmin} alt="" style={{ width: "100vw" }} />
        </div>

        <div className="row d-flex container justify-content-between">
          <FeedbackForm />
        </div>
      </div>
    </>
  );
};

export default SupportSection2;
