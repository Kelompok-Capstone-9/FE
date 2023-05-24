import React from "react";
import "./CardLandingPage.css"
import "bootstrap/dist/css/bootstrap.min.css";

const CardLandingPage = ({imageUrl, title, alt, id}) => {
  return (
    <div>
      <div className="card bg-danger text-white" id={id}>
        <img
          src={imageUrl}
          className={"card-img"}
          alt={alt}
        />
        <div className="card-img-overlay">
          <h5 className="card-title title-style">{title}</h5>
        </div>
      </div>
    </div>
  );
};

export default CardLandingPage;
