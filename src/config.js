export const authEndpoint = 'https://accounts.spotify.com/authorize';

export const clientId = "767412e331ca4d92bf7641e64ac7613b";
export const redirectUri = "https://listen.bhong.dev/callback";
export const scopes = [
  "streaming",
  "user-read-email",
  "user-read-private",
  // "user-read-currently-playing",
  "user-read-playback-state",
  "user-modify-playback-state",
  "user-library-read",
  "user-library-modify"
];