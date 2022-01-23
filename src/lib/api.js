const BASE_URL = "https://api.github.com";

export function getUsers() {
  return fetch(`${BASE_URL}/users`, {
    headers: new Headers({
      "Accept": 'application/vnd.github.v3+json'
    })
  })
}

export function getUserDetail(username) {
  return fetch(`${BASE_URL}/users/${username}`, {
    headers: new Headers({
      "Accept": 'application/vnd.github.v3+json'
    })
  });
}