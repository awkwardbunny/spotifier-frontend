import React, { useState } from 'react';
import SpotifyWebApi from 'spotify-web-api-node';
import './MainPage.css';

import { APIContext } from './Contexts';
import LoginButton from './LoginButton';
import Spotifier from './Spotifier';

const MainPage = () => {

  const [token, setToken] = useState(localStorage.getItem('token'));
  const logout = () => { localStorage.removeItem('token'); setToken(); };

  const api = new SpotifyWebApi();
  api.setAccessToken(token);

  return (
    <div className="App">
      <header className="App-header">
        {!token && (<LoginButton />)}
        {token && <APIContext.Provider value={api}> <Spotifier logout={logout}/> </APIContext.Provider>}
      </header>
    </div>
  );
};

export default MainPage;
