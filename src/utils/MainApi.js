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
      credentials: "include",
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
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    }).then(this._checkResponse);
  }
  getContent() {
    return fetch(`${this._url}/users/me`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(this._checkResponse);
  }
  endSession() {
    return fetch(`${this._url}/signout`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(this._checkResponse);
  }
  updateUser(data) {
    return fetch(`${this._url}/users/me`, {
      method: "PATCH",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    }).then(this._checkResponse);
  }
  getMovies(){
    return fetch(`${this._url}/users/me`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(this._checkResponse);
  }
  saveMovies(data){
    return fetch(`${this._url}/movies`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        movieId: data.id,
        country: data.country,
        director: data.director,
        duration: data.duration,
        year: data.year,
        description: data.description,
        image: data.image,
        trailer: data.trailer,
        nameRU: data.nameRU,
        nameEN: data.nameEN,
        thumbnail: data.thumbnail,
      })
    }).then(this._checkResponse);
  }
  deleteMovie(item) {
    return fetch(`${this._url}/movies/${item._id}`, {
      method: "DELETE",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(this._checkResponse);
  }
}

const mainApi = new MainApi({
  url: "http://localhost:3000",
  // url: "https://p1antain.api.nomoredomains.club",
});

export default mainApi;
