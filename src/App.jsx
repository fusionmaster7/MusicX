import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Login from "./Components/Login";
import Callback from "./Components/Callback";
import Store from "./Store/Context";

const App = () => {
  return (
    <Store>
      <Router>
        <Route exact path="/" component={Login} />
        <Route path="/callback" component={Callback} />
      </Router>
    </Store>
  );
};

export default App;
