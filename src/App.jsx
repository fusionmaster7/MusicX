import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Login from "./Components/Login";
import Callback from "./Components/Callback";
import Dashboard from "./Components/Dashboard/Dashboard";
import Store from "./Store/Context";

const App = () => {
  return (
    <Store>
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/callback" component={Callback} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    </Store>
  );
};

export default App;
