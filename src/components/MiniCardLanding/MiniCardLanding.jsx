import "./MiniCardLanding.css";

const MiniCardLanding = () => {
  return (
    <>
      <div className="card text-center container miniCardLanding rounded-4 shadow col-lg-6">
        <div className="card-body">
          <p className="card-title miniCardLandingTitle fs-4 fw-bold">
            Haven't found an answer to your question?
          </p>

          <div className="d-none d-lg-flex col-12 card-text miniCardLandingBody fw-medium  align-items-center justify-content-center fs-5">
            <p>Connect with us either on WhatsApp or email us</p>
          </div>
          <div className="d-lg d-lg-none col-12 card-text miniCardLandingBody fw-medium d-flex align-items-center justify-content-center">
            <p>Connect with us either on WhatsApp or email us</p>
          </div>
          <div className="row">
            <div className="col-6">
              <button className="btnMiniCard1">Ask on WhatsApp</button>
            </div>
            <div className="col-6">
              <button className="btnMiniCard2">Join Member</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MiniCardLanding;
