// TODO: We'd later on change these depending on the ENV
// We'd have a staging and production environment depending on where we deploy
export const baseURL = 'http://localhost:3000';
export const namespace = '/api/v1';

export function getApiKeyFromActiveUser() {
  if (localStorage.getItem('active-user')) {
    return JSON.parse(localStorage.getItem('active-user'))['api-key'];
  }
  return null;
}

export const authenticationHeader = {
  headers: {
    Authorization: `Bearer ${getApiKeyFromActiveUser()}`,
  },
};

export function updateAuthenticationHeader(token) {
  authenticationHeader.headers = { Authorization: `Bearer ${token}` };
}
