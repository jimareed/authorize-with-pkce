import React from 'react';
import './App.css';
import Authorize from './Authorize';
import AuthRedirect from './AuthRedirect';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Authorize />
        </Route>
        <Route path="/callback">
          <AuthRedirect />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;