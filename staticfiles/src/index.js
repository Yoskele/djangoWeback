import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Routes from "./components/routes";
import Navbar from "./components/navbar/Navbar";
const Index = () => {
  return (
    <div>
      <h5 className="text-center navLogo">Casino blogg</h5>
      <BrowserRouter>
        <Navbar />
        <Routes />
      </BrowserRouter>
    </div>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));
