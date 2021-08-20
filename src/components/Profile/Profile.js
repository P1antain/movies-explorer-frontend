import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./Profile.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import Header from "../Header/Header";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaEdit } from "../../utils/Constants";

function Profile({ exitSession, onEdit }) {
  const currentUser = React.useContext(CurrentUserContext);
  const { name, email } = currentUser;
  const {
    register,
    handleSubmit,
    formState: { isValid, isDirty, errors },
  } = useForm({
    resolver: yupResolver(schemaEdit),
    mode: "onChange",
  });

  function handleLogOut() {
    exitSession();
  }
  const onSubmit = (data) => {
    onEdit(data);
    console.log(data);
  };
  return (
    <>
      <Header ifLoginIn={true} />
      <div className="profile">
        <h2 className="profile__name">Привет, {name}!</h2>
        <form className="profile__form" onSubmit={handleSubmit(onSubmit)}>
          <div className="profile__more">
            <label className="profile__about">Имя</label>
            <input
              className="profile__info"
              defaultValue={name}
              {...register("name")}
            />
            <span className="profile__error">{errors.name?.message}</span>
          </div>
          <div className="profile__more">
            <label className="profile__about">E-mail</label>
            <input
              className="profile__info"
              defaultValue={email}
              {...register("email")}
            />
            <span className="profile__error">{errors.email?.message}</span>
          </div>
          <button className="profile__edit" type="submit" disabled={!isValid}>
            Редактировать
          </button>
        </form>

        <button
          className="profile__exit"
          onClick={handleLogOut}
        >
          Выйти из аккаунта
        </button>
      </div>
    </>
  );
}

export default Profile;
