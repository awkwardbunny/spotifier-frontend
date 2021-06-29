import React from 'react';
import { useCookies } from 'react-cookie';
import './App.css';

import { Spotifier } from './components';

const App = () => {
  
  const [cookies, setCookie, removeCookie] = useCookies(['jwt'])
  const logout = () => { removeCookie("jwt") }
  const refresh = (v) => { setCookie("jwt", v) }
  
  return (
    <div className="App">
      <header className="App-header">
        {!cookies.jwt && 
          <a className="btn btn--loginApp-link" href="/api/auth">
            Login to Spotify
          </a>
        }
        {cookies.jwt && <Spotifier logout={logout} refresh={refresh} />}
      </header>
    </div>
  );
};

export default App;