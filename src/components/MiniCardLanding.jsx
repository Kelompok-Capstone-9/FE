const MiniCardLanding = () => {
  return (
    <>
      <div
        className="card text-center container miniCardLanding rounded-4 shadow"
        style={{ width: "25vw" }}>
        <div className="card-body">
          <p className="card-title miniCardLandingTitle fs-4 fw-bold">
            Haven't found an answer to your question?
          </p>
          <p className="card-text miniCardLandingBody fw-medium">
            Connect with us either on WhatsApp or email us
          </p>
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
