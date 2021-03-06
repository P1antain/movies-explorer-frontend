import React from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Movies from "../Movies/Movies";
import Login from "../Login/Login";
import Register from "../Register/Rigister";
import NotFound from "../NotFound/NotFound";
import Profile from "../Profile/Profile";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import mainApi from "../../utils/MainApi";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import moviesApi from "../../utils/MoviesApi";

function App() {
  const [isPreloader, setPreloader] = React.useState(false);
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [inErrorMoviesApi, setErrorMoviesApi] = React.useState(false);
  const [inErrorSearch, setErrorSearch] = React.useState(false);
  const [inMovies, setMovies] = React.useState([]);
  const [inSearch, setSearch] = React.useState([]);
  const [inResult, setResult] = React.useState([]);
  const [inSavedMovies, setSavedMovies] = React.useState([]);
  const [inDataMovies, setDataMovies] = React.useState([]);
  const [inClickCard, setClickCard] = React.useState(false);
  const [inProfileSave, setProfileSave] = React.useState(false);
  const [inProfileError, setProfileError] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [inError, setError] = React.useState("");
  const [inWindowWidth, setWindowWidth] = React.useState(1180);
  const history = useHistory();

  const onRegister = (data) => {
    console.log(data);
    mainApi
      .register(data.name, data.email, data.password)
      .then(handleResponse)
      .catch(() => {
        setError("Ошибка при регистрации");
      });
  };
  const onLogin = (data) => {
    mainApi
      .login(data.email, data.password)
      .then(handleResponse)
      .catch(() => {
        setError("Ошибка при входе");
      });
  };
  const handleResponse = (data) => {
    setCurrentUser(data);
    setLoggedIn(true);
  };

  const getUserMovies = () => {
    return mainApi
      .getMovies()
      .then((data) => {
        setSavedMovies(data);
        localStorage.setItem("savedMovies", JSON.stringify(data) || []);
      })
      .catch((err) => {
        console.log(err);
        console.log("ошибка тут в getUserMovies");
      });
  };
  React.useEffect(() => {
    if (loggedIn) {
      getUserMovies();
    }
  }, [loggedIn]);
  React.useEffect(() => {
    if (loggedIn) {
      history.push("/movies");
    }
    mainApi
      .getContent()
      .then((data) => {
        setCurrentUser(data);
        setLoggedIn(true);
      })
      .catch((err) => console.log(err));
  }, [loggedIn]);

  React.useEffect(() => {
    if (loggedIn && localStorage.getItem("searchMovies")) {
      setSearch(JSON.parse(localStorage.getItem("searchMovies")));
    }
    if (loggedIn && JSON.parse(localStorage.getItem("searchMoviesDuration"))) {
      setSearch(JSON.parse(localStorage.getItem("searchMoviesDuration")));
    }
    if (loggedIn) {
      return moviesApi
        .getMovies()
        .then((data) => {
          const BASEURL = "https://api.nomoreparties.co";
          const saveCorrect = data.map((item) => {
            return {
              ...item,
              country: item.country ? item.country : "Data unavailable",
              director: item.director,
              duration: item.duration,
              year: item.year,
              description: item.description,
              image: `${BASEURL}${item.image.url}`,
              trailer: item.trailerLink,
              nameRU: item.nameRU,
              nameEN: item.nameEN ? item.nameEN : "Data unavailable",
              thumbnail: `${BASEURL}${item.image.formats.thumbnail.url}`,
              movieId: item.id,
            };
          });
          setMovies(saveCorrect);

          setErrorMoviesApi(false);
        })
        .catch((err) => {
          console.log(err);
          setErrorMoviesApi(true);
        });
    }
  }, [loggedIn]);

  const handleLogOut = () => {
    mainApi
      .endSession()
      .then((data) => {
        console.log(data);
        setLoggedIn(false);
        localStorage.clear();
        localStorage.removeItem("searchMovies");
        localStorage.removeItem("searchMoviesDuration");
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onEdit = (data) => {
    setProfileSave(false);
    setProfileError(false);
    mainApi
      .updateUser(data)
      .then((update) => {
        setCurrentUser({
          name: update.name,
          email: update.email,
        });
        setProfileSave(true);
      })
      .catch((err) => {
        console.log(err);
        setProfileError(true);
      });
    setTimeout(function () {
      setProfileSave(false) || setProfileError(false);
    }, 4500);
  };

  const onSearch = (data) => {
    setPreloader(true);
    const filterMoviesRU = inMovies.filter((movies) => {
      return movies.nameRU.toLowerCase().includes(data.search.toLowerCase());
    });
    const filterMoviesDuration = filterMoviesRU.filter((movies) => {
      return movies.duration <= 40;
    });
    if (!data.checkbox) {
      setSearch(filterMoviesRU);
      localStorage.setItem("searchMovies", JSON.stringify(filterMoviesRU));
      localStorage.removeItem("searchMoviesDuration");
      if (filterMoviesRU.length === 0) {
        setErrorSearch(true);
      } else {
        setErrorSearch(false);
      }
    } else {
      setSearch(filterMoviesDuration);
      localStorage.setItem(
        "searchMoviesDuration",
        JSON.stringify(filterMoviesDuration)
      );
      localStorage.removeItem("searchMovies");
      if (filterMoviesDuration.length === 0) {
        setErrorSearch(true);
      } else {
        setErrorSearch(false);
      }
    }
    setTimeout(function () {
      setPreloader(false);
    }, 500);
  };

  const onSearchSaved = (data) => {
    const filterSave = inDataMovies.filter((movie) => {
      return movie.nameRU.toLowerCase().includes(data.search.toLowerCase());
    });
    setDataMovies(filterSave);
    console.log(filterSave);
  };

  // Получаем размер экрана
  React.useEffect(() => {
    const changeOnResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", changeOnResize);
    changeOnResize();
    return () => window.removeEventListener("resize", changeOnResize);
  }, [inSearch]);

  const calculate = (inWindowWidth) => {
    let startNumber, addNumber;
    if (inWindowWidth > 768) {
      startNumber = 12;
      addNumber = 4;
    } else if (inWindowWidth > 480) {
      startNumber = 8;
      addNumber = 2;
    } else {
      startNumber = 5;
      addNumber = 2;
    }
    return { startNumber, addNumber };
  };

  const handleAddCard = () => {
    if (inClickCard) {
      setClickCard(false);
      const { addNumber } = calculate(inWindowWidth);
      const splicedRender = inSearch.splice(0, addNumber);
      inResult.push(...splicedRender);
    }
  };
  React.useEffect(() => {
    setClickCard(true);
  }, [inClickCard]);

  React.useEffect(() => {
    const { startNumber } = calculate(inWindowWidth);
    const splicedSearch = inSearch.splice(0, startNumber);
    setResult(splicedSearch);
  }, [inSearch]);

  const handleLikeCard = (data) => {
    const item = inSavedMovies.filter(
      (i) => i.movieId === data.movieId || i.movieId === data.id
    );
    if (item.length > 0) {
      handleDeleteCard(item[0]);
    } else {
      mainApi
        .saveMovies(data)
        .then((movie) => {
          const result = [movie, ...inSavedMovies];
          setSavedMovies(result);
          getUserMovies();
        })
        .catch((err) => {
          console.log(err);
          console.log("ошибка тут");
        });
    }
  };

  const handleDeleteCard = (card) => {
    mainApi
      .deleteMovie(card)
      .then((movie) => {
        const result = inSavedMovies.filter(
          (item) => item.movieId !== movie.id && item.movieId !== movie.movieId
        );
        setSavedMovies(result);
        getUserMovies();
        if (inSavedMovies.length === 1) {
          setSavedMovies([])
        }
      })
      .catch((err) => {
        console.log(err);
        console.log("ошибка тут");
      });
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Switch>
          <Route exact path="/">
            <Header loggedIn={loggedIn} />
            <Main />
            <Footer />
          </Route>
          <ProtectedRoute
            path="/movies"
            component={Movies}
            loggedIn={loggedIn}
            ifMovies={true}
            inResult={inResult}
            inSearch={inSearch}
            handleAddCard={handleAddCard}
            onSearch={onSearch}
            isPreloader={isPreloader}
            inErrorMoviesApi={inErrorMoviesApi}
            inErrorSearch={inErrorSearch}
            handleLikeCard={handleLikeCard}
            inSavedMovies={inSavedMovies}
            inDataMovies={inDataMovies}
          />
          <ProtectedRoute
            path="/saved-movies"
            component={Movies}
            inDataMovies={inDataMovies}
            renderApplication
            loggedIn={loggedIn}
            inResult={inResult}
            inSearch={inSearch}
            onSearch={onSearchSaved}
            isPreloader={isPreloader}
            inErrorMoviesApi={inErrorMoviesApi}
            inErrorSearch={inErrorSearch}
            handleLikeCard={handleLikeCard}
            handleDeleteCard={handleDeleteCard}
            inSavedMovies={inSavedMovies}
          />
          <ProtectedRoute
            path="/profile"
            component={Profile}
            loggedIn={loggedIn}
            currentUser={currentUser}
            exitSession={handleLogOut}
            onEdit={onEdit}
            inProfileSave={inProfileSave}
            inProfileError={inProfileError}
          />
          <Route path="/signin">
            <Login onLogin={onLogin} inError={inError} />
          </Route>
          <Route path="/signup">
            <Register onRegister={onRegister} inError={inError} />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
