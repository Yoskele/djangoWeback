import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import BonusPage from "./pages/Bonus";
import CasinoSpel from "./pages/CasinoSpel";
const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/casino-bonus/" component={BonusPage} />
      <Route exact path="/casino-spel-slots/" component={CasinoSpel} />
    </Switch>
  );
};

export default Routes;
