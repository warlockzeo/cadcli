import React from "react";
import { Route, Switch } from "react-router-dom";

import PrivateRoute from "./PrivateRoute";

// import Home from "./pages/Home";
// import NoMatchPage from "./pages/NoMatchPage";

const Routes = () => (
  <Switch>
    {/* <PrivateRoute exact path='/' component={Home} />
    <Route component={NoMatchPage} /> */}
  </Switch>
);

export default Routes;
