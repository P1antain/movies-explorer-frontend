import React, {useEffect} from "react";
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

  useEffect(() =>{
    checkToken()
  }, [])

  const handleResponse = (res) => {
    localStorage.setItem("jwt", res.token);
    setLoggedIn(true);
    history.push("/movies");
  };
  function onRegister(data) {
    mainApi
      .register(data.name, data.email, data.password)
      .then(handleResponse)
      .catch(() => {
        setError("Ошибка при регистрации");
      });
  }
  function onLogin(data) {
    mainApi
      .login(data.email, data.password)
      .then(handleResponse)
      .catch(() => {
        setError("Ошибка при регистрации");
      });
  }
  const checkToken = () => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      mainApi
          .getContent(jwt)
          .then((data) => {
            setCurrentUser(data)
            setLoggedIn(true)
            history.push('/movies')
          })
          .catch((err) => {
            console.log(err)
          })
    }
  }
  function handleLogOut(){
    mainApi
        .endSession()
        .then(()=>{
          console.log('heeeelloo')
        })
        .catch((err)=>
        {
          console.log(err)
        })
    // localStorage.clear()
    // history.push('/')
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
          />
          <Route path="/signin">
            <Login onLogin={onLogin} />
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
