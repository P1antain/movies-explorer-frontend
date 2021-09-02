class MoviesApi {
  constructor({ url }) {
    this._url = url;
  }
  _checkResponse(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }
  getMovies() {
    return fetch(`${this._url}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(this._checkResponse);
  }
}

const moviesApi = new MoviesApi({
  url: "https://api.nomoreparties.co/beatfilm-movies",
});
export default moviesApi;
