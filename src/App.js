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

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer">
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div style={{backgroundColor:'var(--Neutral-White-100)'}}>
      <HeaderLanding/>
      <LandingPageJumbotron/>
      <MiniCardLanding/>
      <DownloadApp/>
      <div style={{marginTop:'20vh'}}>
        <FooterLanding/>
      </div>
    </div>
  );
}

export default App;
