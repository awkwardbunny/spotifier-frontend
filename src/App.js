import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import { MainPage, CallbackPage } from "./components";
import { createBrowserHistory } from "history";

const App = () => {
  return (
    <React.StrictMode>
      <Router history={createBrowserHistory()}>
        <Switch>
          <Route path="/callback" component={CallbackPage} />
          <Route component={MainPage} />
        </Switch>
      </Router>
    </React.StrictMode>
  );
};

export default App;