import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./ui/Home";
import { PeopleContainer } from "./ui/People/PeopleContainer";

export const Routes = () => (
  <Router>
    <Switch>
      <Route path="/" render={() => <Home />} />
      <Route path="/people" render={() => <PeopleContainer />} />}
    </Switch>
  </Router>
);
