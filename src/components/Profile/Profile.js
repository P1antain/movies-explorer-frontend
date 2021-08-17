import React, { useState } from "react";
import "./Profile.css";

function Profile({ name }) {
  const [isEdit, setEdit] = useState(false);

  function toggleEdit() {
    setEdit(!isEdit);
  }
  return (
    <div className="profile">
      <h2 className="profile__name">Привет, {name}!</h2>
      <form className="profile__form">
        <div className="profile__more">
          <label className="profile__about">Имя</label>
          <input
            className="profile__info"
            value={name}
            disabled={isEdit}
            required
          />
        </div>
        <div className="profile__more">
          <label className="profile__about">E-mail</label>
          <input
            className="profile__info"
            value={name}
            disabled={isEdit}
            required
          />
        </div>
      </form>
      <button className="profile__edit" onClick={toggleEdit}>
        Редактировать
      </button>
      <button className="profile__exit">Выйти из аккаунта</button>
    </div>
  );
}

export default Profile;
