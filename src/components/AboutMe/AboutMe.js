import React from "react";
import "./AboutMe.css"
import photoStudent from '../../images/photo.png'

function AboutMe(){
    return(
        <div className="aboutMe" id="aboutStudent">
            <div className="aboutMe__wrapper">
                <h2 className="aboutMe__about">Студент</h2>
                <div className="aboutMe__header">
                    <div className="aboutMe__profile">
                        <h3 className="aboutMe__name">Студент</h3>
                        <span className="aboutMe__direction">Фронтенд-разработчик, 30 лет</span>
                        <p className="aboutMe__text">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить.
                            С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                        <ul className="aboutMe__soc">
                            <li className="aboutMe__links">
                                <a target="_blank" rel="noreferrer" href="https://opensource.fb.com/" className="aboutMe__link" >Facebook</a>
                            </li>
                            <li className="aboutMe__links">
                                <a target="_blank"  rel="noreferrer" href="https://github.com/" className="aboutMe__link" >Github</a>
                            </li>
                        </ul>
                    </div>
                    <img src={photoStudent} alt="Фото студента" className="aboutMe__photo"/>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;
