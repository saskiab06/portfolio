import React, { useState, useEffect } from "react";
import FrontPage from "./components/FrontPage";
import Works from "./components/Works";
import ArrowLeft from "./components/ArrowLeft";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

export default function App() {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route exact path="/works">
            <Works />
            <ArrowLeft />
          </Route>
          <Route exact path="/">
            <FrontPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
