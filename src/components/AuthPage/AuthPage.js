import React from "react";
import './AuthPage.css'
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";

function AuthPage({children, title, buttonText, question, linkFrom, path, ifLognin}){
    return(
        <div className="authPage">
            <div className="authPage__wrapper">
                <Logo/>
                <h2 className="authPage__title">{title}</h2>
                <form className="authPage__form">
                    {children}
                    { ifLognin &&
                        <span className="authPage__error">
                        Что-то пошло не так...
                    </span>
                    }
                    <button className="authPage__btn">
                        {buttonText}
                    </button>
                    <div className="authPage__more">
                        <span className="authPage__question">
                            {question}
                        </span>
                        <Link className="authPage__link" to={path} >{linkFrom}</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default AuthPage
