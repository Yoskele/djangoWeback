import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import BonusPage from "./pages/Bonus";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/casino-bonus/" component={BonusPage} />
    </Switch>
  );
};

export default Routes;
