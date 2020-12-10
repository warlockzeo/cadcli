import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import NoMatchPage from "../pages/NoMatchPage";

const Routes = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route component={NoMatchPage} />
  </Switch>
);

export default Routes;
