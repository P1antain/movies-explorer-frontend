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

function App() {
  return (
    <div className="page">
      <Switch>
        <Route exact path="/">
          <Header ifLoginIn={false} />
          <Main />
          <Footer />
        </Route>
        <Route path="/movies">
          <Header ifLoginIn={true} />
          <Movies ifMovies={true} />
          <Footer />
        </Route>
        <Route path="/saved-movies">
          <Header ifLoginIn={true} />
          <Movies />
          <Footer />
        </Route>
        <Route path="/signin">
          <Login />
        </Route>
        <Route path="/signup">
          <Register />
        </Route>
        <Route path="/profile">
          <Header ifLoginIn={true} />
          <Profile name="Vasya" />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
