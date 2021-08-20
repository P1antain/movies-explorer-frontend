import React, { useEffect } from "react";
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

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [inError, setError] = React.useState("");
  const history = useHistory();

  const handleResponse = (data) => {
    const { jwt } = data;
    localStorage.setItem("jwt", jwt);
    setCurrentUser(data);
    setLoggedIn(true);
    history.push("/movies");
  };
  const onRegister = (data) => {
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
        setError("Ошибка при регистрации");
      });
  };
  const checkToken = () => {
    if (localStorage.getItem("jwt")) {
      setLoggedIn(true);
      history.push("/profile");
    }
  };
  const getData = () => {
    mainApi
      .getContent()
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((err) => console.log(err));
  };
  React.useEffect(() => {
    checkToken();
    if(loggedIn) {
      getData()
    }
  }, [loggedIn]);

  const handleLogOut = () => {
    localStorage.clear();
    history.push("/");
  };

  const onEdit = () => {
    console.log('hi')
  }

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Switch>
          <Route exact path="/">
            <Header loggedIn={false} />
            <Main />
            <Footer />
          </Route>
          <ProtectedRoute
            path="/movies"
            component={Movies}
            loggedIn={loggedIn}
            ifMovies={true}
          />
          <ProtectedRoute
            path="/saved-movies"
            component={Movies}
            loggedIn={loggedIn}
          />
          <ProtectedRoute
            path="/profile"
            component={Profile}
            loggedIn={loggedIn}
            currentUser={currentUser}
            exitSession={handleLogOut}
            onEdit={onEdit}
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
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
