import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SelectedPage from "./pages/SelectedPage";
import YearlyPage from "./pages/YearlyPage";
import ResultPage from "./pages/ResultPage";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={ResultPage} />
        <Route path="/yearly" component={YearlyPage} />
        <Route path="/selected" component={SelectedPage} />
      </Switch>
    </Router>
  );
};

export default App;
