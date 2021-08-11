import React from "react";
import AuthPage from "../AuthPage/AuthPage";
import '../AuthPage/Auth.css'

function Login(){
    return(
        <AuthPage
        title="Рады видеть!"
        buttonText="Войти"
        question="Ещё не зарегистрированы?"
        linkFrom="Регистрация"
        path='/signup'
        ifLognin={false}
        >
            <form  className="auth">
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

export default Login
