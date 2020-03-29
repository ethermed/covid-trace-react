import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./ui/Home";
import { PersonContainer } from "./ui/Person/PersonContainer";
import { HeatMapContainer } from "./ui/HeatMap/HeatMapContainer";

export const Routes = () => (
  <Router>
    <Switch>
      <Route
        exact={true}
        path="/person/:id"
        render={(routerProps) => {
          return <PersonContainer id={routerProps.match.params.id} />;
        }}
      />
      }
      <Route path="/heatmap" render={() => <HeatMapContainer />} />
      <Route path="/" exact={true} render={() => <Home />} />
    </Switch>
  </Router>
);
