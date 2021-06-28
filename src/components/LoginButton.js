import React from 'react';
import config from 'react-global-configuration';

const LoginButton = () => {
  return (
    <a
      className="btn btn--loginApp-link"
      href={`${config.get('authEndpoint')}?client_id=${config.get('clientId')}&redirect_uri=${config.get('redirectUri')}&scope=${config.get('scopes').join("%20")}&response_type=token&show_dialog=true`}
    >
      Login to Spotify
    </a>

  );
}

export default LoginButton;