import HeaderLanding from "./components/HeadearLanding";
// import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./App.css";
import FooterLanding from "./components/FooterLanding";
import MiniCardLanding from "./components/MiniCardLanding";
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
    <>
      <HeaderLanding />
      <div className="m-0 m-auto">
        <MiniCardLanding />
      </div>
      <FooterLanding />
    </>
  );
}

export default App;
