import React from "react";
import { Route, Switch } from "react-router-dom";
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
import { CurrentUserContext } from "../../contexts/CurrentUserContext ";

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  function onRegister(){
    console.log('hello from Register')
  }
  function onLogin(){
    console.log('hello from Login')
  }
  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Switch>
          <Route exact path="/">
            <Header ifLoginIn={false} />
            <Main />
            <Footer />
          </Route>
          <ProtectedRoute path="/movies" loggedIn={loggedIn}>
            <Header ifLoginIn={true} />
            <Movies ifMovies={true} />
            <Footer />
          </ProtectedRoute>
          <ProtectedRoute path="/saved-movies">
            <Header ifLoginIn={true} />
            <Movies />
            <Footer />
          </ProtectedRoute>
          <ProtectedRoute path="/profile">
            <Header ifLoginIn={true} />
            <Profile name="Vasya" />
          </ProtectedRoute>
          <Route path="/signin">
            <Login
                onLogin={onLogin}
            />
          </Route>
          <Route path="/signup">
            <Register
                onRegister={onRegister}
            />
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
