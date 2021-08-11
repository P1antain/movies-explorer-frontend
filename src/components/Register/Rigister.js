import React from "react";
import AuthPage from "../AuthPage/AuthPage";
import '../AuthPage/Auth.css'

function Register(){
    return(
        <AuthPage
            title="Добро пожаловать!"
            buttonText="Зарегистрироваться"
            question="Уже зарегистрированы?"
            linkFrom="Войти"
            path='/signin'
            ifLognin={true}
        >
            <form  className="auth">
                <label htmlFor="Name" className="auth__about">Name</label>
                <input type="text"
                       className="auth__input"
                       placeholder="Ваше имя"
                       id="Name"
                />
                <label htmlFor="Email" className="auth__about">E-mail</label>
                <input type="text"
                       className="auth__input"
                       placeholder="Ваш email"
                       id="Email"
                />
                <label htmlFor="Password" className="auth__about">Password</label>
                <input type="text"
                       className="auth__input"
                       placeholder="Ваш password"
                       id="Password"
                />
            </form>

        </AuthPage>
    )
}

export default Register;
