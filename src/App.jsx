import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Login from "./Components/Login";
import Callback from "./Components/Callback";
import Dashboard from "./Components/Dashboard";
import Store from "./Store/Context";

const App = () => {
  return (
    <Store>
      <Router>
        <Route exact path="/" component={Login} />
        <Route path="/callback" component={Callback} />
        <Route path="/dashboard" component={Dashboard} />
      </Router>
    </Store>
  );
};

export default App;
