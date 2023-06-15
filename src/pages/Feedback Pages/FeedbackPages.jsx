import React from "react";
import HeaderLanding from "../../components/Header/HeadearLanding";
import FooterFeedback from "../../components/FooterLanding/FooterFeedback";
import SupportSection1 from "./SupportSection1/SupportSection1";
import SupportSection2 from "./SupportSection2/SupportSection2";

const FeedbackPages = () => {
  return (
    <div style={{ backgroundColor: "var(--Neutral-White-100)" }}>
      <HeaderLanding />
      <div className="mb-5 mt-5">
      <SupportSection1/>
      </div>
      <div className="mb-5 mt-5">
      <SupportSection2/>
      </div>
      <FooterFeedback />
    </div>
  );
};

export default FeedbackPages;
