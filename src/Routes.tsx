import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./ui/Home";
import { PersonContainer } from "./ui/Person/PersonContainer";

export const Routes = () => (
  <Router>
    <Switch>
      <Route
        exact={true}
        path="/person/:id"
        render={routerProps => (
          <PersonContainer id={routerProps.match.params.id} />
        )}
      />
      }
      <Route path="/" exact={true} render={() => <Home />} />
    </Switch>
  </Router>
);
