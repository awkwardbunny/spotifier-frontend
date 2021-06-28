export const DevConfig = {
  authEndpoint: 'https://accounts.spotify.com/authorize',
  clientId: '767412e331ca4d92bf7641e64ac7613b',
  redirectUri: "http://localhost:3000/callback",
  scopes: [
    "streaming",
    "user-read-email",
    "user-read-private",
    // "user-read-currently-playing",
    "user-read-playback-state",
    "user-modify-playback-state",
    "user-library-read",
    "user-library-modify"
  ]
}

export const ProdConfig = {
  authEndpoint: 'https://accounts.spotify.com/authorize',
  clientId: '767412e331ca4d92bf7641e64ac7613b',
  redirectUri: "https://listen.bhong.dev/callback",
  scopes: [
    "streaming",
    "user-read-email",
    "user-read-private",
    // "user-read-currently-playing",
    "user-read-playback-state",
    "user-modify-playback-state",
    "user-library-read",
    "user-library-modify"
  ]
}