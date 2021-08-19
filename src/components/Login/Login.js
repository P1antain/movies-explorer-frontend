import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import AuthPage from "../AuthPage/AuthPage";
import "../AuthPage/Auth.css";
import {schemaLogin} from '../../utils/Constants'

function Login({ onLogin }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schemaLogin),
    mode: "onChange",
  });
  const onSubmit = (data) => {
    onLogin(data);
    console.log(data)
  };
  return (
    <AuthPage
      title="Рады видеть!"
      buttonText="Войти"
      question="Ещё не зарегистрированы?"
      linkFrom="Регистрация"
      path="/signup"
      ifLognin={false}
    >
      <form className="authPage__form" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="Email" className="auth__about">
          E-mail
        </label>
        <input
            type="email"
            className="auth__input"
            placeholder="Ваш email"
            required
            id="Email"
            {...register("email")}
        />
        <span className="authPage__error">{errors.email?.message}</span>

        <label htmlFor="Password" className="auth__about">
          Password
        </label>
        <input
            type="password"
            className="auth__input"
            placeholder="Ваш password"
            required
            {...register("password")}
        />
        <span className="authPage__error">{errors.password?.message}</span>

        <span className="authPage__error">
          Что-то пошло не так...
        </span>
        <button className={`authPage__btn ${isValid? 'authPage__btn_disable' : ''}`} type="submit" disabled={!isValid}>
          Войти
        </button>
        </form>
    </AuthPage>
  )
}

export default Login;
