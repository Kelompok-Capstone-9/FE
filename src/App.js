import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./App.css";
import MainLanding from "./pages/Landing Pages/mainLanding";
import { Route, Routes, useNavigate } from "react-router-dom";
import FeedbackPages from "./pages/Feedback Pages/FeedbackPages";
import { Link, animateScroll as scroll } from "react-scroll";
import HeaderLanding from "./components/Header/HeadearLanding";
function App() {
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/");
    scroll.scrollToTop();
  };
  return (
    <>
      <div
        className="h-100 w-100"
        style={{ backgroundColor: "var(--Neutral-White-100)" }}>
        {/* <BrowserRouter> */}
        <HeaderLanding
          logoButton={
            <>
              <Link
                to="/"
                className="btn d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
                onClick={onClick}>
                {/* <NavLink to={"/"} className={"text-decoration-none"}> */}
                <span
                  className="fs-4 fw-bolder"
                  style={{ color: "var(--primary-600)" }}>
                  GoFit
                </span>
                {/* </NavLink> */}
              </Link>
            </>
          }
        />
        <Routes>
          <Route path="/" element={<MainLanding />} />
          <Route path="/feedback" element={<FeedbackPages />} />
        </Routes>
        {/* </BrowserRouter> */}
      </div>
    </>
  );
}

export default App;
