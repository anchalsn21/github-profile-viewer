import React, { useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function App(props) {
  return (
    <Router>
      <Switch>
        <Route path="/" exact render={(p) => <Login {...p} />} />
        <Route path="/:user" render={(p) => <Dashboard {...p} />} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
