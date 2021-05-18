export const server =
  process.env.REACT_APP_ENV === 'production'
    ? 'https://qanda-aurzin-backend.azurewebsites.net'
    : process.env.REACT_APP_ENV === 'staging'
    ? 'https://qanda-aurzin-backend-staging.azurewebsites.net/'
    : 'http://localhost:5000';

export const webAPIUrl = `${server}/api`;

export const authSettings = {
  domain: 'dev-aurzin.eu.auth0.com',
  client_id: 'OprdgCF6w1WEy4kyYZCZEYESLfg9DNhg',
  redirect_uri: window.location.origin + '/signin-callback',
  scope: 'openid profile QandAAPI email',
  audience: 'https://qanda',
};
