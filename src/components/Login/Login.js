import React from "react";
import AuthPage from "../AuthPage/AuthPage";
import "../AuthPage/Auth.css";

function Login() {
  return (
    <AuthPage
      title="Рады видеть!"
      buttonText="Войти"
      question="Ещё не зарегистрированы?"
      linkFrom="Регистрация"
      path="/signup"
      ifLognin={false}
    >
      <label htmlFor="Email" className="auth__about">
        E-mail
      </label>
      <input
        type="email"
        className="auth__input"
        placeholder="Ваш email"
        required
        id="Email"
      />
      <label htmlFor="Password" className="auth__about">
        Password
      </label>
      <input
        type="password"
        className="auth__input"
        placeholder="Ваш password"
        required
        id="Password"
      />
    </AuthPage>
  );
}

export default Login;
