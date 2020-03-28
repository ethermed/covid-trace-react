import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from './ui/Home';

export const Routes = () => (
  <Router>
    <Switch>
      <Route path="/" render={() => <Home />}/>
    </Switch>
  </Router>
);
