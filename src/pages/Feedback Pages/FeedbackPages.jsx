import React from "react";
import FooterFeedback from "../../components/FooterLanding/FooterFeedback";
import SupportSection1 from "./SupportSection1/SupportSection1";
import SupportSection2 from "./SupportSection2/SupportSection2";

const FeedbackPages = () => {
  return (
    <>
      <div className="mb-5 mt-5">
        <SupportSection1 />
      </div>
      <div className="mb-5 mt-5">
        <SupportSection2 />
      </div>
      <FooterFeedback />
    </>
  );
};

export default FeedbackPages;
