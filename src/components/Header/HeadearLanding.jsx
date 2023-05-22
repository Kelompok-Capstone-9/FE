import membership from "../../assets/icons/membership.svg";
import workOut from "../../assets/icons/workout video.svg";
import topnews from "../../assets/icons/top news.svg";
import offlineclass from "../../assets/icons/offline class.svg";
import onlineclass from "../../assets/icons/online class.svg";
import facilities from "../../assets/icons/facilities.svg";
import expandmore from "../../assets/icons/expand_more.svg";
import CardHeader from "./CardHeader";
import "./HeadearLanding.css";
const HeaderLanding = () => {
  return (
    <>
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 shadow sticky-top">
        <div className="container">
          <div className="row w-100">
            <div className="col-9 text-start ">
              <a
                href="/"
                className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                <span className="fs-4 fw-bolder ">Logo</span>
              </a>
            </div>
            <div className="col-3">
              <ul className="nav nav-pills">
                <div className="row">
                  <div className="col-6">
                    <li className="nav-item">
                      {/* dropdown */}
                      <div className="btn-group">
                        <button
                          className="buttonHeader fw-semibold"
                          //   style={{
                          //     backgroundColor: buttonOnClick
                          //       ? "#ffa83f"
                          //       : "transparent",
                          //   }}
                          //   onClick={() => {
                          //     setButtonOnClick(!buttonOnClick);
                          //   }}
                          type="button"
                          data-bs-toggle="dropdown">
                          Pages
                          <img
                            className="ms-3"
                            src={expandmore}
                            alt=""
                            width={"11vw"}
                          />
                        </button>
                        <ul className="dropdown-menu pt-2 shadow">
                          <li style={{ width: "35vw" }}>
                            <div className="">
                              <div className="row">
                                <div className="col-12">
                                  <div className="row">
                                    <div className="col-6">
                                      <CardHeader
                                        icon={
                                          <img
                                            className="ms-2"
                                            src={membership}
                                            alt=""
                                            width={"45vw"}
                                          />
                                        }
                                        header={"Membership"}
                                        paragraph={
                                          "Get limited to all features"
                                        }
                                      />
                                    </div>
                                    <div className="col-6">
                                      <CardHeader
                                        icon={
                                          <img
                                            className="ms-2"
                                            src={workOut}
                                            alt="work out video"
                                            width={"45vw"}
                                          />
                                        }
                                        header={"Work Out Video"}
                                        paragraph={"Watch all videos"}
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-12">
                                  <div className="row">
                                    <div className="col-6">
                                      <CardHeader
                                        icon={
                                          <img
                                            className="ms-2"
                                            src={offlineclass}
                                            alt="work out video"
                                            width={"45vw"}
                                          />
                                        }
                                        header={"Offline Class"}
                                        paragraph={"Join class variety"}
                                      />
                                    </div>
                                    <div className="col-6">
                                      <CardHeader
                                        icon={
                                          <img
                                            className="ms-2"
                                            src={topnews}
                                            alt=""
                                            width={"45vw"}
                                          />
                                        }
                                        header={"Top News"}
                                        paragraph={"Healthy recipes & tips"}
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-12">
                                  <div className="row">
                                    <div className="col-6">
                                      <CardHeader
                                        icon={
                                          <img
                                            className="ms-2"
                                            src={onlineclass}
                                            alt=""
                                            width={"45vw"}
                                          />
                                        }
                                        header={"Online Class"}
                                        paragraph={"Keep healthy"}
                                      />
                                    </div>
                                    <div className="col-6">
                                      <CardHeader
                                        icon={
                                          <img
                                            className="ms-2"
                                            src={facilities}
                                            alt="work out video"
                                            width={"45vw"}
                                          />
                                        }
                                        header={"Facilities"}
                                        paragraph={"Complete facilities"}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </div>
                  <div className="col-6">
                    {/* <NavLink> */}
                    <li className="nav-item link-dark ">
                      <button
                        className="buttonHeader fw-semibold"
                        type="button"
                        aria-expanded="false">
                        Support
                      </button>
                    </li>
                    {/* </NavLink> */}
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default HeaderLanding;
