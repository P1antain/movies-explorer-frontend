class MainApi {
  constructor({ url }) {
    this._url = url;
  }
  _checkResponse(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }
  register(name, email, password) {
    return fetch(`${this._url}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    }).then(this._checkResponse);
  }
  login(email, password) {
    return fetch(`${this._url}/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    }).then(this._checkResponse);
  }
  getContent(token) {
    return fetch(`${this._url}/users/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    }).then(this._checkResponse);
  }
  endSession(){
    return fetch(`${this._url}/signout`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(this._checkResponse);
  }
}

const mainApi = new MainApi({
  url: "http://p1antain.api.nomoredomains.club",
  // url: "http://localhost:3000",
});

export default mainApi;
