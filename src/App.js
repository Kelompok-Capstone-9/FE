// import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./App.css";
// import LandingPageJumbotron from "./pages/Landing Pages/Jumbotron/LandingPageJumbotron";
// import DownloadApp from "./pages/Landing Pages/DownloadApp/DownloadApp";
// import FooterLanding from "./components/FooterLanding/FooterLanding";
// import HeaderLanding from "./components/Header/HeadearLanding";
// import CardHeader from "./components/Header/CardHeader";
// import MiniCardLanding from "./components/MiniCardLanding/MiniCardLanding";
// import bg from "./assets/icons/Category.svg";
// import TestimoniCarousel from "./pages/Landing Pages/TestimoniCarousel/TestimoniCarousel";
// import Section3LandingPage from "./pages/Landing Pages/Section3LandingPage/Section3LandingPage";
import MainsLanding from "./pages/Landing Pages/MainsLanding";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FeedbackPages from "./pages/Feedback Pages/FeedbackPages";

function App() {
  return (
    <Router>
      <div
        className="mainContainer"
        style={{ backgroundColor: "var(--Neutral-White-100)" }}
      >
        <Routes>
          <Route path="/" exact element={<MainsLanding />} />
          <Route path="/support" exact element={<FeedbackPages />} />
          <Route />
          <Route />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
