// import axios from 'axios';
// import React, { useState, useEffect } from 'react';
// import { SpotifyApiContext, SpotifyApiAxiosContext } from 'react-spotify-api';
import { authEndpoint, clientId, redirectUri, scopes } from '../config';
import './MainPage.css';

// axios.interceptors.response.use(
//   response => {
//     console.log("B");
//     return response;
//   }, error => {
//     console.log("A");
//     // if(error.response.status === 401 && !error.config._retry){
//     //   error.config._retry = true;
//     //   const access_token = 
//     // }
//     if(error.response.status === 401) {
//       localStorage.clear('token');
//     }
//   }
// );

const MainPage = () => {
  const token = localStorage.getItem('token');

  return (
    // <SpotifyApiAxiosContext.Provider value={axios}>
      // <SpotifyApiContext.Provider value={token}>
        <div className="App">
          <header className="App-header">
            {!token && (
              <a
              className="btn btn--loginApp-link"
              href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`}
              >Login to Spotify</a>
            )}

            {token && (
              <h1>Logged in</h1>
              // <SpotifyPlayer token={localStorage.getItem('token')} uris={["spotify:track:4cOdK2wGLETKBW3PvgPWqT"]} />
            )}
          </header>
        </div>
      // </SpotifyApiContext.Provider>
    // </SpotifyApiAxiosContext.Provider>
  );
};

export default MainPage;
