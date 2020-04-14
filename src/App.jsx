import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

import Login from "./Components/Login";
import Callback from "./Components/Callback";

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={Login} />
      <Route path="/callback" component={Callback} />
    </Router>
  );
};

export default App;
