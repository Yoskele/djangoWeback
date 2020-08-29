import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import BonusPage from "./pages/Bonus";
import CasinoSpel from "./pages/CasinoSpel";
import ArticleDetail from "./pages/ArticleDetail";
const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/casino-bonus/" component={BonusPage} />
      <Route exact path="/casino-spel-slots/" component={CasinoSpel} />
      <Route exact path="/artikel-:slug/" component={ArticleDetail} />
    </Switch>
  );
};

export default Routes;
