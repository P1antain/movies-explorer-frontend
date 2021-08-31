import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import AuthPage from "../AuthPage/AuthPage";
import "../AuthPage/Auth.css";
import { schemaSearch } from "../../utils/Constants";

function Register({ onRegister, inError }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schemaSearch),
    mode: "onChange",
  });
  const onSubmit = (data) => {
    onRegister(data);
    console.log(data);
  };
  return (
    <AuthPage
      title="Добро пожаловать!"
      buttonText="Зарегистрироваться"
      question="Уже зарегистрированы?"
      linkFrom="Войти"
      path="/signin"
      ifLognin={true}
    >
      <form className="authPage__form" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="Name" className="auth__about">
          Name
        </label>
        <input
          type="name"
          className="auth__input"
          placeholder="Ваше name"
          id="Name"
          {...register("name", { required: true })}
        />

        <span className="authPage__error">{errors.name?.message}</span>

        <label htmlFor="Email" className="auth__about">
          E-mail
        </label>
        <input
          type="email"
          className="auth__input"
          placeholder="Ваш email"
          id="Email"
          autoComplete="off"
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
          id="Password"
          autoComplete="off"
          {...register("password")}
        />
        <span className="authPage__error">{errors.password?.message}</span>
        <span className="authPage__error">{inError}</span>
        <button
          className={`authPage__btn ${isValid ? "authPage__btn_disable" : ""}`}
          type="submit"
          disabled={!isValid}
        >
          Регистрация
        </button>
      </form>
    </AuthPage>
  );
}

export default Register;
