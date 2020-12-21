import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import NoMatchPage from "../pages/NoMatchPage";
import Pacientes from "../pages/Pacientes";
import Profissionais from "../pages/Profissionais";
import Marcacoes from "../pages/Marcacoes";

const Routes = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/Pacientes/' component={Pacientes} />
    <Route exact path='/Profissionais/' component={Profissionais} />
    <Route exact path='/Marcacoes/' component={Marcacoes} />
    <Route component={NoMatchPage} />
  </Switch>
);

export default Routes;
