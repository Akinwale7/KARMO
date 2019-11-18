import React from "react";
import User from "./Users.tsx";
import Contact from "./Contact";
import LoginPage from "./Home";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

import "./app.less";

const App = props => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LoginPage} />
        <Route path="/user" component={User} />
        <Route path="/con" component={Contact} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
