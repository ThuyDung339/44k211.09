import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Login } from "../containers/auth/Login";
import {Register} from "../containers/auth/Register";
import PublicRoute from "./public-route";
import PrivateRoute from "./private-route";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <PublicRoute path="/login" exact component={Login} />
        <PublicRoute path="/register" exact component={Register} />
        <PrivateRoute path="/" />
      </Switch>
    </Router>
  );
}
