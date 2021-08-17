import React from "react";
// import { useForm } from "react-hook-form";
import AuthPage from "../AuthPage/AuthPage";
import "../AuthPage/Auth.css";

function Register() {
  return (
    <AuthPage
      title="Добро пожаловать!"
      buttonText="Зарегистрироваться"
      question="Уже зарегистрированы?"
      linkFrom="Войти"
      path="/signin"
      ifLognin={true}
    >
      <label htmlFor="Name" className="auth__about">
        Name
      </label>
      <input
        type="text"
        className="auth__input"
        placeholder="Ваше имя"
        required
        id="Name"
      />
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

export default Register;
