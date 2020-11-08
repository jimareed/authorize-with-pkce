import React from 'react';
import './App.css';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import Profile from './Profile';
import Authorize from './Authorize';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Sample react app to login to auth0 using authorize flow with PKCE.
        </p>
        <LoginButton/>
        <LogoutButton/>
        <Profile/>
        <Authorize/>
      </header>
    </div>
  );
}

export default App;
