import React from 'react';
import './App.css';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import Profile from './Profile';
import Authorize from './Authorize';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/callback">
            <Callback />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {

  return  <div className="App">
      <header className="App-header">
        <p>
          Sample react app to login to auth0 using authorize flow with PKCE.
        </p>
        <LoginButton/>
        <LogoutButton/>
        <Profile/>
        <Authorize/>
      </header>
    </div>;

}

function Callback() {
  return <h2>Callback</h2>;
}

export default App;
