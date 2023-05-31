import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./App.css";
import LandingPageJumbotron from "./pages/Landing Pages/Jumbotron/LandingPageJumbotron";
import DownloadApp from "./pages/Landing Pages/DownloadApp/DownloadApp";
import FooterLanding from "./components/FooterLanding/FooterLanding";
import HeaderLanding from "./components/Header/HeadearLanding";
import CardHeader from "./components/Header/CardHeader";
import MiniCardLanding from "./components/MiniCardLanding/MiniCardLanding";
import bg from './assets/icons/Category.svg'
import TestimoniCarousel from "./pages/Landing Pages/TestimoniCarousel/TestimoniCarousel";

function App() {
  return (
    <div style={{backgroundColor:'var(--Neutral-White-100)'}}>
      <HeaderLanding/>
      <LandingPageJumbotron/>
      <TestimoniCarousel/>
      <div className="mb-5 mt-5">
        <MiniCardLanding/>
      </div>
      <DownloadApp/>
      <div style={{marginTop:'20vh'}}>
        <FooterLanding/>
      </div>
    </div>
  );
}

export default App;
