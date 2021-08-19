import React, { useState } from "react";
import "./Profile.css";
import Header from "../Header/Header";

function Profile({ currentUser, exitSession }) {
  const [isEdit, setEdit] = useState(false);
  const { name, email } = currentUser;
  function toggleEdit() {
    setEdit(!isEdit);
  }
  function handleLogOut(){
    exitSession()
  }
  return (
    <>
      <Header ifLoginIn={true}/>
      <div className="profile">
        <h2 className="profile__name">Привет, {name}!</h2>
        <form className="profile__form">
          <div className="profile__more">
            <label className="profile__about">Имя</label>
            <input
              className="profile__info"
              defaultValue={name}
              // disabled={isEdit}
              required
            />
          </div>
          <div className="profile__more">
            <label className="profile__about">E-mail</label>
            <input
              className="profile__info"
              defaultValue={email}
              // disabled={isEdit}
              required
            />
          </div>
        </form>
        <button className="profile__edit" onClick={toggleEdit}>
          Редактировать
        </button>
        <button className="profile__exit" onClick={handleLogOut}>Выйти из аккаунта</button>
      </div>
    </>
  );
}

export default Profile;
